import React from "react";
import "./MypageHeader.css";
import PropTypes from "prop-types";

export const MypageHeaderWrap = ({ className }) => {
    return (
        <div className={`mypage-header-wrap ${className}`}>
            <div className="header-search">
                <div className="text-wrapper-3">Search Here</div>
                <img
                    className="search"
                    alt="Search"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/search.png"
                />
            </div>
            <div className="header-shortcut">
                <img
                    className="vector"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/vector-1.svg"
                />
                <img
                    className="icon-bell"
                    alt="Icon bell"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/---icon--bell-@2x.png"
                />
                <img
                    className="element"
                    alt="Element"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/----3-1@2x.png"
                />
            </div>
        </div>
    );
};

// className props에 대한 prop-types 유효성 검사 추가
MypageHeaderWrap.propTypes = {
    className: PropTypes.string,
};