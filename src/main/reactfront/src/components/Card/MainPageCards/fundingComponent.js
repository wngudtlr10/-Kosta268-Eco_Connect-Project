// PundingComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FundingComponent = () => {
  const [fundings, setFundings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/funding'); // API 엔드포인트를 실제 서버의 엔드포인트로 변경하세요.
        const fetchedPundings = response.data;
        console.log(response);

        const limitedPunding = fetchedPundings.slice(0, 10);
        
        setFundings(limitedPunding);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  if (!fundings.length) {
    return <div>Loading...</div>;
  }

  return (
      <div className="punding-grid">
        {fundings.map((funding, index) => (
          <div className={`punding-card`} key={index}>
            <div className="overlap-10">
              <img className="element-3" alt="Element" src={funding.image} />
                <button className="pubding_button">
                    <div className="div-wrapper">
                     <div className="text-wrapper-18">후원하기</div>
                    </div>
                 </button>
              <div className="info">
                <div className="text-wrapper-19">{funding.endAt}</div>
                <div className="text-wrapper-20">{funding.price}</div>
              </div>
              <div className="info-2">
                <div className="match-value">
                  <div className="text-wrapper-21">{funding.total_collect_amo}</div>
                </div>
                <p className="text-wrapper-22">{funding.content}</p>
              </div>
              <div className="text-wrapper-23">{funding.title}</div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default FundingComponent;
