// PundingComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FundingComponent = () => {
  const [pundings, setPundings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/punding'); // API 엔드포인트를 실제 서버의 엔드포인트로 변경하세요.
        const fetchedPundings = response.data;

        const limitedPunding = fetchedPundings.slice(0, 10);
        
        setPundings(limitedPunding);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  if (!pundings.length) {
    return <div>Loading...</div>;
  }

  return (
      <div className="punding-grid">
        {pundings.map((punding, index) => (
          <div className={`punding-card`} key={index}>
            <div className="overlap-10">
              <img className="element-3" alt="Element" src={punding.image} />
                <button className="pubding_button">
                    <div className="div-wrapper">
                     <div className="text-wrapper-18">후원하기</div>
                    </div>
                 </button>
              <div className="info">
                <div className="text-wrapper-19">{punding.leftDate}</div>
                <div className="text-wrapper-20">{punding.price}</div>
              </div>
              <div className="info-2">
                <div className="match-value">
                  <div className="text-wrapper-21">{punding.achievement}</div>
                </div>
                <p className="text-wrapper-22">{punding.description}</p>
              </div>
              <div className="text-wrapper-23">{punding.title}</div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FundingComponent;
