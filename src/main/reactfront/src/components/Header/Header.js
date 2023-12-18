import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header-container"> {/* Enclosing div with a class for styling */}
            <header>
                <div className="header-index">
                    <div className="header-wrap-wrapper">
                        <div className="header-wrap">
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
                                <div className="menu-cccc">봉사미션</div>
                                <div className="menu-cccc">봉사모임</div>
                                <div className="menu-cc">펀딩</div>
                                <div className="menu-ccc">리워드</div>
                                <div className="menu-cc">지원</div>
                            </div>
                            <div className="login-wrap">
                                <div className="login-menu"><Link to={"/login"}>로그인</Link></div>
                                <div className="login-menu"><Link to={"/join"}>회원가입</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;