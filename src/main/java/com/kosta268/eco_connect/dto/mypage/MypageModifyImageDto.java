package com.kosta268.eco_connect.dto.mypage;

import com.kosta268.eco_connect.entity.member.Member;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MypageModifyImageDto {
//    private Long memberId;
    private MultipartFile image;

//    public MypageModifyImageDto fromEntity(Member member) {
//        return builder()
////                .image(member.getProfile())
//                .build();
//    }
}
