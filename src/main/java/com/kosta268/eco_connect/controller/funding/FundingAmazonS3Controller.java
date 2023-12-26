package com.kosta268.eco_connect.controller.funding;

import com.kosta268.eco_connect.service.funding.FundingAmazonS3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/funding/file")
public class FundingAmazonS3Controller {

    private final FundingAmazonS3Service awsS3Service;

    //funding file image_Url get
    @GetMapping("/getImageUrl")
    public ResponseEntity<String> getImageUrl(@RequestParam String fileName) {
        try {
            URL url = awsS3Service.generatePresignedUrl(fileName);
            System.out.println("getImageUrl");
            return ResponseEntity.ok(url.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error generating URL");
        }
    }

    //funding 다중 파일 업로드
    @PostMapping("/uploadFile")
    public ResponseEntity<List<String>> uploadFile(List<MultipartFile> multipartFiles){
        return ResponseEntity.ok(awsS3Service.uploadFile(multipartFiles));
    }

    //funding 파일 삭제
    @DeleteMapping("/deleteFile")
    public ResponseEntity<String> deleteFile(@RequestParam String fileName){
        awsS3Service.deleteFile(fileName);
        return ResponseEntity.ok(fileName);
    }


}


