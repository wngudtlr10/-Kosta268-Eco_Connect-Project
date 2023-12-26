import React from "react";
import "./MypageGatheringInfo.css";

export const MapageGatheringInfo = ({ className, mypageGatheringClassName, mypageGatheringTdClassName }) => {
    return (
        <div className={`mapage-gathering ${className}`}>
            <div className={`div-wrapper ${mypageGatheringClassName}`}>
                <div className="text-wrapper">모임삭제</div>
            </div>
            <div className="div">
                <div className="mypage-gathering-th">
                    <div className="mypage-gathering-th-2" />
                    <div className="mypage-gathering-th-3">
                        <div className="text-wrapper-2">내용</div>
                    </div>
                    <div className="mypage-gathering-th-3">
                        <div className="text-wrapper-2">인원</div>
                    </div>
                    <div className="mypage-gathering-th-4">
                        <div className="text-wrapper-2">역할</div>
                    </div>
                    <div className="mypage-gathering-th-4">
                        <div className="text-wrapper-2">모임장</div>
                    </div>
                    <div className="mypage-gathering-th-5">
                        <div className="text-wrapper-2">모임일정</div>
                    </div>
                </div>
                <img className="split" alt="Split" />
                <div className="mypage-gathering-td">
                    <img className="td" alt="Td" />
                    <div className="mypage-gathering-td-2">
                        <div className="text-wrapper-3">2023-11-17 (목요일)</div>
                    </div>
                    <div className="mypage-gathering-td-3">
                        <img className="icon-profile-circled" alt="Icon profile circled" />
                        <div className="text-wrapper-4">서포터 1</div>
                    </div>
                    <div className="mypage-gathering-td-4">
                        <div className="text-wrapper-5">모임장</div>
                    </div>
                    <div className="mypage-gathering-td-5">
                        <div className="mypage-gathering-2">10</div>
                        <div className="mypage-gathering-3">/</div>
                        <div className="mypage-gathering-3">30</div>
                    </div>
                    <div className="mypage-gathering-td-6">
                        <div className="mypage-gathering-4">오리역 봉사 모임</div>
                        <div className="mypage-gathering-5">오리역 1번출구</div>
                    </div>
                    <div className={`mypage-gathering-td-7 ${mypageGatheringTdClassName}`} />
                    <div className="mypage-gathering-td-8" />
                </div>
            </div>
        </div>
    );
};
