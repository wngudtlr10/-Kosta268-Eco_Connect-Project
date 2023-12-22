import { useState, useRef, useEffect } from "react";
import React  from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import "./home.css";
import MissionComponent2 from "./missionComponent2";
import GatheringComponent from "./gatheringComponent";
import PundingComponent from "./pundingComponent";

 const Home = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedCategory2, setSelectedCategory2] = useState('전체');
  const [selectedCategory1, setSelectedCategory1] = useState('전체');

  const handleNavItemClick = (category) => {
    setSelectedCategory(category);
  };
  const handleNavItemClick1 = (category) => {
    setSelectedCategory1(category);
  };
  const handleNavItemClick2 = (category) => {
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
        const response = await axios.get('http://localhost:3001/notice'); // 서버 주소에 맞게 수정
        setNotice(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);


  return (
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
      <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
        <Nav.Item className="nav-box">
          <Nav.Link href="#" className="nav-text" onClick={() => handleNavItemClick('전체')}>전체</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-box">
          <Nav.Link eventKey="link-1" href="#" className="nav-text" onClick={() => handleNavItemClick('참여형')}>참여형</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-box">
          <Nav.Link eventKey="link-2" href="#" className="nav-text" onClick={() => handleNavItemClick('도전형')}>도전형</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-box">
          <Nav.Link eventKey="link-3" href="#" className="nav-text" onClick={() => handleNavItemClick('활동형')}>활동형</Nav.Link>
        </Nav.Item>
      </Nav>
 <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
      {/* 내용 컴포넌트를 선택된 카테고리에 따라 렌더링 */}
      {selectedCategory === '전체' && <MissionComponent2 />}
      {selectedCategory === '참여형' && <MissionComponent2 category={0}/>}
      {selectedCategory === '도전형' && <MissionComponent2 category={1}/>}
      {selectedCategory === '활동형' && <MissionComponent2 category={2}/>}
     
   
      <div className="banner-2">
      <div className="banner_text">마음이 맞는사람들과 함께 봉사모임을 진행해보세요</div>
      </div>
      <div className="gathering-title">봉사모임</div>
           <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text" onClick={() => handleNavItemClick1('전체')}>전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
             <Nav.Link eventKey="link-1" href="#"className="nav-text" onClick={() => handleNavItemClick1('환경미화')}>환경미화</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => handleNavItemClick1('재능기부')}>재능기부</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-3" href="#"className="nav-text" onClick={() => handleNavItemClick1('후원')}>후원</Nav.Link>
           </Nav.Item>
         </Nav>
      <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
  
    <GatheringComponent />
    {/* 내용 컴포넌트를 선택된 카테고리에 따라 렌더링 추후 백과 연결후 활성화 */}
    {/* {selectedCategory === '전체' && <GatheringComponent />}
      {selectedCategory === '참여형' && <GatheringComponent category={0}/>}
      {selectedCategory === '도전형' && <GatheringComponent category={1}/>}
      {selectedCategory === '활동형' && <GatheringComponent category={2}/>} */}

      <div className="banner-3">
        <div className="banner-cover-3" />
      </div>
      <div className="text-wrapper-10">인기 펀딩 상품</div>
      <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text" onClick={() => handleNavItemClick2('전체')}>전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
         
             <Nav.Link eventKey="link-1" href="#"className="nav-text"  onClick={() => handleNavItemClick2('베스트')}>베스트</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => handleNavItemClick2('패션잡화')}>패션잡화</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-3" href="#"className="nav-text" onClick={() => handleNavItemClick2('테크가전')}>테크가전</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-4" href="#"className="nav-text" onClick={() => handleNavItemClick2('푸드')}>푸드</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-5" href="#"className="nav-text" onClick={() => handleNavItemClick2('기타')}>기타</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-6" href="#"className="nav-text" onClick={() => handleNavItemClick2('뷰티')}>뷰티</Nav.Link>
           </Nav.Item>
           

         </Nav>
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
          <PundingComponent />
          {/* 내용 컴포넌트를 선택된 카테고리에 따라 렌더링 추후 백과 연결후 활성화 */}
    {/* {selectedCategory === '전체' && <PundingComponent />}
      {selectedCategory === '참여형' && <PundingComponent category={0}/>}
      {selectedCategory === '도전형' && <PundingComponent category={1}/>}
      {selectedCategory === '활동형' && <PundingComponent category={2}/>} */}
      </div>
    </div>
  );
};

export default Home;