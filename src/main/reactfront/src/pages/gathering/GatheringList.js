import React from "react";
import "./GatheringList.css";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import AuthAxios from "../../utils/axios/AuthAxios";
import Nav from 'react-bootstrap/Nav';
import MGPageNation from "../../components/PageNation/MGPageNation";

function GatheringList() {

    const [lists, setLists] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [status, setStatus] = useState("OPEN");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const [memberId, setMemberId] = useState();

    const fetchData = () => {
        let url = `/api/gathering?page=${page}`;
        if (status !== "") {
            url += `&status=${status}`;
        }
        if (title !== "") {
            url += `&title=${encodeURIComponent(title)}`
        }

        if (category !== "") {
            url += `&category=${encodeURIComponent(category)}`
        }

        AuthAxios.get(url)
            .then((response) => {
                console.log(response.data)
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            })
    }

    const handleCategory = (category) => {
        setCategory(category);
    }

    useEffect(() => {
        fetchData();
    }, [page, status, title, category])



    function createPageNumberArray(startPage, endPage) {
        let pages = []
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }



    useEffect(() => {
        setPage(0);
    }, [status, title, category])


    return (
        <div className="gathering-index">
            <div className="div">
                <div className="main-banner">
                    <div className="main-banner-big-text-wrapper">
                        <p className="main-banner-big-text">
                            똑같은 봉사라도 더 다채롭게 <br />
                            만들어 줄 원데이 취향 모임
                        </p>
                    </div>
                    <div className="card-info-text-small">
                        <p className="card-info-text-small-2">
                            누구나 열고 참여할 수 있는 원데이모임,
                        
                            소셜링으로 가볍고 즐겁게 만나보세요!
                        </p>
                    </div>
                </div>
            </div>
            <div className="middle-menu-wrap">
               
            <Nav variant="phills" defaultActiveKey="#">
      <Nav.Item >
        <Nav.Link href="#" className="nav-text" onClick={() => handleCategory("")}>전체</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="#"className="nav-text" onClick={() => handleCategory("CLEAN_UP")}>환경미화</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" href="#"className="nav-text" onClick={() => handleCategory("TALENT_DONATION")}>재능기부</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3" href="#"className="nav-text" onClick={() => handleCategory("SPONSORSHIP")}>후원</Nav.Link>
      </Nav.Item>
    </Nav>


                <div className="middle-menu-search">
                    <img
                        className="search-icon"
                        alt="Search icon"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/search-icon@2x.png"
                    />
                    <input className="search-box" type="text" placeholder="검색" value={title} onChange={(e) => setTitle(e.target.value)}>

                    </input>
                </div>
                <div className="select-wrap">
                    <select value={status || ""} onChange={(e) => {
                        setStatus(e.target.value || "")
                    }}>
                        <option value="">-- 선택하세요 --</option>
                        <option value="OPEN">모집중</option>
                        <option value="CLOSED">모집 마감</option>
                    </select>
                </div>
            </div>
           


            <div className="gathering-list-wrap">
                {lists.map((item, index) => (
                    <div className="gathering-list">
                        <div className="gathering-list-2">
                            <Link to={`/gathering/${item.gatheringId}`} ><div className="gathering-list-image" style={{ backgroundImage: `url(${item.image})` }} /></Link>
                            <div className="gathering-list-info">
                                <div className="gathering-list-title">
                                    <Link to={`/gathering/${item.gatheringId}`} style={{textDecoration: 'none'}}><div className="gathering-list-title-2">{item.title}</div></Link>
                                </div>
                                <div className="gathering-list-sum"><Link to={`/gathering/${item.gatheringId}`} style={{textDecoration: 'none', color:'black'}}>{item.intro}</Link></div>
                                <div className="gathering-list-3">
                                    <img
                                        className="gathering-list-4"
                                        alt="Gathering list"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/frame-427318306.svg"
                                    />
                                    <div className="gathering-list-5">
                                        <img
                                            className="gathering-list-6"
                                            alt="Gathering list"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/group@2x.png"
                                        />
                                        <div className="gathering-list-7">
                                            <div className="text-wrapper-3">{item.count}/{item.capacity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="gathering-list-8">
                 <MGPageNation page={page} totalPages={totalPages} setPage={setPage} />
                <div className="register-button-wrap">
                    <div className="register-button">
                        <div className="register-text"><Link to="/gathering/add" className="register-button">작성</Link></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export default GatheringList;