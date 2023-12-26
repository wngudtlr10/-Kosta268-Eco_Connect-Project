import React from "react";
import "./MypageGatheringNavigation.css";

export const MypageGatheringNavigation = ({ className }) => {
    return (
        <div className={`mypage-gathering ${className}`}>
            <div className="navigation">
                <div className="title">나의 모임</div>
            </div>
            <div className="navigation-tab">
                <div className="text-wrapper-6">나의 정보</div>
                <div className="text-wrapper-6">나의 미션</div>
                <div className="my-volunteer">나의 모임</div>
                <div className="text-wrapper-6">나의 펀딩</div>
                <div className="my-like">나의 좋아요</div>
            </div>
        </div>
    );
};