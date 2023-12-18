import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-index">
            <div className="footer-wrap-wrapper">
                <div className="footer-wrap">
                    <div className="logo-wrap">
                        <Link to={"/"}>
                            <img
                                className="eco-connect-logo"
                                alt="Eco connect logo"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656f39b816e4b95e9e1c32c1/img/eco-connect-logo.png"
                            />
                        </Link>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-cccc">이용안내</div>
                        <div className="menu-cccc">공지사항</div>
                        <div className="menu-q-a">Q&amp;A</div>
                        <div className="menu-cccc">이용약관</div>
                        <div className="menu-long">개인정보 수집 및 이용 동의</div>
                    </div>
                    <div className="inquiry-wrap">
                        <div className="inquiry-btn">문의하기</div>
                        <button className="shortcut-btn">바로가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;