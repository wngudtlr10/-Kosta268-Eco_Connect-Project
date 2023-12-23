package com.kosta268.eco_connect.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class S3FileUploader {
    private final AmazonS3Client amazonS3Client;
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public String uploadFileToS3(MultipartFile multipartFile, String filePath) {
        File uploadFile = null;
        try {
            uploadFile = convert(multipartFile)
                    .orElseThrow(() -> new IllegalArgumentException("[error]: MultipartFile -> 파일 변환 실패"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // S3에 저장된 파일 이름
        String fileName = filePath + "/" + UUID.randomUUID();

        // S3로 업로드 후 로컬 파일 삭제
        String uploadImageUrl = putS3(uploadFile, fileName);
        removeNewFile(uploadFile);
        return uploadImageUrl;
    }

    public List<String> uploadMultiFileToS3(List<MultipartFile> multipartFiles, String filePath) {
        List<String> uploadImageUrls = new ArrayList<>();

        for (MultipartFile multipartFile : multipartFiles) {
            File uploadFile = null;
            try {
                uploadFile = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("[error]: MultipartFile -> 파일 변환 실패"));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            String fileName = filePath + "/" + UUID.randomUUID();

            String uploadImageUrl = putS3(uploadFile, fileName);
            removeNewFile(uploadFile);
            uploadImageUrls.add(uploadImageUrl);
        }

        return uploadImageUrls;
    }

    /**@param uploadFile : 업로드 할 파일
     * @Param fileName : 업로드 할 파일 이름
     * @return 업로드 경로
     */
    public String putS3(File uploadFile, String fileName) {
//        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(
//                CannedAccessControlList.PublicRead
//        ));
        amazonS3Client.putObject(new PutObjectRequest(bucket, fileName, uploadFile));
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    /**
     * S3에 있는 파일 삭제
     * 영어 파일만 삭제 가능 -> 한글 이름 파일은 안됨
     */
    public void deleteS3(String filePath) throws Exception {
        try {
            String key = filePath.substring(56); // 폴더/파일 확장자

            try {
                amazonS3Client.deleteObject(bucket, key);
            } catch (AmazonServiceException e) {
                log.info(e.getErrorMessage());
            }
        } catch (Exception exception) {
            log.info(exception.getMessage());
        }
        log.info("[S3Uploader] : S3에 있는 파일 삭제");
    }

    /**
     * 로컬에 저장된 파일 지우기
     * @param targetFile : 저장된 파일
     */
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("[파일 업로드] : 파일 삭제 성공");
            return;
        }
        log.info("[파일 업로드] : 파일 삭제 실패");
    }

    /**
     * 로컬에 파일 업로드 및 변환
     * @Param file : 업로드 할 파일
     */
    private Optional<File> convert(MultipartFile file) throws IOException {
        // 로컬에서 저장할 파일 경로 : user.dir => 현재 디렉토리 기준
//        String dirPath = System.getProperty("user.dir") + "/" + file.getOriginalFilename();
        String dirPath = System.getProperty("user.dir") + "/" + UUID.randomUUID();
        File convertFile = new File(dirPath);

        if (convertFile.createNewFile()) {
            // FileOutputStream 데이터를 파일에 바이트 스트림으로 저장
            try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                fos.write(file.getBytes());
            }
            return Optional.of(convertFile);
        }
        return Optional.empty();
    }
}
