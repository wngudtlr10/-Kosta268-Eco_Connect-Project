import React, {useState, useEffect} from 'react';
import "./Card.css";
import sum from "../Card/친환경제품10.jpeg";
import {Link} from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


const Card = ({imageSrc, title, description}) => {
    const [cards, setCards] = useState([
        {
          imageSrc: "https://i.postimg.cc/ZqG6TwQd/1000002230-main-027.jpg",
          title: "친환경 3단 우산 ",
          description: "건강한 미래와 환경을 위한 작은 실천"
        },
        {
          imageSrc: "https://i.postimg.cc/Dy6QqdS9/1000002320-main-058.jpg",
          title: "친환경 텀블러",
          description: "친환경 소재로 만든 텀블러"
        },
        {
            imageSrc: "https://i.postimg.cc/NjP1ns7b/1000002323-main-055.jpg",
            title: "재활용 소재 텀블러",
            description: "재활용 소재로 만든 텀블러"
          },
          {
            imageSrc: "https://i.postimg.cc/L8stvYfn/1000002673-main-040.jpg",
            title: "모두애 웰컴팩",
            description: "이제 시작하는 분들을 위한 웰컴팩"
          },
          {
            imageSrc: "https://i.postimg.cc/Xq85k4Yf/1000002700-main-052.jpg",
            title: "모두애 스타터팩",
            description: "새로운 시작을 응원하는 스타터팩"
          },
          {
            imageSrc: "https://i.postimg.cc/zXzKXbx0/1000003016-main-035.png",
            title: "생분해 화장솜",
            description: "자연분해가 가능한 화장솜"
          },
          {
            imageSrc: "https://i.postimg.cc/Gm9Dv0wD/1000003017-main-045.png",
            title: "생분해 물티슈",
            description: "자연분해가 가능한 물티슈"
          },
          {
            imageSrc: "https://i.postimg.cc/BQmD8Sys/1000003076-main-054.jpg",
            title: "우드 머그컵",
            description: "편백나무로 만든 머그컵"
          },
          {
            imageSrc: "https://i.postimg.cc/7Zc2VBwW/1000003170-main-04.jpg",
            title: "커피가루 재활용 텀블러",
            description: "커피가루를 재활용해 만든 텀블러"
          },
          
        // 나머지 카드들도 동일한 형태로 추가
      ]);

    
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

    return (
        <div className="card-container">
        {cards.map((card, index) => (
          <article className="card" key={index}>
            <header className="card-header">
              <img src={card.imageSrc} alt="A cute character in a cup" className="card-image" />
              <span className="card-badge">NEW</span>
            </header>
  
            <section className="card-body">
              <Stack direction="horizontal" gap={2}>
                {/* <Badge bg="secondary">Secondary</Badge>
                <Badge bg="success">Success</Badge>
                <Badge bg="danger">Danger</Badge>
                <Badge bg="warning" text="dark">
                  Warning
                </Badge> */}
              </Stack>
              <br />
              <h1 className="card-title">{card.title}</h1>
              <br />
              <p className="card-description">{card.description}</p>
            </section>
            <Link to={`/funding/details`}>
              <button
                className="donate-button"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginInline: '25%',
                  marginBottom: '25px',
                  marginLeft: '145px',
                  maxWidth: '140px',
                  fontWeight: 'bold'
                }}
              >
                후원하기
              </button>
            </Link>
          </article>
        ))}
      </div>
    );
};

export default Card;
