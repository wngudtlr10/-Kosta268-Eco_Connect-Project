import React from "react";
import "./MypageFooter.css";
import PropTypes from "prop-types";

export const MypageFooterWrap = ({ className }) => {
    return (
        <div className={`mypage-footer-wrap ${className}`}>
            <div className="footer-logo-image">
                <img
                    className="logo-image"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/logo-image.png"
                />
            </div>
            <div className="footer-shortcut">
                <div className="text-wrapper-8">이용안내</div>
                <div className="text-wrapper-8">공지사항</div>
                <div className="text-wrapper-8">Q&amp;A</div>
                <div className="text-wrapper-8">이용약관</div>
                <p className="privacy-notice">개인정보 수집 및 이용 동의</p>
            </div>
            <div className="button-contact-us">
                <div className="contact-us">문의하기</div>
            </div>
        </div>
    );
};

// className props에 대한 prop-types 유효성 검사 추가
MypageFooterWrap.propTypes = {
    className: PropTypes.string,
};