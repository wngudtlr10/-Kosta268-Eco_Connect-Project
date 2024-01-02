import './MyPageGathering.css';
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import {Link} from "react-router-dom";
import MGPageNation from "../../components/PageNation/MGPageNation";
import React, {useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import ChatRoomListNull from "../chat/ChatRoomListNull";
import DateFormat from "../../utils/chat/DateFormat";
import MyPageJoinedGatheringList from "./MyPageJoinedGatheringList";
import MyPageMyGatheringList from "./MyPageMyGatheringList";

function MyPageGathering() {
    const [selectedTab, setSelectedTab] = useState('myGathering');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
    // const [page, setPage] = useState(0);
    // const [totalPages, setTotalPages] = useState(0);
    // const [gatheringList, setGatheringList] = useState([]);
    // const [memberId, setMemberId] = useState();

    // const fetchData = () => {
    //     AuthAxios.get(`/api/mypage/gathering?page=${page}`)
    //         .then((response) => {
    //             console.log("response.data : ", response.data.content);
    //             setGatheringList(response.data.content);
    //             if (response.data.totalPages === 0) {
    //                 setTotalPages(1);
    //             } else {
    //                 setTotalPages(response.data.totalPages);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log('Error fetching data from API: ' , error);
    //         });
    // };
    //
    // const getMemberId = () => {
    //     AuthAxios.get(`/api/member/me`)
    //         .then((response) => {
    //             setMemberId(response.data.memberId);
    //         })
    //         .catch((error) => {
    //             console.log('Error fetching data from API: ' , error);
    //         });
    // }
    //
    // useEffect(() => {
    //     getMemberId();
    //     fetchData();
    // }, []);
    //
    // useEffect(() => {
    //     fetchData();
    // }, [page])
    //
    // const handleDelete = (gatheringId, memberId) => {
    //     let result = window.confirm("탈퇴하시겠습니까?");
    //     if (result) {
    //         AuthAxios.delete(`/api/mypage/gatheringId/${gatheringId}/memberId/${memberId}`)
    //             .then((response) => {
    //                 if (response.status === 200) {
    //                     alert('탈퇴가 완료되었습니다.');
    //                     fetchData();
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             })
    //     }
    // };

    return (
        <div className="mypage-gathering-index">
            <div className="my-gathering-wrap-wrapper">
                <div className="my-gathering-wrap">
                    <MyPageSidebar/>
                    <div className="my-gathering-content">
                        <div className="my-gathering-info">
                            <div className="status-row">
                                <div className="status">
                                    <div className="status-blank" />
                                    <div className="my-mission-url">
                                        <Link to={"/"}>
                                            <div className="text-wrapper">Home</div>
                                        </Link>
                                        <div className="direction">></div>
                                        <Link to={"/gathering"}>
                                            <div className="text-wrapper">Gathering</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-gathering-text">
                                    <div className={`text-wrapper-2 ${selectedTab === 'myGathering' ? 'selected' : ''}`}
                                         onClick={() => handleTabClick('myGathering')}>나의 모임</div>
                                    <div className="text-wrapper-2"> | </div>
                                    <div className={`text-wrapper-2 ${selectedTab === 'joinedGathering' ? 'selected' : ''}`}
                                         onClick={() => handleTabClick('joinedGathering')}>참여 모임</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-gathering-table">
                            <div className="th">
                                <div className="frame-6">
                                    {/*<input type="checkbox" className="checkbox" />*/}
                                    <div className="text-wrapper-3">모임 이름</div>
                                    <div className="text-wrapper-4">인원</div>
                                    <div className="text-wrapper-4">역할</div>
                                    <div className="text-wrapper-5">모임장</div>
                                    <div className="text-wrapper-6">모임일정</div>
                                </div>
                            </div>
                            <div className="bar">
                                <img
                                    className="split"
                                    alt="Split"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/split.svg"
                                />
                            </div>
                        </div>
                        {
                            selectedTab === 'myGathering'
                                ? <MyPageMyGatheringList/>
                                : <MyPageJoinedGatheringList/>
                        }

                        {/*<div className="my-gathering-list-wrapper">*/}
                        {/*    {*/}
                        {/*        gatheringList.length === 0 ?*/}
                        {/*        <img*/}
                        {/*            className="my-gathering-no-list"*/}
                        {/*            alt="My gathering list"*/}
                        {/*            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/659164cb6c2db389163db9dc/img/my-gathering-list-null.png"*/}
                        {/*        />*/}
                        {/*        :*/}

                        {/*        <>*/}
                        {/*            {gatheringList.map((item, number) => (*/}
                        {/*            <div className="my-gathering-list" key={number}>*/}
                        {/*                /!*    <input type="checkbox" className="checkbox"*!/*/}
                        {/*                /!*           name={"gatheringId"} value={item.gatheringId}/>*!/*/}
                        {/*                <div className="my-gathering-info-2">*/}
                        {/*                    /!*<div className="my-gathering-image" />*!/*/}
                        {/*                    <img*/}
                        {/*                        className="my-gathering-image"*/}
                        {/*                        alt={"gathering-image"}*/}
                        {/*                        src={item.image}*/}
                        {/*                    />*/}
                        {/*                    <div className="my-gathering-title">*/}
                        {/*                        <Link to={`/gathering/${item.gatheringId}`}>*/}
                        {/*                            <div className="text-wrapper-7">{item.title}</div>*/}
                        {/*                            <div className="text-wrapper-8">{item.fullAddress}</div>*/}
                        {/*                        </Link>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="my-gathering-count">*/}
                        {/*                    <div className="text-wrapper-9">{item.count} / {item.capacity}</div>*/}
                        {/*                </div>*/}
                        {/*                <div className="my-gathering-role">*/}
                        {/*                    <div className="text-wrapper-10">{item.creatorId === memberId ? "모임장" : "모임원"}</div>*/}
                        {/*                </div>*/}
                        {/*                <div className="my-gathering-host">*/}
                        {/*                    <img*/}
                        {/*                        className="img"*/}
                        {/*                        alt="My gathering host"*/}
                        {/*                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/my-mission-host-profile.svg"*/}
                        {/*                    />*/}
                        {/*                    <div className="div-wrapper">*/}
                        {/*                        <div className="text-wrapper-9">{item.creator}</div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="my-gathering-time">*/}
                        {/*                    <div className="text-wrapper-11"><DateFormat date={item.startAt} /></div>*/}
                        {/*                </div>*/}
                        {/*                <div className="my-gathering-delete">*/}
                        {/*                    <button className="my-gathering-delete-btn"*/}
                        {/*                            onClick={() => handleDelete(item.gatheringId, memberId)}>탈퇴</button>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        ))}*/}
                        {/*        <MGPageNation page={page} totalPages={totalPages} setPage={setPage} />*/}
                        {/*        </>*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageGathering;