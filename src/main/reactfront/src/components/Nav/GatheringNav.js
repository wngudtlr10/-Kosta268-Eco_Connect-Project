import './FundingNav.css'
import React , {useState} from "react";
import Nav from 'react-bootstrap/Nav';


const GatheringNav = ({ onSelectCategory }) => {
    //사용법 fundingTest 참조
    return(
        <>
        <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text" onClick={() => onSelectCategory('')}>전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => onSelectCategory('CLEAN_UP')}>환경미화</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-4" href="#"className="nav-text" onClick={() => onSelectCategory('TALENT_DONATION')}>재능기부</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-6" href="#"className="nav-text" onClick={() => onSelectCategory('SPONSORSHIP')}>후원</Nav.Link>
           </Nav.Item>
         </Nav>
       </>
    );
} 

export default GatheringNav;