import React from "react";
import { useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import { useParams, useNavigate } from "react-router-dom";
import "./GatheringDetails.css";

function GatheringDetail() {

    let params = useParams();

    let gatheringId = params.gatheringId;
    const [gathering, setGathering] = useState();
    const navigate = useNavigate();
    const [participants, setParticipants] = useState([]);
    const [memberId, setMemberId] = useState();
    const [memberName, setMemberName] = useState("");


    const fetchData = () => {
        AuthAxios.get(`/api/gathering/${gatheringId}`)
            .then((response) => {
                setGathering(response.data);

            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            });
    };

    const fetchMember = () => {
        AuthAxios.get(`/api/member/me`)
            .then((response) => {
                setMemberId(response.data.memberId);
                setMemberName(response.data.username);
                // setMemberId(response.data.username);
            })
            .catch((error) => {
                console.log('Error fetching member data from API:' + error);
            })
    }

    const fetchGatheringMembers = () => {
        AuthAxios.get(`/api/gathering/${gatheringId}/members`)
            .then((response) => {
                console.log(response);
                setParticipants(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        console.log(participants)
    },[participants])

    useEffect(() => {
        fetchMember();
    }, [])

    useEffect(() => {
        fetchData();
    }, [gatheringId])

    useEffect(() => {

    },[gathering])
    useEffect(() => {
        console.log(memberId, memberName)
    }, [memberId, memberName])

    const deleteButton = async () => {
        await AuthAxios.delete(`/api/gathering/${gatheringId}`)
            .then((response) => {
                console.log("delete success");
                navigate('/gathering');
            })
            .catch((error) => {
                console.log("delete fail");
                console.log(error);
            })

    };
    const joinGathering = async () => {
        await AuthAxios.get(`/api/gathering/${gatheringId}/join`)
            .then((response) => {
                console.log("join success")
                alert('모임 참여에 성공했습니다');
            })
            .catch((error) => {
                console.log("join fail")
                console.log(error);
            })
    }



    return (
        <div className="detail-index">
            <div className="div">
                <div className="overlap-group">
                    <div className="detail-main-wrap">
                        <div className="detail-main">
                            <img
                                className="nature"
                                alt="Nature"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/nature-3289812-1920-2.png"
                            />
                            <div className="detail-main-writer">
                                <div className="detail-writer">{memberName ? memberName : "Loading..."}</div>
                                <div className="detail-title">{gathering ? gathering.title : "Loading..."}</div>
                            </div>
                            <div className="detail-main-content">
                                <p className="p">
                                    🙋호스트를 소개해요!
                                    <br /> -안녕하세요, 책을 통해 발전하고싶은 성장에 미쳐있는 옐리입니다. {gathering ? gathering.intro : "Loading..."}
                                    <br /> <br />
                                    👟이런 활동을 할 거예요! <br />
                                    {gathering ? gathering.etc : "Loading..."}
                                    <br /> - 혼자 읽을땐 눈치가 보여 선행을 선뜻하지 못했지만 함께라면 가능해요.
                                    <br /> - 선정한 봉사 소개와 선정이유-&gt;봉사-&gt;깨달은 것 나누기"
                                    <br /> - 선행를 통해 모두가 1cm라도 성장하길 바랍니다.
                                    <br /> - 각자 먹을 소소한 간식도 챙겨오셔도됩니다. <br />
                                    <br />
                                    🙆이런 멤버와 함께하고 싶어요!
                                    <br /> - 서로를 배려하고 모임에 활발하게 참여하실 수 있는 멤버를 원해요!
                                    <br />
                                    <br /> 📢공지사항도 확인해주세요!
                                    <br /> - 참가비는 장소대관비, 모임운영비로 사용됩니다
                                </p>
                            </div>
                            <div className="detail-main-sum-wrap">
                                <div className="text-wrapper-2">멤버소개</div>
                                <div className="detail-main-hello">우리 반갑게 만나요</div>
                                <div className="detail-main-gather">익명의 모임장</div>
                                <p className="detail-main-gather-2">선한영향력을 가진 사람이 되고 싶어요.</p>
                            </div>
                            <div className="detail-main-check">
                                <img
                                    className="img"
                                    alt="Detail main check"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/detail-main-check-plus.svg"
                                />
                                <p className="detail-main-check-2">함께 할 멤버들을 먼저 확인하고 참여해 보세요!</p>
                                {/* {gathering && gathering.participants.map(participant => {
                                            return <li key={participant.memberId}>{participant.id}</li>
                                        })}
                                        <p>님이 함께 하고 있어요.</p> */}
                                {participants ? participants.map(participant => {
                                    return (<>
                                        <p key={participant.memberId}>{participant.id}</p>
                                        <p>님이 참가중이에요.</p>
                                    </>)
                                }) : null }
                                <div className="detail-main-check-wrapper">
                                    {/* <div className="detail-main-check-3">확인하기</div> */}
                                    <button className="detail-main-check-3" onClick={fetchGatheringMembers}>확인하기</button>

                                </div>
                            </div>
                            <div className="detail-main-info">
                                <div className="detail-info-text">안내사항</div>
                                <div className="detail-main-details">자세한 정보를 알려드릴게요</div>
                                <div className="detail-people-wrap">
                                    <img
                                        className="people-img"
                                        alt="Detail people icon"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/detail-people-icon.svg"
                                    />
                                    <div className="detail-people-text">{gathering ? gathering.capacity + "명" : "Loading..."}</div>
                                </div>
                                <div className="detail-location-wrap">
                                    <img
                                        className="location-img"
                                        alt="Detail locaion icon"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/detail-locaion-icon.svg"
                                    />
                                    <div className="detail-location-text">{gathering ? (`${gathering.fullAddress}  ${gathering.subAddress}`)  : "Loading..."}</div>

                                    <div className="detail-blank" />
                                    <div className="detail-buttons">
                                        <div className="detail-update-button">
                                            <button className="text-wrapper-update" disabled={!gathering || (gathering.creatorId != memberId)} onClick={() => navigate(`/gathering/update/${gatheringId}`)}>수정</button>
                                        </div>
                                        <div className="detail-delete-button">
                                            <button className="text-wrapper-delete" disabled={!gathering || (gathering.creatorId != memberId)} onClick={deleteButton}>삭제</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail-gathering-wrap">
                                    <div className="detail-gathering-text">모임 시각: {gathering ? gathering.startAt : "Loading..."}</div>
                                </div>
                            </div>
                            <div className="detail-join-button">
                                <button className="detail-join-text" onClick={joinGathering}>바로 참여 하기</button>
                            </div>
                        </div>
                    </div>
                    <img
                        className="profile-icon"
                        alt="Profile icon"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/profile-icon.svg"
                    />
                </div>
                <div className="gathering-title">
                    <div className="title">{gathering ? gathering.title : "Loading..."}</div>
                </div>
                <div className="gathering-banner">
                    <img
                        className="nature-2"
                        alt="Nature"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656794b954eecaa3161d736b/img/nature-3289812-1920-2-1.png"
                    />
                    <div className="banner-text-big">모임에 참석해 보세요!</div>
                    <p className="banner-text-small">소규모 모임부터 봉사 모임까지 주변 사람들과 모여서 봉사활동을 시작하세요!</p>
                </div>
            </div>
        </div>
    )
}

export default GatheringDetail;
