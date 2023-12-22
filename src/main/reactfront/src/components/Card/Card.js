import React, {useState, useEffect} from 'react';
import "./Card.css";
import sum from "../Card/친환경제품10.jpeg";
import MailIcon from '@mui/icons-material';
import Badge from '@mui/material-next/Badge';


const Card = ({imageSrc, title, description}) => {
    return (
        <div className="card-container">
            <article className="card">
                <header className="card-header">
                    <img src={sum} alt="A cute character in a cup" className="card-image"/>
                    <span className="card-badge">NEW</span>
                </header>
                <Badge badgeContent={14} color="primary">
                    {/*<MailIcon color="action" />*/}
                </Badge>
                <section className="card-body">
                    <h1 className="card-title"  >귀여운 라이언 에센스</h1>
                    <p className="card-description">라이언 에센스의 장점: 보습력, 침투력, 가벼움</p>
                    <p className="card-description">라이언 에센스의 특징, 가성비 좋은 제품</p>
                    <p className="card-description">라이언 에센스의 장점, 단점에 대해 이야기</p>
                    <p className="card-description">라이언 에센스의 추천, 지성인 피부!!</p>
                </section>
                <button className="donate-button"
                        style={{justifyContent: 'center',alignItems:'center',marginInline:'25%', marginBottom:'25px', maxWidth:'200px'}}>
                    후원하기
                </button>
            </article>
        </div>
    );
};

export default Card;