import "./MissionList.css";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import AuthAxios from "../../utils/axios/AuthAxios";
import Nav from 'react-bootstrap/Nav';

import MissionPageNation from "../../components/PageNation/MGPageNation";

function MissionList() {
    const [lists, setLists] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, setCategory] = useState('전체');

    
    const fetchMission = () => {
        AuthAxios.get(`/api/missions?page=${page}`)
            .then((response) => {
                console.log(response);
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
    }

    const joinMission = async (missionId) => {
        try {
            const response = await AuthAxios.post(`/api/missions/${missionId}/join`)
            if (response.status === 200) {
                alert("미션 참여에 성공했습니다.");
            } else {
                alert("미션 참여에 실패했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("미션 참여 중 오류가 발생했습니다.")
        }

    }

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

    useEffect(() => {
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
        fetchMission();
    }, [page])


    useEffect(() => {
        console.log(lists);
    }, [lists])

    return (
        <div className="mission-list-index">
            <div className="mission-list-wrap-wrapper">
                <div className="mission-list-wrap">
                    <div className="mission-image-wrap">
                        <img
                            className="mission-image"
                            alt="Mission image"
                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image.png"
                        />
                    </div>
                    {/* <div className="div" onClick={() => handleCategory("전체")}>전체&nbsp;&nbsp;&nbsp;&nbsp; |</div> */}
                    <div className="mission-middle-menu">
                        <Nav variant="phills" defaultActiveKey="#">
                              <Nav.Item >
                                <Nav.Link href="#" className="nav-text" onClick={() => handleCategory("전체")}>전체</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="link-1" href="#"className="nav-text" onClick={() => handleCategory("참여형")}>참여형</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => handleCategory("도전형")}>도전형</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="link-3" href="#"className="nav-text" onClick={() => handleCategory("활동형")}>활동형</Nav.Link>
                              </Nav.Item>
                            </Nav>
                             
                            <div className="middle-menu-search">
                    <img
                            className="search-icon"
                            alt="Search icon"
                            src="https://ifh.cc/g/mWbmjO.png"
                        />
                    <input className="search-box" type="text" placeholder="검색">
                        
                    </input>
                 </div>
                 <div className="select-wrap">
                    <select 
                    >
                        <option value="">-- 선택하세요 --</option>
                        <option value="OPEN">진행중 미션</option>
                        <option value="CLOSED">종료된 미션</option> 
                    </select>
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
                                                    <div className="profile-hold">
                                                        <div className="text-wrapper-2">보유금액</div>
                                                    </div>
                                                    <div className="my-holding-wrap">
                                                        <div className="my-holding">100 WON</div>
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
                        <div className="mission-list-wrap-2">
                            {filteredMissions.map((item, index) => {
                                return (
                                    <div className="mission-list">
                                        <div className="mission-frame-wrapper">
                                            <div className="mission-frame">
                                                <div className="mission-image-wrapper">
                                                    <Link to={`/mission/${item.missionId}`}>
                                                        <img
                                                            className="mission-image-2"
                                                            alt="Mission image"
                                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-1.svg"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="mission-info">
                                                    <div className="mission-info-wrap">
                                                        <div className="div-2">
                                                            <Link to={`/mission/${item.missionId}`}><div className="mission-name-text">{item ? item.title : "Loading..."} </div></Link>
                                                        </div>
                                                        <div className="mission-point">
                                                            <Link to={`/mission/${item.missionId}`}><div className="mission-point-text">{item ? item.point : "Loading..."} P</div></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="challenge-button">
                                                    <button className="text-wrapper-4" onClick={() => joinMission(item.missionId)}>도전하기</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* <div className="pagination-button">
                            <div className="pagination-left-wrap">
                                <button className="pagination-left" onClick={() => {
                                    console.log("Left button clicked")
                                    setPage(oldPage => Math.max(oldPage -1, 0))}} disabled={page === 0}>
                                    &lt;&lt;
                                </button>
                            </div>
                            <div className="pagination">
                                {createPageNumberArray(0, totalPages - 1).map(pageNumber => (
                                    <button className={`text-wrapper-5 ${pageNumber === page ? "active" : ""}`}
                                            key={pageNumber}
                                            onClick={() => {
                                                console.log('page clicked')
                                                setPage(pageNumber)}}
                                            disabled={pageNumber === page}>
                                        {pageNumber + 1}
                                    </button>
                                ))}
                            </div>

                            <div className="pagination-right">
                                <button className="double-right-wrapper" onClick={() => {
                                    console.log("Right button clicked")
                                    setPage(oldPage => Math.min(oldPage + 1, totalPages - 1))}} disabled={page === totalPages - 1}>
                                    &gt;&gt;
                                </button>
                            </div>
                        </div> */}
                        <MissionPageNation page={page} totalPages={totalPages} setPage={setPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionList;