import AuthAxios from "../../utils/axios/AuthAxios";
import "./MyMission.css";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
function MyMission() {

    const [memberId, setMemberId] = useState();
    const [missions, setMissions] = useState([]);
    const [allMissions, setAllMissions] = useState([]);
    const now = new Date();
    const [point, setPoint] = useState();
    const [onGoing, setOnGoing] = useState();
    const [complete, setComplete] = useState();
    const [reject, setReject] = useState();

    const myMissions = missions.filter(mission => {
        return memberId === mission.memberId;
    })

    const fetchPoint = () => {
        AuthAxios.get(`/api/member/${memberId}/point`)
            .then((response) => {
                console.log(response);
                setPoint(response.data)
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

    const fetchMember = () => {
        AuthAxios.get('/api/member/me')
            .then((response) => {
                setMemberId(response.data.memberId);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const fetchMyMissions = () => {
        AuthAxios.get(`/api/members/${memberId}/missions`)
            .then((response) => {
                setMissions(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const [selectedItems, setSelectedItems] = useState([]);
    const [allChecked, setAllChecked] = useState(false);

    const handleAllChecked = e => {
        setAllChecked(e.target.checked);
        if (e.target.checked) {
            const allItems = myMissions.filter(item => item.status === 'ONGOING').map(item => item.memberMissionId);
            setSelectedItems(allItems)
        } else {
            setSelectedItems([]);
        }
    }


    const handleCheckboxChange = (e, memberMissionId) => {
        if (e.target.checked) {
            setSelectedItems(prevItems => [...prevItems, memberMissionId])
        } else {
            setSelectedItems(prevItems => prevItems.filter(item => item !== memberMissionId));
        }

        if (selectedItems.length === myMissions.filter(item => item.status === 'ONGOING').length) {
            setAllChecked(true);
        } else {
            setAllChecked(false)
        }
    }

    const deleteSelected = () => {
        AuthAxios.delete(`/api/members/${memberId}/missions`, { data: selectedItems} )
            .then((response) => {
                console.log(response);
                setSelectedItems([]);
                fetchMyMissions()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchMember();
        fetchPoint();
    }, [])

    useEffect(() => {
        fetchMyMissions();
    }, [memberId])

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems]);


    useEffect(() => {
        let completeCount = 0;
        let rejectCount = 0;
        let onGoingCount = 0;

        myMissions.forEach((mission) => {
            if (mission.status === "COMPLETED") {
                completeCount++;
            } else if (mission.status === "REJECTED") {
                rejectCount++;
            } else if (mission.status === "ONGOING") {
                onGoingCount++;
            }
        });

        setComplete(completeCount);
        setReject(rejectCount);
        setOnGoing(onGoingCount);
    }, [myMissions]);

    return (
        <div className="my-mission-index">
            <div className="my-mission-wrap-wrapper">
                <div className="my-mission-wrap">
                    <div className="mypage-sidebar-wrap">
                        <div className="sidebar-frame">
                            <div className="sidebar" />
                        </div>
                        <div className="sidebar-shortcut">
                            <div className="favicon-logo">
                                <img
                                    className="icon-leaf"
                                    alt="Icon leaf"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/---icon--leaf-@2x.png"
                                />
                            </div>
                            <div className="shortcut-mission">
                                <img
                                    className="favicon-mission"
                                    alt="Favicon mission"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658127c6f56d898df5822bb6/img/favicon-mission.svg"
                                />
                                <div className="menu-name">미션</div>
                            </div>
                            <div className="shortcut-volunteer">
                                <img
                                    className="favicon-volunteer"
                                    alt="Favicon volunteer"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658127c6f56d898df5822bb6/img/favicon-volunteer.svg"
                                />
                                <div className="menu-name">모임</div>
                            </div>
                            <div className="shortcut-funding">
                                <img
                                    className="favicon-funding"
                                    alt="Favicon funding"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/favicon-funding.svg"
                                />
                                <div className="menu-name">펀딩</div>
                            </div>
                            <div className="shoftcut-rank">
                                <img
                                    className="favicon-rank"
                                    alt="Favicon rank"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658127c6f56d898df5822bb6/img/favicon-rank.svg"
                                />
                                <div className="menu-name">랭킹</div>
                            </div>
                            <div className="shortcut-qna">
                                <img
                                    className="favicon-qna"
                                    alt="Favicon qna"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658127c6f56d898df5822bb6/img/favicon-qna.svg"
                                />
                                <div className="menu-name">문의</div>
                            </div>
                            <div className="shoftcut-logout">
                                <div className="favicon-logout">
                                    <img
                                        className="icon-logout"
                                        alt="Icon logout"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/---icon--logout-@2x.png"
                                    />
                                    <div className="text-wrapper">로그아웃</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-mission-right">
                        <div className="div">
                            <div className="div">
                                <div className="serach-box">
                                    <div className="search-icon-wrap">
                                        <img
                                            className="search-icon"
                                            alt="Search icon"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/menu-search-icon.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <img
                                className="header-icon-wrap"
                                alt="Header icon wrap"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/header-icon-wrap.svg"
                            />
                        </div>
                        <div className="my-mission-main-wrap">
                            <div className="div">
                                <div className="my-mission-info">
                                    <div className="div-2">
                                        <div className="my-mission-text">
                                            <div className="text-wrapper-2">나의 미션</div>
                                            <div className="rectangle" />
                                        </div>
                                        <div className="status">
                                            <div className="status-blank" />
                                            <div className="my-mission-url">
                                                <div className="text-wrapper-3">Home</div>
                                                <div className="direction"></div>
                                                <div className="text-wrapper-3">MISSION</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-3">
                                        <div className="div-4">
                                            <div className="div-5">
                                                <div className="bg" />
                                                <div className="artwork"></div>
                                            </div>
                                            <div className="div-6">
                                                <div className="text-wrapper-4">{onGoing}</div>
                                                <div className="text-wrapper-5">진행중인 미션</div>
                                            </div>
                                        </div>
                                        <div className="my-mission-complete">
                                            <div className="div-5">
                                                <div className="bg-2" />
                                                <div className="artwork"></div>
                                            </div>
                                            <div className="div-6">
                                                <div className="text-wrapper-4">{complete}</div>
                                                <div className="text-wrapper-6">완료한 미션</div>
                                            </div>
                                        </div>
                                        <div className="div-4">
                                            <div className="div-5">
                                                <div className="bg-3" />
                                                <div className="artwork"></div>
                                            </div>
                                            <div className="div-6">
                                                <div className="text-wrapper-4">{point ? point.holding : "Loading..."}</div>
                                                <p className="p">
                                                    <span className="span">누적 포인트</span>

                                                </p>
                                            </div>
                                        </div>
                                        <div className="div-4">
                                            <div className="div-5">
                                                <div className="bg-4" />
                                                <div className="artwork"></div>
                                            </div>
                                            <div className="div-6">
                                                <div className="text-wrapper-8">{reject}</div>
                                                <div className="text-wrapper-9">실패한 미션</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-row">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-10">진행중인 미션</div>
                                </div>
                                <div className="div-2">
                                    <div className="th">
                                        <div className="frame">
                                            <div className="checkbox-none">
                                                <input type="checkbox" className="checkbox" onChange={handleAllChecked} checked={allChecked} />
                                            </div>
                                            <div className="text-wrapper-11">미션 리스트</div>
                                            <div className="text-wrapper-12">흭득가능 포인트</div>
                                            <div className="text-wrapper-13">주최자</div>
                                            <div className="text-wrapper-14">남은시간</div>
                                            <div className="text-wrapper-15">Action</div>
                                        </div>
                                    </div>
                                    <div className="split-wrapper">
                                        <img
                                            className="split"
                                            alt="Split"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/split.svg"
                                        />
                                    </div>
                                </div>
                                <div className="my-mission-current">
                                    {myMissions.map((item, index) => {
                                        if (item.status === "ONGOING") {
                                        return (
                                            <div className="my-mission-list-wrap">
                                                <div className="my-mission-list">
                                                    <div className="checkbox-wrapper">
                                                        <input type="checkbox" className="checkbox" checked={selectedItems.includes(item.memberMissionId)} onChange={(e) => handleCheckboxChange(e, item.memberMissionId)}/>
                                                    </div>
                                                    <img className="my-mission-image" src={item.images.imageUrl} />
                                                    <div className="my-mission-title-and">
                                                        <div className="my-mission-title">
                                                            <div className="text-wrapper-16">{item.mission.title}</div>
                                                        </div>
                                                        <div className="div-wrapper-2">
                                                            <div className="text-wrapper-17">{item.mission.fullAddress}</div>
                                                        </div>
                                                    </div>
                                                    <div className="div-wrapper-2">
                                                        <p className="element-p">
                                                            <span className="text-wrapper-18">{item.mission.point}</span>
                                                            <span className="text-wrapper-19">P</span>
                                                        </p>
                                                    </div>
                                                    <div className="my-mission-host">
                                                        <img
                                                            className="img"
                                                            alt="My mission host"
                                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/my-mission-host-profile.svg"
                                                        />
                                                        <div className="div-wrapper-2">
                                                            <div className="text-wrapper-20">{item.mission.host}</div>
                                                        </div>
                                                    </div>
                                                    <div className="div-wrapper">
                                                        <p className="text-wrapper-21">{calculateRemainingTime(item.mission.endAt)}</p>
                                                    </div>
                                                    <div className="my-mission-post">
                                                        <Link to={`/member/${memberId}/mission/${item.mission.missionId}/membermission/${item.memberMissionId}`}><div className="text-wrapper-22">인증</div></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}})}

                                </div>
                                <div className="div-3">
                                    <div className="my-mission-delete" />
                                    <div className="div">
                                        <img
                                            className="my-mission-delete-2"
                                            alt="My mission delete"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581291fac10584c0429bbee/img/my-mission-delete.svg"
                                        />
                                        <button className="text-wrapper-23" onClick={deleteSelected}>미션삭제</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyMission;