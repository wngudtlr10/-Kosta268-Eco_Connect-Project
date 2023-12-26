import React, {useEffect, useState} from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import './MypageMain.css';
import {MypageFooterWrap} from "../../components/mypage/MypageFooter";
import {MypageSidebarWrap} from "../../components/mypage/MypageSidebar";
import {MypageHeaderWrap} from "../../components/mypage/MypageHeader";
import {MypageGatheringNavigation} from "../../components/mypage/MypageGatheringNavigation";
import {MapageGatheringInfo} from "../../components/mypage/MypageGatheringInfo";

const MypageGathering = () => {

    const [member, setMember] = useState();

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            // console.log(response.data)
            if (response.data) {
                //회원 정보 확인용
                // console.log(response.data);
                setMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    return (
        <div className="mypage-main-index">
            <div className="div">
                <MypageSidebarWrap className="mypage-sidebar-wrap-instance"/>
                <MypageHeaderWrap className="mypage-header-wrap-instance"/>
                <MypageFooterWrap className="mypage-footer-wrap-instance"/>
                <MypageGatheringNavigation className="mypage-gathering-navigation"/>
                <MapageGatheringInfo
                    className="mapage-gathering-info"
                    mypageGatheringClassName="mapage-gathering-instance"
                    mypageGatheringTdClassName="mapage-gathering-info-instance"
                />
            </div>
        </div>
    );
}

export default MypageGathering;