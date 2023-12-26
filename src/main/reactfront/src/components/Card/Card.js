import React, {useState, useEffect} from 'react';
import "./Card.css";
import sum from "../Card/친환경제품10.jpeg";
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


const Card = ({imageSrc, title, description}) => {

    // const AWS = require('aws-sdk');
    //
    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    //     region: process.env.AWS_REGION
    // });
    //
    // const imageUrl = s3.getSignedUrl('getObject', {
    //     Bucket: 'your-s3-bucket-name',
    //     Key: 'image.jpg',
    //     Expires: 60 * 60 // URL이 만료되기까지의 시간(초단위)
    // });

    // console.log(imageUrl);
    return (
        <div className="card-container">
            <article className="card">
                <header className="card-header">
                    <img src={sum} alt="A cute character in a cup" className="card-image"/>
                    <span className="card-badge">NEW</span>
                </header>

                <section className="card-body">
                    <Stack direction="horizontal" gap={2}>
                        <Badge bg="secondary">Secondary</Badge>
                        <Badge bg="success">Success</Badge>
                        <Badge bg="danger">Danger</Badge>
                        <Badge bg="warning" text="dark">
                            Warning
                        </Badge>
                    </Stack>
                    <br/>
                    <h1 className="card-title">귀여운 라이언 에센스</h1>
                    <br/>
                    <p className="card-description">라이언 에센스의 장점: 보습력, 침투력, 가벼움</p>
                    <p className="card-description">라이언 에센스의 특징, 가성비 좋은 제품</p>
                    <p className="card-description">라이언 에센스의 장점, 단점에 대해 이야기</p>
                    <p className="card-description">라이언 에센스의 추천, 지성인 피부!!</p>
                </section>
                <Link to={`/funding/details`}>
                    <button className="donate-button"
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginInline: '25%',
                                marginBottom: '25px',
                                marginLeft: '145px',
                                maxWidth: '140px',
                                fontWeight: 'bold'

                            }}>
                        후원하기
                    </button>
                </Link>
            </article>
        </div>
    );
};

export default Card;
