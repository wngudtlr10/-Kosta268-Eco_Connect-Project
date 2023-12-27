import { useState, useRef, useEffect } from "react";
import React  from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import "./home.css";
import MissionComponent2 from "../../components/Card/MainPageCards/missionComponent2";
import GatheringComponent from "../../components/Card/MainPageCards/gatheringComponent";
import FundingComponent from "../../components/Card/MainPageCards//fundingComponent";
import Layout from "../../components/Layout/Layout";
import FundingNav from "../../components/Nav/FundingNav";
import MissionNav from "../../components/Nav/MissionNav";
import GatheringNav from "../../components/Nav/GatheringNav";

 const Home = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategory2, setSelectedCategory2] = useState('');
  const [selectedCategory1, setSelectedCategory1] = useState('');

  const handleNavItemClick = (category) => {
    setSelectedCategory(category);
  };
  const handleNavItemClick1 = (category) => {
    setSelectedCategory1(category);
  };
  const handleCategorySelect = (category) => {
    console.log(category)
    setSelectedCategory2(category);
  };


  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
     scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const [notices, setNotice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/notice'); // 서버 주소에 맞게 수정
        setNotice(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Layout>
    <div className="home">
      <img
        className="main-banner"
        alt="main-banner"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/--2-1.png"
      />
      <div className="notice">
        <div className="overlap-notice">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <div className="notice-title">공지</div>
        </div>
      </div>
      {notices.map((notice, index) => (
      <p className="notice-text" key={index}>{notice.title}</p>
      ))}
      <p className="move-notice-detail">
        <span className="move-notice-detail-text">공지 전체보기 &gt; </span>
      </p>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-28.png"
      />
      <div className="banner">
        <div className="banner_text">미션에 참여하시면 포인트를 흭득하여 리워드와 교환이 가능합니다</div>
      </div>
      <div className="misson-title">진행중인 미션</div>
    <MissionNav onSelectCategory={handleNavItemClick}/>
 <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
     <MissionComponent2 selectedCategory={selectedCategory}/>
     
   
      <div className="banner-2">
      <div className="banner_text">마음이 맞는사람들과 함께 봉사모임을 진행해보세요</div>
      </div>
      <div className="gathering-title">봉사모임</div>
      <GatheringNav onSelectCategory={handleNavItemClick1}/>
      <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
  
    <GatheringComponent selectedCategory={selectedCategory1}/>
   
      <div className="banner-3">
        <div className="banner-cover-3" />
      </div>
      <div className="text-wrapper-10">인기 펀딩 상품</div>
       <FundingNav onSelectCategory={handleCategorySelect}/>
      <img
        className="line-2"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-17.png"
      />
      <div className="punding-scroll"
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}>
         <FundingComponent selectedCategory={selectedCategory2} />
        
      </div>
    </div>
    </Layout>
  );
};

export default Home;