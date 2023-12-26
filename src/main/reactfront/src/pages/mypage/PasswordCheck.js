import React from "react";
import "./PasswordCheck.css";
import {MypageFooterWrap} from "../../components/mypage/MypageFooter";
import {MypageSidebarWrap} from "../../components/mypage/MypageSidebar";
import {MypagePasswordCheckWrap} from "../../components/mypage/MypagePasswordCheck";

const PasswordCheck = () => {
    return (
        <div className="password-check-index">
            <div className="div-2">
                <MypageSidebarWrap className="mypage-sidebar-wrap-instance" />
                <MypageFooterWrap className="mypage-footer-wrap-instance" />
                <MypagePasswordCheckWrap className="mypage-password-check-wrap-instance" />
            </div>
        </div>
    );
};

export default PasswordCheck;