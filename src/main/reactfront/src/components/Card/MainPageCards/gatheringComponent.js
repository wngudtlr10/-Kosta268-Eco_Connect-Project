import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from "react-router-dom";
import AuthAxios from '../../../utils/axios/AuthAxios';
import './gatheringComponent.css'

const GatheringComponent = ({ selectedCategory }) => {
    // const [gatherings, setGathering] = useState([]);
  

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       let url = 'http://localhost:3001/gatheringInfo';
    
    //       // 카테고리 값이 있는 경우, 해당 카테고리에 대한 데이터를 가져옴
    //       if (category !== undefined) {
    //         url += `?category=${category}`;
    //       }
    
    //       const response = await axios.get(url);
    //       const fetchedGatherings = response.data;
    
    //       // 최대 8개의 미션만 가져오도록 수정
    //       const limitedGatherings = fetchedGatherings.slice(0, 6);
    
    //       setGathering(limitedGatherings);
    //     } catch (error) {
    //       console.error('미션 데이터를 불러오는 중 오류 발생:', error);
    //     }
    //   };
    
    //   fetchData();
    // }, [category]);

    const [lists, setLists] = useState([]);
    const [filteredLists, setFilteredLists] = useState([]);
   
  



    const fetchData = () => {
        AuthAxios.get(`/api/gathering`)
            .then((response) => {
                setLists(response.data.content);
                
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    };


    useEffect(() => {
            fetchData();
    }, [selectedCategory])

    useEffect(() => {
      // selectedCategory가 변경될 때마다 fundings를 필터링하여 filteredFundings에 저장
      if (selectedCategory) {
        // 만약 selectedCategory가 정의되어 있다면, 해당 카테고리를 기반으로 fundings 필터링
        setFilteredLists(lists.filter(funding => funding.category === selectedCategory));
      } else {
        // 만약 selectedCategory가 정의되지 않았다면, missions 배열에서 상위 10개 항목을 가져오기
        setFilteredLists(lists.slice(0, 8));
      }
    }, [selectedCategory, lists]);

    return (
        <div className="gathering">
            {filteredLists.map((item, index) =>(
      <div className="gathering-box" key={index}>
        {/* <div className="gathering-users">
          <img className="group" alt="Group" src={item.userProfile[0]} />
          <img className="img" alt="Group" src={item.userProfile[1]} />
          <img className="group-2" alt="Group" src={item.userProfile[2]} />
          <img className="group-3" alt="Group" src={item.userProfile[3]} />
          <img className="group-4" alt="Group" src={item.userProfile[4]} />
        </div> */}

        <Link to={`/gathering/${item.gatheringId}`}><div className="text-wrapper-2">{item.title}</div></Link>
        
        <Link to={`/gathering/${item.gatheringId}`}><div className="text-wrapper-3">{item.intro}</div></Link>
        {/* <div className="overlap">
          <div className="item-rectangle" />
          <div className="text-wrapper-4">{item.category}</div>
        </div> */}
        <Link to={`/gathering/${item.gatheringId}`}><div className="image" style={{ backgroundImage: `url(${item.image})` }} /></Link>
       <div className='gathering-list-3'>
        <div className="gathering-list-5">
          <img
              className="gathering-list-6"
              alt="Gathering list"
              src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/group@2x.png"
          />
          <div className="gathering-list-7">
              <div className="text-wrapper-7">{item.count}/{item.capacity}</div>
          </div>
      </div>
      </div>
      </div>

      ))}
    </div>
   )
   }
  export default GatheringComponent;