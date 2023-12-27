import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from "react-router-dom";
import AuthAxios from '../../../utils/axios/AuthAxios';
import './missionComponent2.css';

const MissionComponent2 = ({ selectedCategory }) => {
  // const [missions, setMissions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let url = 'http://localhost:3001/mission';
  
  //       // 카테고리 값이 있는 경우, 해당 카테고리에 대한 데이터를 가져옴
  //       if (category !== undefined) {
  //         url += `?category=${category}`;
  //       }
  
  //       const response = await axios.get(url);
  //       const fetchedMissions = response.data;
  
  //       // 최대 8개의 미션만 가져오도록 수정
  //       const limitedMissions = fetchedMissions.slice(0, 8);
  
  //       setMissions(limitedMissions);
  //     } catch (error) {
  //       console.error('미션 데이터를 불러오는 중 오류 발생:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [category]);
  const [lists, setLists] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);




  
  const fetchMission = () => {
      AuthAxios.get(`/api/missions`)
          .then((response) => {
              console.log(response);
              setLists(response.data.content);
          })
  }

  useEffect(() => {
      fetchMission();
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
    <Row xs={1} md={4} className="g-5" style={{maxWidth:'1100px'}}>
      {filteredLists.map((item, index) => (
         <Col key={index}>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src= {item.image} className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>{item ? item.title : "Loading..."} </Card.Title>
        <Card.Text className='mission-point-text'>{item ? item.point : "Loading..."}P</Card.Text></div>
        <Link to={`/mission/${item.missionId}`} style={{ textDecoration: 'none' }}>
        <Button variant="success" style={{color:'white',margin:"0 auto",width:'200px'}}>참여하기</Button></Link>
      </Card.Body>
    </Card>
    </Col>
      ))}
    </Row>
  );
};

export default MissionComponent2;