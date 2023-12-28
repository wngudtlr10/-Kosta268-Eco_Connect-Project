// PundingComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Card.css'

const FundingComponent = ({ selectedCategory }) => {
  const [fundings, setFundings] = useState([]);
  const [filteredFundings, setFilteredFundings] = useState([]);
  console.log(selectedCategory)

  
  
  const images = [
    "https://i.postimg.cc/ZqG6TwQd/1000002230-main-027.jpg",
    "https://i.postimg.cc/Dy6QqdS9/1000002320-main-058.jpg",
    "https://i.postimg.cc/NjP1ns7b/1000002323-main-055.jpg",
    "https://i.postimg.cc/L8stvYfn/1000002673-main-040.jpg",
    "https://i.postimg.cc/Xq85k4Yf/1000002700-main-052.jpg",
    "https://i.postimg.cc/zXzKXbx0/1000003016-main-035.png",
    "https://i.postimg.cc/Gm9Dv0wD/1000003017-main-045.png",
    "https://i.postimg.cc/BQmD8Sys/1000003076-main-054.jpg",
    "https://i.postimg.cc/7Zc2VBwW/1000003170-main-04.jpg",
    "https://i.postimg.cc/bYH1hH9Z/1000003276-main-042.jpg",
    "https://i.postimg.cc/HWQ9LCds/16932-Magnify0.jpg",
    "https://i.postimg.cc/c40Mg5L7/17548-Magnify0.jpg",
    "https://i.postimg.cc/hvgxmfc4/18725-Magnify0.jpg",
    "https://i.postimg.cc/HLcQDq6m/22383-main-040.png",
    "https://i.postimg.cc/pTKzyDN1/24517-Magnify0.jpg"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/funding`);
        // API 엔드포인트를 실제 서버의 엔드포인트로 변경하세요.
        
        console.log(response);

       
        
        setFundings(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    // selectedCategory가 변경될 때마다 fundings를 필터링하여 filteredFundings에 저장
    if (selectedCategory) {
      // 만약 selectedCategory가 정의되어 있다면, 해당 카테고리를 기반으로 fundings 필터링
      setFilteredFundings(fundings.filter(funding => funding.categoryId === selectedCategory));
    } else {
      // 만약 selectedCategory가 정의되지 않았다면, fundings 배열에서 상위 10개 항목을 가져오기
      setFilteredFundings(fundings.slice(0, 10));
    }
  }, [selectedCategory, fundings]);
  

  if (!fundings.length) {
    return <div>Loading...</div>;
  }


  function prettyDate() {
    const endDate = new Date(filteredFundings[0].endAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    const prettyEndDate = endDate.toLocaleDateString('ko-KR', options);
    const result = `${prettyEndDate}`;
    return result;
  }

  return (
      <div className="punding-grid">
        {filteredFundings.map((item, index) => (
          <div className={`punding-card`} key={index}>
            <div className="overlap-10">
              <img key={index} src={images[index % images.length]} alt="이미지" className='element-3'/>
              <span className="card-badge">NEW</span>
                <button className="pubding_button">
                
                    <div className="div-wrapper">
                     <div className="text-wrapper-18">후원하기</div>
                    </div>
                 </button>
              <div className="info">
                <div className="text-wrapper-19">{item ? prettyDate() : "Loading..."} 까지</div>
                <div className="text-wrapper-20">{item.price}원</div>
              </div>
              <div className="info-2">
                <div className="match-value">
                  <div className="text-wrapper-21">{item.total_collect_amo}</div>
                </div>
                <p className="text-wrapper-22">{item.content}</p>
              </div>
              <div className="text-wrapper-23">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FundingComponent;
