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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

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

        MemberMission memberMission = new MemberMission();

        member.addMemberMission(memberMission);
        mission.addMemberMission(memberMission);
        memberMission.setStatus(MissionStatus.ONGOING);
        memberMissionRepository.save(memberMission);

    }




    public void addMemberMissionPost(MemberMissionPostDto memberMissionPostDto) {
        MemberMission memberMission = memberMissionRepository.findById(memberMissionPostDto.getMemberMissionId()).orElseThrow(() -> new IllegalArgumentException("no such member mission"));

        String filePath = "images/mission_post";
        memberMission.setTitle(memberMissionPostDto.getTitle());
        memberMission.setContent(memberMissionPostDto.getContent());
        memberMission.setStatus(MissionStatus.SUBMITTED);

        List<String> imageUrls = new ArrayList<>();
        for (MultipartFile image : memberMissionPostDto.getImages()) {
            String imageUrl = s3FileUploader.uploadFileToS3(image, filePath);
            MissionImage missionImage = new MissionImage(imageUrl, memberMission);
            memberMission.getImages().add(missionImage);
        }

        memberMissionRepository.save(memberMission);

    }

    public void approveMissionPost(Long memberMissionId) {

        MemberMission memberMission = memberMissionRepository.findById(memberMissionId).orElseThrow(() -> new IllegalArgumentException("no such memberMission"));
        Member member = memberRepository.findById(memberMission.getMember().getMemberId()).orElseThrow(() -> new IllegalArgumentException("no such member"));
        Mission mission = missionRepository.findById(memberMission.getMission().getMissionId()).orElseThrow(() -> new IllegalArgumentException("no such mission"));

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
}
