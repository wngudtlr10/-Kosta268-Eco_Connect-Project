package com.kosta268.eco_connect.service.funding;

import com.amazonaws.HttpMethod;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.*;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;
import java.util.ArrayList;
import java.util.EmptyStackException;
import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class FundingAmazonS3Service {
    //AWS S3 Bucket
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

//    @Value("${cloud.aws.credentials.accessKey}")
//    private String accessKey;
//
//    @Value("${cloud.aws.credentials.secretKey}")
//    private String secretKey;
//
//    @Value("${cloud.aws.region.static}")
//    private String region;

    private final AmazonS3 amazonS3Client;


    //file upload
    public List<String> uploadFile(List<MultipartFile> multipartFiles) {
        List<String> fileNameList = new ArrayList<>();

        // forEach 구문을 통해 multipartFiles 리스트로 넘어온 파일들을 순차적으로 fileNameList 에 추가
        multipartFiles.forEach(file -> {
            String fileName = createFileName(file.getOriginalFilename());
            String filePath = "funding/" + fileName;

            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentLength(file.getSize());
            objectMetadata.setContentType(file.getContentType());

            try (InputStream inputStream = file.getInputStream()) {
                amazonS3Client.putObject(new PutObjectRequest(bucket, filePath, inputStream, objectMetadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
                System.out.println("s3 이미지 업로드에 성공했습니다.");
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 업로드에 실패했습니다.");
            }
            //원본 파일이름과 변경된 파일이름을 db에 저장 -> 다운로드 시 필요
            fileNameList.add(fileName);
        });

        return fileNameList;
    }

    //file exist method
    private void validateFileExists(MultipartFile multipartFile) {
        if (multipartFile.isEmpty()) {
            throw new EmptyStackException();  //  -> EmptyFileException() 교체
        }
    }

    // 먼저 파일 업로드시, 파일명을 난수화하기 위해 UUID 를 활용하여 난수를 돌린다.
    public String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    // file 형식이 잘못된 경우를 확인하기 위해 만들어진 로직이며, 파일 타입과 상관없이 업로드할 수 있게 하기위해, "."의 존재 유무만 판단하였습니다.
    private String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "잘못된 형식의 파일" + fileName + ") 입니다.");
        }
    }

    //s3 이미지 파일 삭제
    public void deleteFile(String fileName) {
        amazonS3Client.deleteObject(new DeleteObjectRequest(bucket, fileName));
        System.out.println(bucket);
    }

    // Generate a pre-signed URL for an image in the S3 bucket
    public URL generatePresignedUrl(String fileName) {
        // Specify the expiration time for the URL
        Date expiration = new Date();
        long expTimeMillis = expiration.getTime();
        expTimeMillis += 1000 * 60 * 60; // 1 hour
        expiration.setTime(expTimeMillis);

        // Generate the pre-signed URL
        GeneratePresignedUrlRequest generatePresignedUrlRequest =
                new GeneratePresignedUrlRequest(bucket, fileName)
                        .withMethod(HttpMethod.GET)
                        .withExpiration(expiration);

        return amazonS3Client.generatePresignedUrl(generatePresignedUrlRequest);
    }

//    // 이미지파일명 중복 방지
//    private String createFileName(String fileName) {
//        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
//    }


//    @PostConstruct
//    public AmazonS3Client amazonS3Client() {
//        BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKey, secretKey);
//        return (AmazonS3Client) AmazonS3ClientBuilder.standard()
//                .withRegion(region)
//                .withCredentials(new AWSStaticCredentialsProvider(awsCreds))
//                .build();
//    }

//    public List<String> upload(List<MultipartFile> multipartFile) {
//        List<String> imgUrlList = new ArrayList<>();
//
//        // forEach 구문을 통해 multipartFile로 넘어온 파일들 하나씩 fileNameList에 추가
//        for (MultipartFile file : multipartFile) {
//            String fileName = createFileName(file.getOriginalFilename());
//            ObjectMetadata objectMetadata = new ObjectMetadata();
//            objectMetadata.setContentLength(file.getSize());
//            objectMetadata.setContentType(file.getContentType());
//
//            try(InputStream inputStream = file.getInputStream()) {
//                s3Client.putObject(new PutObjectRequest(bucket+"/post/image", fileName, inputStream, objectMetadata)
//                        .withCannedAcl(CannedAccessControlList.PublicRead));
//                imgUrlList.add(s3Client.getUrl(bucket+"/post/image", fileName).toString());
//            } catch(IOException e) {
//                throw new PrivateException(Code.IMAGE_UPLOAD_ERROR);
//            }
//        }
//        return imgUrlList;
//    }
//
//    // 파일 유효성 검사
//    private String getFileExtension(String fileName) {
//        if (fileName.length() == 0) {
//            throw new PrivateException(Code.WRONG_INPUT_IMAGE);
//        }
//        ArrayList<String> fileValidate = new ArrayList<>();
//        fileValidate.add(".jpg");
//        fileValidate.add(".jpeg");
//        fileValidate.add(".png");
//        fileValidate.add(".JPG");
//        fileValidate.add(".JPEG");
//        fileValidate.add(".PNG");
//        String idxFileName = fileName.substring(fileName.lastIndexOf("."));
//        if (!fileValidate.contains(idxFileName)) {
//            throw new PrivateException(Code.WRONG_IMAGE_FORMAT);
//        }
//        return fileName.substring(fileName.lastIndexOf("."));
//    }



}
