package com.kosta268.eco_connect.service.mission;

import com.kosta268.eco_connect.dto.mission.MemberMissionPostDto;
import com.kosta268.eco_connect.entity.member.Member;
import com.kosta268.eco_connect.entity.mission.MemberMission;
import com.kosta268.eco_connect.entity.mission.Mission;
import com.kosta268.eco_connect.entity.mission.MissionImage;
import com.kosta268.eco_connect.entity.mission.MissionStatus;
import com.kosta268.eco_connect.repository.member.MemberRepository;
import com.kosta268.eco_connect.repository.mission.MemberMissionRepository;
import com.kosta268.eco_connect.repository.mission.MissionRepository;
import com.kosta268.eco_connect.service.S3FileUploader;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.sf.jsqlparser.util.validation.feature.DatabaseType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.security.MessageDigest;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class MemberMissionService {
    private final MemberMissionRepository memberMissionRepository;
    private final MemberRepository memberRepository;
    private final MissionRepository missionRepository;
    private final S3FileUploader s3FileUploader;

    public void joinMission(Long memberId, Long missionId) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));
        Mission mission = missionRepository.findById(missionId).orElseThrow(() -> new IllegalArgumentException("no such mission"));

        List<MemberMission> existingMemberMission = memberMissionRepository.findByMemberMemberIdAndMissionMissionId(memberId, missionId);


        if (!existingMemberMission.isEmpty()) {
            MemberMission mostRecentMemberMission = existingMemberMission.stream()
                    .max(Comparator.comparing(MemberMission::getParticipateAt))
                    .orElseThrow(() -> new IllegalArgumentException("no such member mission"));

            if (mostRecentMemberMission.getStatus() == MissionStatus.ONGOING || mostRecentMemberMission.getStatus() == MissionStatus.SUBMITTED) {
                throw new IllegalArgumentException("이미 참여하고 있는 미션입니다.");
            } else if (ChronoUnit.DAYS.between(mostRecentMemberMission.getParticipateAt(), LocalDateTime.now()) < 7) {
                throw new IllegalArgumentException("이전에 참여한 미션의 참여일로부터 7일이 지나지 않았습니다.");
            }
        }


        MemberMission memberMission = new MemberMission();

        member.addMemberMission(memberMission);
        mission.addMemberMission(memberMission);
        memberMission.setStatus(MissionStatus.ONGOING);
        memberMission.setParticipateAt(LocalDateTime.now());
        memberMissionRepository.save(memberMission);

    }




    public void addMemberMissionPost(MemberMissionPostDto memberMissionPostDto) {
        log.info("images = {}", memberMissionPostDto.getImages());
        MemberMission memberMission = memberMissionRepository.findById(memberMissionPostDto.getMemberMissionId()).orElseThrow(() -> new IllegalArgumentException("no such member mission"));

        String filePath = "images/mission_post";
        memberMission.setTitle(memberMissionPostDto.getTitle());
        memberMission.setContent(memberMissionPostDto.getContent());
        memberMission.setStatus(MissionStatus.SUBMITTED);

        if (memberMissionPostDto.getImages() != null) {
            for (MultipartFile image : memberMissionPostDto.getImages()) {
                String imageUrl = s3FileUploader.uploadFileToS3(image, filePath);
                String fileHash = calculateFileHash(image);
                MissionImage missionImage = new MissionImage(imageUrl, fileHash, memberMission);

                memberMission.getImages().add(missionImage);
            }
        }

        memberMissionRepository.save(memberMission);

    }

    public void approveMissionPost(Long memberMissionId) {

        MemberMission memberMission = memberMissionRepository.findById(memberMissionId).orElseThrow(() -> new IllegalArgumentException("no such memberMission"));
        Member member = memberRepository.findById(memberMission.getMember().getMemberId()).orElseThrow(() -> new IllegalArgumentException("no such member"));
        Mission mission = missionRepository.findById(memberMission.getMission().getMissionId()).orElseThrow(() -> new IllegalArgumentException("no such mission"));

        List<String> approvedHashes = new ArrayList<>();
        List<MemberMission> approvedMissions = memberMissionRepository.findByStatus(MissionStatus.COMPLETED);
        for (MemberMission approvedMission : approvedMissions) {
            for (MissionImage image : approvedMission.getImages()) {
                approvedHashes.add(image.getFileHash());
            }
        }

        for (MissionImage image : memberMission.getImages()) {
            String submittedFileHash = image.getFileHash();
            if (approvedHashes.contains(submittedFileHash)) {
                memberMission.reject();
                return;
            }
        }
        memberMission.approve();
        member.increasePoint(mission.getPoint());

    }

    public void rejectMissionPost(Long memberMissionId) {
        MemberMission memberMission = memberMissionRepository.findById(memberMissionId).orElseThrow(() -> new IllegalArgumentException("no such memberMission"));


        memberMission.reject();
        log.info("미션 승인 요청이 거절되었습니다.");


    }
    @Transactional(readOnly = true)
    public List<MemberMission> findAll() {
        return memberMissionRepository.findAll();
    }

    public void deleteMissionPost(Long memberMissionId) {
        memberMissionRepository.deleteById(memberMissionId);
    }

    public void deleteMemberMissions(Long memberId, List<Long> memberMissionIds) {
        Member member = memberRepository.findById(memberId).orElseThrow(() -> new IllegalArgumentException("no such member"));
        List<MemberMission> memberMissions = member.getMemberMissions();

        List<MemberMission> missionsToBeDelete = memberMissions.stream()
                .filter(memberMission -> memberMissionIds.contains(memberMission.getMemberMissionId()))
                .collect(Collectors.toList());

        memberMissions.removeAll(missionsToBeDelete);
        memberRepository.save(member);
        for (MemberMission memberMission : missionsToBeDelete) {
            memberMissionRepository.delete(memberMission);
        }
    }

    public String calculateFileHash(MultipartFile file) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(file.getBytes());
            byte[] digest = md.digest();

            StringBuilder hexString = new StringBuilder();
            for (int i = 0; i < digest.length; i++) {
                String hex = Integer.toHexString(0xff & digest[i]);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            throw new RuntimeException("could not calculate hash", e);
        }
    }
}
