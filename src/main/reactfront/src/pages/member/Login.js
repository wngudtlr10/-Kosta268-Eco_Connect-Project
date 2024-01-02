import '../../assets/css/member/Login.css';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {loginState} from "../../store/recoilState";
// import useAccessToken from "../../hooks/useAccessToken";

function Login() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const [isIdEntered, setIsIdEntered] = useState(true);
    const [isPasswordEntered, setIsPasswordEntered] = useState(true);

    const login = useRecoilValue(loginState);
    const setLogin = useSetRecoilState(loginState);
    const [accessToken, setAccessToken] = useState("");

    const onIdHandler = (e) => {
        const inputId = e.currentTarget.value;
        setId(inputId);

        setIsIdEntered(!!inputId);
    }

    const onPasswordHandler = (e) => {
        const inputPassword = e.currentTarget.value;
        setPassword(inputPassword);

        setIsPasswordEntered(!!inputPassword);
    }

    useEffect(() => {
        console.log("accessToken : {}", accessToken);
        if (accessToken) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            localStorage.setItem('accessToken', accessToken);
            setLogin(true);
            navigate("/");
        } else {
            setLogin(false);
        }
    }, [accessToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id && password && isIdEntered && isPasswordEntered) {
            const loginInfo = {id, password};
            console.log(loginInfo);

            axios.post(`http://localhost:8080/api/member/login`, loginInfo, {withCredentials: true})
                .then(function (res) {
                    setAccessToken(res.data.accessToken);
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        alert("잘못된 아이디 또는 비밀번호입니다.");
                    } else {
                        console.log(error);
                    }
                });
        } else {
            console.log("아이디 또는 비밀번호가 입력되지 않았습니다.");
            alert("아이디 또는 비밀번호를 입력해주세요.");
        }
    }

    return (
        <div className="login-index">
            <div className="login-wrap-wrapper">
                <div className="login-wrap">
                    <div className="login-header-wrap">
                        <div className="logo">
                            <div className="element">
                                <Link to={"/"}>
                                    <img
                                        className="eco-connect-logo"
                                        alt="Eco connect logo"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656f39b816e4b95e9e1c32c1/img/eco-connect-logo.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="login-content-wrap">
                        <div className="text-partition">
                            <div className="text-wrap">
                                <div className="text-wrapper">로그인</div>
                                <div className="text-1">Lorem Ipsum is simply</div>
                                <p className="text-2">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry&#39;s standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                        <div className="img-partition">
                            <img
                                className="login-img"
                                alt="Login img"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656ea5c622e8e5c6d8297a0b/img/login-img.png"
                            />
                        </div>
                        <div className="login-partition">
                            <div className="login-info-wrap">
                                <div className="login-info-header">
                                    <p className="login-info-header-2">
                                        <span className="welcome-1">Welcome to </span>
                                        <span className="welcome-2">Econnect</span>
                                    </p>
                                    <div className="login-info-header-text">로그인</div>
                                </div>
                                <form onSubmit={ handleSubmit }>
                                    <div className="login-info-form">
                                        <div className="login-input-wrap">
                                            <div className="login-input-text">아이디</div>
                                            <input className="login-input" onChange={onIdHandler}/>
                                            {!isIdEntered && <div className="form-id-validation">아이디를 입력해주세요.</div>}
                                        </div>
                                        <div className="login-input-wrap">
                                            <div className="login-input-text">비밀번호</div>
                                            <input className="login-input" type="password" autoComplete="off" onChange={onPasswordHandler}/>
                                            {!isPasswordEntered && <div className="form-id-validation">비밀번호를 입력해주세요.</div>}
                                        </div>
                                        <div className="forgot-info"><Link to={"/find-id"}>로그인 정보를 잊으셨나요?</Link></div>
                                        <button className="login-button" type="submit">로그인</button>
                                    </div>
                                </form>
                                <div className="login-info-button">
                                    <img
                                        className="img"
                                        alt="Kakao login button"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656ec7d24d3fe40c0b1f9e8b/img/kakao-login-button-1.png"
                                        // onClick={ handleKakaoLogin }
                                        // style={{visibility: 'hidden'}}
                                        style={{display: 'none'}}
                                    />
                                    <img
                                        className="img"
                                        alt="Naver login button"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656ec7d24d3fe40c0b1f9e8b/img/naver-login-button-1.png"
                                        // style={{visibility: 'hidden'}}
                                        style={{display: 'none'}}
                                    />
                                    <div className="join-wrap">
                                        <p className="join-text">아직 ECO CONNECT 회원이 아니신가요?</p>
                                        <Link to={"/join"}><button className="join-button">회원가입</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;