import {Link} from "react-router-dom";
import DateFormat from "../../utils/chat/DateFormat";
import MGPageNation from "../../components/PageNation/MGPageNation";
import React, {useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";

function MyPageJoinedGatheringList() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [gatheringList, setGatheringList] = useState([]);
    const [memberId, setMemberId] = useState();

    const fetchData = () => {
        AuthAxios.get(`/api/mypage/joined-gathering?page=${page}`)
            .then((response) => {
                console.log("response.data : ", response.data.content);
                setGatheringList(response.data.content);
                if (response.data.totalPages === 0) {
                    setTotalPages(1);
                } else {
                    setTotalPages(response.data.totalPages);
                }
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    };

    const getMemberId = () => {
        AuthAxios.get(`/api/member/me`)
            .then((response) => {
                setMemberId(response.data.memberId);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    }

    useEffect(() => {
        getMemberId();
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [page])

    const handleDelete = (gatheringId, memberId) => {
        let result = window.confirm("모임에서 탈퇴하시겠습니까?");
        if (result) {
            AuthAxios.delete(`/api/mypage/joined-gathering/gatheringId/${gatheringId}/memberId/${memberId}`)
                .then((response) => {
                    if (response.status === 200) {
                        alert('모임 탈퇴가 완료되었습니다.');
                        fetchData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    };

    return (
        <div className="my-gathering-list-wrapper">
            {
                gatheringList.length === 0 ?
                    <img
                        className="my-gathering-no-list"
                        alt="My gathering list"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/659164cb6c2db389163db9dc/img/my-gathering-list-null.png"
                    />
                    :

                    <>
                        {gatheringList.map((item, number) => (
                            <div className="my-gathering-list" key={number}>
                                {/*    <input type="checkbox" className="checkbox"*/}
                                {/*           name={"gatheringId"} value={item.gatheringId}/>*/}
                                <div className="my-gathering-info-2">
                                    {/*<div className="my-gathering-image" />*/}
                                    <img
                                        className="my-gathering-image"
                                        alt={"gathering-image"}
                                        src={item.image}
                                    />
                                    <div className="my-gathering-title">
                                        <Link to={`/gathering/${item.gatheringId}`}>
                                            <div className="text-wrapper-7">{item.title}</div>
                                            <div className="text-wrapper-8">{item.fullAddress}</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-gathering-count">
                                    <div className="text-wrapper-9">{item.count} / {item.capacity}</div>
                                </div>
                                <div className="my-gathering-role">
                                    <div className="text-wrapper-10">{item.creatorId === memberId ? "모임장" : "모임원"}</div>
                                </div>
                                <div className="my-gathering-host">
                                    <img
                                        className="img"
                                        alt="My gathering host"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/my-mission-host-profile.svg"
                                    />
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-9">{item.creator}</div>
                                    </div>
                                </div>
                                <div className="my-gathering-time">
                                    <div className="text-wrapper-11"><DateFormat date={item.startAt} /></div>
                                </div>
                                <div className="my-gathering-delete">
                                    <button className="my-gathering-delete-btn"
                                            onClick={() => handleDelete(item.gatheringId, memberId)}>탈퇴</button>
                                </div>
                            </div>
                        ))}
                        <MGPageNation page={page} totalPages={totalPages} setPage={setPage} />
                    </>
            }
        </div>
    )
}

export default MyPageJoinedGatheringList;