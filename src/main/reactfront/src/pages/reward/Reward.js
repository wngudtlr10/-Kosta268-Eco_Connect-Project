import "./Reward.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthAxios from "../../utils/axios/AuthAxios";
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/esm/Button";

import MissionPageNation from "../../components/PageNation/MGPageNation";
import RewardCard from "../../components/Card/RewardCard";

function Reward() {
    const [lists, setLists] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState('전체');
    const [status, setStatus] = useState("OPEN");
    const [title, setTitle] = useState("");
    
   

    function createPageNumberArray(startPage, endPage) {
        let pages = []
        for (let i = startPage; i <= endPage; i ++) {
            pages.push(i);
        }
        return pages;
    }

    const handleCategory = (category) => {
        setCategory(category);
    }

    const handleStatus = (e) => {
        setStatus(e.target.value);
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const filteredMissions = lists.filter(list => {
        if (category === '전체') {
            return true;
        } else {
            return list.category === category;
        }
    });



    useEffect(() => {
        const pageFromUrl = searchParams.get('page');
        if (pageFromUrl !== null) {
            setPage(parseInt(pageFromUrl))
        }

    }, [])


    return (
        <div className="reward-index-index">
            <div className="mission-list-wrap-wrapper">
                <div className="mission-list-wrap">
                    <div className="mission-image-wrap">
                        <img
                            className="mission-image"
                            alt="Mission image"
                            src="https://i.postimg.cc/DyCfp9cs/gift-1420830-1280.jpg"
                        />
                    </div>
                    {/* <div className="div" onClick={() => handleCategory("전체")}>전체&nbsp;&nbsp;&nbsp;&nbsp; |</div> */}
                    <div className="mission-middle-menu" >
                        <Nav variant="phills" defaultActiveKey="#" style={{flexWrap:'nowrap',whiteSpace:'nowrap'}}>
                              <Nav.Item >
                                <Nav.Link href="#" className="nav-text" onClick={() => handleCategory('전체')}>전체</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#"className="nav-text" onClick={() => handleCategory(1)}>커피/베이커리</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => handleCategory(2)}>상품권/마트</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="link-3" href="#"className="nav-text" onClick={() => handleCategory(3)}>영화/OTT</Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <div className="middle-menu-search">
                    <img
                            className="search-icon"
                            alt="Search icon"
                            src="https://ifh.cc/g/mWbmjO.png"
                        />
                    <input className="search-box" value={title} onChange={handleTitle} type="text" placeholder="검색">
                    </input>
                 </div>
                     </div>

                    <div className="main-wrap">
                        <div className="main-info">
                            <div className="div-6">
                                <div className="my-profile-wrap">
                                    <div className="my-profile">
                                        <div className="my-profile-image">
                                            <div className="profile-image">
                                                <img
                                                    className="profile-image-2"
                                                    alt="Profile image"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/profile-image@2x.png"
                                                />
                                            </div>
                                        </div>
                                        <div className="my-profile-info-wrap">
                                            <div className="username-info-wrap">
                                                <img
                                                    className="main-account"
                                                    alt="Main account"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/main-account.svg"
                                                />
                                                <div className="username-info">
                                                    <div className="div-4">
                                                        <div className="username">User Name</div>
                                                    </div>
                                                    <img
                                                        className="status-wrap"
                                                        alt="Status wrap"
                                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/status-wrap.svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="profile-detail">
                                                <div className="profile-nickname">
                                                    <div className="nickname">Nickname</div>
                                                </div>
                                                <div className="profile-info-wrap">
                                                    <div className="profile-info">
                                                        <div className="profile-grade">서포터</div>
                                                    </div>
                
                                                </div>
                                                <div className="div-2">
                                                    <div className="my-point-blank" />
                                                    <div className="my-point-text-wrap">
                                                        <div className="text-wrapper-2">포인트</div>
                                                    </div>
                                                    <div className="div-2">
                                                        <div className="my-point-hold">300 P</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-profile-button">
                                                <div className="donation-list-button">
                                                    <div className="text-wrapper-3">후원목록</div>
                                                </div>
                                                <div className="mypage-button">
                                                    <div className="text-wrapper-3">마이페이지</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-new-challenge">
                                    <div className="sub-banner-wrap">
                                        <img
                                            className="sub-banner"
                                            alt="Main image"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/main-image.png"
                                        />
                                    </div>
                                    <div className="image-info-wrap">
                                        <div className="div-2">
                                            <div className="image-info-text-big">새로운 도전을 시작해보세요</div>
                                        </div>
                                        <div className="div-2">
                                            <p className="image-info-text">
                                                개인 후원부터 제품・콘텐츠・서비스 출시, 성장까지 에코커넥트가 함께할게요
                                            </p>
                                        </div>
                                        <div className="div-6">
                                            <div className="image-button-wrap">
                                                <div className="explore-button">
                                                    <div className="text-wrapper-4">Explore</div>
                                                </div>
                                                <button className="create-button">
                                                    <div className="text-wrapper-4">Create</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <RewardCard />
                        {/* <MissionPageNation page={page} totalPages={totalPages} setPage={setPage} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reward;