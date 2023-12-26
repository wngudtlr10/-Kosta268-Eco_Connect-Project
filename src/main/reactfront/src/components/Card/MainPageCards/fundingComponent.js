// PundingComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FundingComponent = ({ selectedCategory }) => {
  const [fundings, setFundings] = useState([]);
  const [filteredFundings, setFilteredFundings] = useState([]);
  console.log(selectedCategory)
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

  return (
      <div className="punding-grid">
        {filteredFundings.map((item, index) => (
          <div className={`punding-card`} key={index}>
            <div className="overlap-10">
              <img className="element-3" alt="Element" src={item.image} />
                <button className="pubding_button">
                    <div className="div-wrapper">
                     <div className="text-wrapper-18">후원하기</div>
                    </div>
                 </button>
              <div className="info">
                <div className="text-wrapper-19">{item.endAt}</div>
                <div className="text-wrapper-20">{item.price}</div>
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
