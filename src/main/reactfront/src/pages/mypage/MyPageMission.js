import "./MyPageMission.css";
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import React, {useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useNavigate} from "react-router-dom";

function MyPageMission() {
    const [memberId, setMemberId] = useState();
    const [missions, setMissions] = useState([]);
    const [point, setPoint] = useState();
    const [onGoing, setOngoing] = useState();
    const [complete, setComplete] = useState();
    const [reject, setReject] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [allChecked, setAllChecked] = useState(false);
    const navigate = useNavigate();

    const fetchMember = () => {
        AuthAxios.get(`/api/member/me`)
            .then((response) => {
                setMemberId(response.data.memberId);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const fetchPoint = () => {
        AuthAxios.get(`/api/member/${memberId}/point`)
            .then((response) => {
                setPoint(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const fetchMyMissions = () => {
        AuthAxios.get(`/api/members/${memberId}/missions`)
            .then((response) => {
                setMissions(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const calculateRemainingTime = (endAt) => {
        const endDate = new Date(endAt);
        const now = new Date();

        const diffMs = endDate - now;
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        return `${diffDays}일 ${diffHours % 24}시간 ${diffMinutes % 60}분 ${diffSeconds % 60}초`;
    }

    const handleAllChecked = e => {
        setAllChecked(e.target.checked);
        if (e.target.checked) {
            const allItems = missions.filter(item => item.status === 'ONGOING').map(item => item.memberMissionId);
            setSelectedItems(allItems)
        } else {
            setSelectedItems([]);
        }
    }

    const handleCheckboxChange = (e, memberMissionId) => {
        if (e.target.checked) {
            setSelectedItems(prevItems => [...prevItems, memberMissionId])
        } else {
            setSelectedItems(prevItems => prevItems.filter(item => item.status === 'ONGOING').length)
        }

        if (selectedItems.length === missions.filter(item => item.status === 'ONGOING').length) {
            setAllChecked(true);
        } else {
            setAllChecked(false);
        }
    }

    const deleteSelected = () => {
        AuthAxios.delete(`/api/members/${memberId}/missions`, { data: selectedItems })
            .then((response) => {
                setSelectedItems([]);
                fetchMyMissions();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleAuthButtonClick = (memberId, missionId, memberMissionId) => {
        navigate(`/member/${memberId}/mission/${missionId}/membermission/${memberMissionId}`)
    }

    useEffect(() => {
        fetchMember();
        fetchPoint();
    }, [])

    useEffect(() => {
        fetchMyMissions();
    }, [memberId])

    useEffect(() => {
        let completeCount = 0;
        let rejectCount = 0;
        let onGoingCount = 0;

        missions.forEach((mission) => {
            if (mission.status === "COMPLETED") {
                completeCount ++;
            } else if (mission.status === "REJECTED") {
                rejectCount ++;
            } else if (mission.status === "ONGOING") {
                onGoingCount ++;
            }
        });

        setComplete(completeCount);
        setReject(rejectCount);
        setOngoing(onGoingCount);
    }, [missions])

    return (
        <div className="mypage-mission-index">
            <div className="my-mission-wrap-wrapper">
                <div className="my-mission-wrap">
                    <MyPageSidebar/>
                    <div className="my-mission-right">
                        <div className="my-mission-main-wrap">
                            <div className="my-mission-info-wrap">
                                <div className="my-mission-info">
                                    <div className="status-row">
                                        <div className="status">
                                            <div className="status-blank" />
                                            <div className="my-mission-url">
                                                <div className="text-wrapper">Home</div>
                                                <div className="direction">></div>
                                                <div className="text-wrapper">Mission</div>
                                            </div>
                                        </div>
                                        <div className="my-mission-text">
                                            <div className="div">나의 미션</div>
                                            <div className="rectangle" />
                                        </div>
                                    </div>
                                    <div className="my-mission-card-wrap">
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">{onGoing}</div>
                                                <div className="text-wrapper-3">진행중인 미션</div>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-2" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">{complete}</div>
                                                <div className="text-wrapper-4">완료한 미션</div>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-3" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">{point ? point.holding : "Loading..."}</div>
                                                <p className="p">
                                                    <span className="span">누적 포인트&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                    <span className="text-wrapper-5">상세보기</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-4" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-6">{reject}</div>
                                                <div className="text-wrapper-7">실패한 미션</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-row-2">
                                <div className="my-mission-ongoing">
                                    <div className="text-wrapper-8">진행중인 미션</div>
                                </div>
                                <div className="my-mission-table">
                                    <div className="th">
                                        <div className="frame">
                                            <div className="checkbox-none">
                                                <input type="checkbox" className="checkbox" onChange={handleAllChecked} checked={allChecked} />
                                            </div>
                                            <div className="text-wrapper-9">미션 리스트</div>
                                            <div className="text-wrapper-10">흭득가능 포인트</div>
                                            <div className="text-wrapper-11">주최자</div>
                                            <div className="text-wrapper-12">남은시간</div>
                                            <div className="text-wrapper-13">Action</div>
                                        </div>
                                    </div>
                                    <div className="split-wrapper">
                                        <img
                                            className="split"
                                            alt="Split"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/split.svg"
                                        />
                                    </div>
                                </div>
                                <div className="my-mission-list-wrapper">
                                {missions.map((item, index) => {
                                    if (item.status === "ONGOING") {
                                        return (
                                                <div className="my-mission-list">
                                                    <div className="checkbox-none">
                                                        <input type="checkbox" className="checkbox" checked={selectedItems.includes(item.memberMissionId)} onChange={(e) => handleCheckboxChange(e, item.memberMissionId)} />
                                                    </div>
                                                    <div className="my-mission-info-2">
                                                        <img className="my-mission-image" src={item.mission.image}/>
                                                        <div className="my-mission-title-and">
                                                            <div className="text-wrapper-14">{item.mission.title}</div>
                                                            <div className="text-wrapper-15">{item.mission.fullAddress}</div>
                                                        </div>
                                                    </div>
                                                    <div className="my-mission-point">
                                                        <p className="element-p">
                                                            <span className="text-wrapper-16">{item.mission.point}</span>
                                                            <span className="text-wrapper-17">P</span>
                                                        </p>
                                                    </div>
                                                    <div className="my-mission-host">
                                                        <img
                                                            className="img"
                                                            alt="My mission host"
                                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/my-mission-host-profile.svg"
                                                        />
                                                        <div className="my-mission-host-name">
                                                            <div className="text-wrapper-18">{item.mission.host}</div>
                                                        </div>
                                                    </div>
                                                    <div className="my-mission-remain">
                                                        <p className="text-wrapper-19">{calculateRemainingTime(item.mission.endAt)}</p>
                                                    </div>
                                                    <div className="my-mission-button">
                                                        <button className="my-mission-post" onClick={() => handleAuthButtonClick(memberId, item.mission.missionId, item.memberMissionId)}>
                                                            인증
                                                        </button>
                                                    </div>
                                                </div>
                                        )
                                    }
                                })}
                                </div>
                                <div className="my-mission-delete">
                                    <button className="my-mission-delete-btn" onClick={deleteSelected}>미션삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageMission;