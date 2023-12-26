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
    const [timer, setTimer] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const loaction = useLocation();

    const [memberId, setMemberId] = useState();



    const fetchData = () => {
        AuthAxios.get(`/api/gathering?page=${page}`)
            .then((response) => {
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    };

    const fetchDataByStatus = () => {
        if (status !== "") {


            AuthAxios.get(`/api/gathering/status?status=${status}&page=${page}`)
                .then((response) => {
                    setLists(response.data.content);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.log('Error fetching data from API: ', error);
                })
        }
    }

    const fetchDataByTitle = () => {
        const encodedTitle = encodeURIComponent(title);
        AuthAxios.get(`/api/gathering/title?title=${encodedTitle}&page=${page}`)
            .then((response) => {
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            })
    }

    const fetchDataByStatusAndTitle = () => {
        if (status !== "" && title !== "") {
            AuthAxios(`/api/gathering?status=${status}&title=${encodeURIComponent(title)}&page=${page}`)
                .then((response) => {
                    setLists(response.data.content);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.log('Error fetching data from API: ', error);
                })
        }
    }


    function createPageNumberArray(startPage, endPage) {
        let pages = []
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    useEffect(() => {
        const pageFromUrl = searchParams.get('page');
        const statusFromUrl = searchParams.get('status');
        const titleFromUrl = searchParams.get('title');

        if (pageFromUrl !== null) {
            setPage(parseInt(pageFromUrl));
        }
        if (statusFromUrl !== null) {
            setStatus(statusFromUrl);
        }
        if (titleFromUrl !== null) {
            setTimer(decodeURIComponent(titleFromUrl));
        }

    }, [])

    useEffect(() => {
        setPage(0);
    }, [status])

    useEffect(() => {
        setPage(0);
    }, [title])


    useEffect(() => {
        searchParams.set('page', page.toString());
        if (status !== null) {
            searchParams.set('status', status);
        }
        if (title !== null) {
            searchParams.set('title', encodeURIComponent(title));
        }
        setSearchParams(searchParams);

        if (status !== "" && title !== "") {
            fetchDataByStatusAndTitle();
        }

        else if (status !== "") {
            fetchDataByStatus();
        }
        else if (title !== "") {
            fetchDataByTitle()
        }
        else {
            fetchData();
        }

    }, [page, status, title])

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
        <Nav.Link href="#" className="nav-text">전체</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="#"className="nav-text">환경미화</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" href="#"className="nav-text">재능기부</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3" href="#"className="nav-text">재능기부</Nav.Link>
      </Nav.Item>
    </Nav>


                {/* <div className="middle-menu-blank" /> */}
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
                {/* <div className="pagination-button">
                    <div className="pagination-left-wrap">
                        <button className="pagination-left" onClick={() => setPage(oldPage => Math.max(oldPage - 1, 0))} disabled={page === 0}>
                            &lt;&lt;
                        </button>
                    </div>

                    <div className="pagination">
                        {createPageNumberArray(0, totalPages - 1).map(pageNumber => (
                            <button className={`text-wrapper-4 ${pageNumber === page ? "active" : ""}`}
                                    key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    disabled={pageNumber === page}>
                                {pageNumber + 1}
                            </button>
                        ))}
                    </div>
                    <div className="pagination-right"  onClick={() => setPage(oldPage => Math.min(oldPage + 1, totalPages - 1))} disabled={page === totalPages - 1}>
                        <button className="double-right-wrapper">
                            &gt;&gt;
                        </button>
                    </div>
                </div> */}
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