import React from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import "./MissionDetail.css";
import MissionComponent2 from "../../components/Card/MainPageCards/missionComponent2";

function MissionDetail() {
    let params = useParams();
    let missionId = params.missionId;
    const [mission, setMission] = useState();

    function prettyDate() {
        const startDate = new Date(mission.startAt);
        const endDate = new Date(mission.endAt);

        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};

        const prettyStartDate = startDate.toLocaleDateString('ko-KR', options);
        const prettyEndDate = endDate.toLocaleDateString('ko-KR', options);
        const result = `${prettyStartDate} ~ ${prettyEndDate}`;
        return result;
    }

    const joinMission = async () => {
        try {
            const response = await AuthAxios.post(`/api/missions/${missionId}/join`)
            if (response.status === 200) {
                alert("미션 참여에 성공했습니다.");
            } else {
                alert("미션 참여에 실패했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("미션 참여 중 오류가 발생했습니다.");
        }
    }

    useEffect(() => {

        console.log(missionId);
        AuthAxios.get(`/api/missions/${missionId}`)
            .then((response) => {
                console.log(response);
                setMission(response.data);
            })
    }, [])

    useEffect(() => {
        AuthAxios.get(`/api/missions/${missionId}`)
            .then((response) => {
                setMission(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[missionId])

    useEffect(() => {
        console.log(mission)
    }, [mission])

    return (
        <div className="mission-detail-index">
            <div className="mission-detail-start">
                <div className="div">
                    <img
                        className="mission-detail-start-2"
                        alt="Mission detail start"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715e6bc2e3a066593b0581/img/mission-detail-start-image.png"
                    />
                    <div className="mission-detail-start-wrapper">
                        <div className="mission-detail-start-3">미션을 시작해 보세요!</div>
                    </div>
                    <div className="div-wrapper">
                        <p className="p">활동형 미션부터 참여형, 도전형 미션까지 다양한 미션을 통해 포인트를 쌓아보세요</p>
                    </div>
                </div>
            </div>
            <div className="mission-detail-title">
                <div className="mission-detail-title-2">
                    <div className="mission-detail-title-3">{mission ? mission.title : "Loading..."}</div>
                    <img
                        className="mission-detail-title-4"
                        alt="Mission detail title"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715e6bc2e3a066593b0581/img/mission-detail-title-hr.svg"
                    />
                </div>
            </div>
            <div className="mission-detail-main">
                <div className="mission-detail-main-2">
                    <div className="mission-detail-image">
                        <img
                            className="mission-detail-image-2"
                            alt="Mission detail image"
                            src={mission ? mission.image : "Loading.."}
                        />
                    </div>
                    <div className="mission-detail-info">
                        <div className="div-wrapper-2">
                            <div className="mission-detail">{mission ? mission.title : "Loading..."}</div>
                        </div>
                        <div className="div-wrapper-2">
                            <p className="mission-detail-get">흭득가능 포인트 : {mission ? mission.point : "Loading..."} P</p>
                        </div>
                        <div className="div-wrapper-2">
                            <div className="mission-detail-host">개최자: {mission ? mission.host : "Loading..."}</div>
                        </div>
                        <div className="div-wrapper-2">
                            <div className="mission-detail-2">미션장소: {mission ? `${mission.fullAddress} ${mission.subAddress}` : "Loading..."}</div>
                        </div>
                        <div className="div-wrapper-2">
                            <div className="mission-detail-date">미션일시 {mission ? prettyDate() : "Loading..."}</div>
                        </div>
                        <div className="mission-detail-wrapper">
                            <button className="mission-detail-3" onClick={joinMission}>도전하기</button>
                        </div>
                        <div className="div-wrapper-2">
                            <p className="mission-detail-4">※ 미션 인증과정에 오류가 있다면 문의해주시기 바랍니다</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission-detail-more">
                <div className="mission-detail-more-2">
                    <div className="div-wrapper-3">
                        <div className="text-wrapper-2">더 많은 미션 참가하기</div>
                    </div>
                    <div className="div">
                        <img
                            className="more-hr"
                            alt="More hr"
                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715e6bc2e3a066593b0581/img/mission-detail-title-hr.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="another-mission-wrap">
            <MissionComponent2 />
            </div>
        </div>
    )
}

export default MissionDetail;