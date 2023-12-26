import './FundingNav.css'
import React , {useState} from "react";
import Nav from 'react-bootstrap/Nav';


const FundingNav = ({ onSelectCategory }) => {
    //사용법 fundingTest 참조
    return(
        <>
        <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text" onClick={() => onSelectCategory('')}>전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => onSelectCategory(1)}>패션</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-4" href="#"className="nav-text" onClick={() => onSelectCategory(2)}>푸드</Nav.Link>
           </Nav.Item>
          
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-6" href="#"className="nav-text" onClick={() => onSelectCategory(3)}>뷰티</Nav.Link>
           </Nav.Item>
         </Nav>
       </>
    );
} 

export default FundingNav;