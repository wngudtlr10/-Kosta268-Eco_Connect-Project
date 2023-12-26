import React from 'react';
import './Header.css';
import {Link, useNavigate} from "react-router-dom";
import {loginState} from "../../store/recoilState";
import {useRecoilState} from "recoil";
import axios from "axios";

function Header() {
    const navigate = useNavigate();
    const [login, setLogin] = useRecoilState(loginState);

    const handleLogout = (e) => {
        axios.post(`http://localhost:8080/api/member/logout`)
            .then(function () {
                localStorage.clear();
                setLogin(false);
                navigate("/");
            })
            .catch(error => console.log(error));
    }

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
                            {!login && <div className="login-wrap">
                                <div className="login-menu"><Link to={"/login"}>로그인</Link></div>
                                <div className="login-menu"><Link to={"/join"}>회원가입</Link></div>
                            </div>}
                            {login && <div className="login-wrap">
                                <img
                                    className="msg"
                                    alt="Vector"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6575c11d965b11a5aed5aa9d/img/vector.svg"
                                />
                                <img
                                    className="icon-bell"
                                    alt="Icon bell"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6575c11d965b11a5aed5aa9d/img/---icon--bell-@2x.png"
                                />
                                <img
                                    className="icon-profile-circled"
                                    alt="Icon profile circled"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6575c11d965b11a5aed5aa9d/img/---icon--profile-circled-@2x.png"
                                />
                                <img
                                    className="icon-logout"
                                    alt="Icon logout"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6575c33babe0012a6f504e68/img/---icon--logout-@2x.png"
                                    onClick={handleLogout}
                                />
                            </div>}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;