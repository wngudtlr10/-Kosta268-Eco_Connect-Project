import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './RewardCard.css';
import AwardAlter from '../alter/AwardAlter';

const RewardCard = ({ selectedCategory }) => {
 
//   const [lists, setLists] = useState([]);
//   const [filteredLists, setFilteredLists] = useState([]);




  
//   const fetchMission = () => {
//       AuthAxios.get(`/api/missions`)
//           .then((response) => {
//               console.log(response);
//               setLists(response.data.content);
//           })
//   }

//   useEffect(() => {
//       fetchMission();
//   }, [selectedCategory])
  
//   useEffect(() => {
//     // selectedCategory가 변경될 때마다 fundings를 필터링하여 filteredFundings에 저장
//     if (selectedCategory) {
//       // 만약 selectedCategory가 정의되어 있다면, 해당 카테고리를 기반으로 fundings 필터링
//       setFilteredLists(lists.filter(funding => funding.category === selectedCategory));
//     } else {
//       // 만약 selectedCategory가 정의되지 않았다면, missions 배열에서 상위 10개 항목을 가져오기
//       setFilteredLists(lists.slice(0, 8));
//     }
//   }, [selectedCategory, lists]);

  return (
    // <Row xs={1} md={4} className="g-5" style={{maxWidth:'1100px'}}>
    //   {filteredLists.map((item, index) => (
    //      <Col key={index}>
    //     <Card style={{ width: '15rem',borderRadius:'25px'}}>
    //   <Card.Img variant="top" src= {item.image} className='mission-image-main' />
    //   <Card.Body>
    //     <div className='mission-info-wrap'>
    //     <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>{item ? item.title : "Loading..."} </Card.Title>
    //     <Card.Text className='mission-point-text'>{item ? item.point : "Loading..."}P</Card.Text></div>
    //     <Link to={`/mission/${item.missionId}`} style={{ textDecoration: 'none' }}>
    //     <AwardAlter /></Link>
    //   </Card.Body>
    // </Card>
    // </Col>
    //   ))}
    // </Row>
     <div className='reward-card-wrap'>
      <Row xs={1} md={4} className="g-3" style={{maxWidth:'1100px'}}>
         <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/qBS794k2/0000154206-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>칰힌</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
          <AwardAlter />
         </Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/pXKnCpDm/0000154208-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>좀 더 바삭한 칰힌</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/hvdKSQST/0000154532-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>빵집 30000원 교환권</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/hPmGn6j6/0000154692-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>백화점 상품권</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/d1DqxSpW/0000154693-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>백화점 상품권</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/J7DXyT0c/0000154843-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>치킨먹고싶다</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/bvyYQvTf/0000170057-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>우유커피</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/W16bFZ07/0000170059-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>검은커피</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/BnGnnpP6/0000170060-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>짧고검은커피</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/3wt89HS4/0000173797-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>ㅇㅇㅅㅋㄹ</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/Rqx4qCF8/0000176498-std1.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>반투명커피</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    <Col>
        <Card style={{ width: '15rem',borderRadius:'25px'}}>
      <Card.Img variant="top" src='https://i.postimg.cc/1RkqDpNx/E5000.jpg' className='mission-image-main' />
      <Card.Body>
        <div className='mission-info-wrap'>
        <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>어디야? 이디야</Card.Title>
        <Card.Text className='mission-point-text'>1500P</Card.Text></div>
        <Link to='' style={{ textDecoration: 'none' }}>
        <AwardAlter /></Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </div>
  );
};

export default RewardCard;