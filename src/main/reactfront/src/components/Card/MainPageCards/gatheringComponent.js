import React, { useEffect, useState } from 'react';
import axios from 'axios';


const GatheringComponent = ({category}) => {
    const [gatherings, setGathering] = useState([]);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          let url = 'http://localhost:3001/gatheringInfo';
    
          // 카테고리 값이 있는 경우, 해당 카테고리에 대한 데이터를 가져옴
          if (category !== undefined) {
            url += `?category=${category}`;
          }
    
          const response = await axios.get(url);
          const fetchedGatherings = response.data;
    
          // 최대 8개의 미션만 가져오도록 수정
          const limitedGatherings = fetchedGatherings.slice(0, 6);
    
          setGathering(limitedGatherings);
        } catch (error) {
          console.error('미션 데이터를 불러오는 중 오류 발생:', error);
        }
      };
    
      fetchData();
    }, [category]);
    return (
        <div className="gathering">
            {gatherings.map((gathering, index) =>(
      <div className="gathering-box" key={index}>
        <div className="gathering-users">
          <img className="group" alt="Group" src={gathering.userProfile[0]} />
          <img className="img" alt="Group" src={gathering.userProfile[1]} />
          <img className="group-2" alt="Group" src={gathering.userProfile[2]} />
          <img className="group-3" alt="Group" src={gathering.userProfile[3]} />
          <img className="group-4" alt="Group" src={gathering.userProfile[4]} />
        </div>

        <div className="text-wrapper-2">{gathering.title}</div>
        <div className="text-wrapper-3">{gathering.explain}</div>
        <div className="overlap">
          <div className="gathering-rectangle" />
          <div className="text-wrapper-4">{gathering.category}</div>
        </div>
        <img className="image" alt="Image" src={gathering.mainImage} />
      </div>
      ))}
    </div>
   )
   }
  export default GatheringComponent;