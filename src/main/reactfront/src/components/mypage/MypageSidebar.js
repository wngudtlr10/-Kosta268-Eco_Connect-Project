import React from "react";
import "./MypageSidebar.css";
import PropTypes from "prop-types";

export const MypageSidebarWrap = ({ className }) => {
    return (
        <div className={`mypage-sidebar-wrap ${className}`}>
            <div className="sidebar-frame">
                <div className="sidebar" />
            </div>
            <div className="sidebar-shortcut">
                <div className="favicon-logo">
                    <img
                        className="icon-leaf"
                        alt="Icon leaf"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/---icon--leaf-@2x.png"
                    />
                </div>
                <div className="shortcut-mission">
                    <img
                        className="favicon-mission"
                        alt="Favicon mission"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-mission.svg"
                    />
                    <div className="menu-name">미션</div>
                </div>
                <div className="shortcut-volunteer">
                    <img
                        className="favicon-volunteer"
                        alt="Favicon volunteer"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-volunteer.svg"
                    />
                    <div className="menu-name">모임</div>
                </div>
                <div className="shortcut-funding">
                    <img
                        className="favicon-funding"
                        alt="Favicon funding"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-funding.svg"
                    />
                    <div className="menu-name">펀딩</div>
                </div>
                <div className="shoftcut-rank">
                    <img
                        className="favicon-rank"
                        alt="Favicon rank"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-rank.svg"
                    />
                    <div className="menu-name">랭킹</div>
                </div>
                <div className="shortcut-qna">
                    <img
                        className="favicon-qna"
                        alt="Favicon qna"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/favicon-qna.svg"
                    />
                    <div className="menu-name">문의</div>
                </div>
                <div className="shoftcut-logout">
                    <img
                        className="favicon-logout"
                        alt="Icon logout"
                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/6570444acd9388f80f7862ad/img/---icon--logout-@2x.png"
                    />
                    <div className="menu-name-2">로그아웃</div>
                </div>
            </div>
        </div>
    );
};

// className props에 대한 prop-types 유효성 검사 추가
MypageSidebarWrap.propTypes = {
    className: PropTypes.string,
};