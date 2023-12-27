import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import './RewardCard.css';
import AwardAlter from '../alter/AwardAlter';
import AuthAxios from "../../utils/axios/AuthAxios";

const RewardCard = ({ selectedCategory }) => {

  const [gifticons, setGifticons] = useState([]);

  const fetchGifticons = () => {
    AuthAxios.get(`/api/gifticons`)
        .then((response) => {
          console.log(response);
          setGifticons(response.data);
        })
        .catch((error) => {
          console.log('Error fetching data from API: ', error);
        })
  }

  useEffect(() => {
    fetchGifticons()
  }, []);

  return (

     <div className='reward-card-wrap'>
         <Row xs={1} md={4} className="g-3" style={{maxWidth:'1100px'}}>

         {gifticons.map((gifticon, index) => {
         return (
               <Col>
                 <Card style={{ width: '15rem',borderRadius:'25px'}}>
                   <Card.Img variant="top" src={gifticon.image} className='mission-image-main' />
                   <Card.Body>
                     <div className='mission-info-wrap'>
                       <Card.Title className='mission-name-text' style={{fontSize:'14px'}}>{gifticon.name}</Card.Title>
                       <Card.Text className='mission-point-text'>{gifticon.price}P</Card.Text></div>
                     <Link to='' style={{ textDecoration: 'none' }}>
                       <AwardAlter gifticonId={gifticon.gifticonId}/>
                     </Link>
                   </Card.Body>
                 </Card>
               </Col>
         )
       })}
         </Row>

    </div>
  );
};

export default RewardCard;