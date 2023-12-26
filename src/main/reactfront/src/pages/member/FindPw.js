import '../../assets/css/member/FindPw.css';
import {Link, useNavigate} from "react-router-dom";
import EmailFindVerification from "../../components/member/EmailFindVerification";
import {useState} from "react";
import axios from "axios";

function FindPw() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isEmailEntered, setIsEmailEntered] = useState(false);
    const [isEmailSend, setIsEmailSend] = useState(false);
    const [isEmailAuth, setIsEmailAuth] = useState(false);
    const [isEmailAuthEntered, setIsEmailAuthEntered] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

    const [isReadOnly, setIsReadOnly] = useState(false);

    const navigate = useNavigate();

    const onIdHandler = (e) => {
        const inputId = e.currentTarget.value;
        setId(inputId);
    }

    const onPasswordHandler = (e) => {
        const inputPassword = e.currentTarget.value;
        setPassword(inputPassword);

        if (inputPassword.length < 8 || inputPassword.length > 20) {
            setIsPasswordInvalid(true);
        } else {
            setIsPasswordInvalid(false);

            if (checkPassword && checkPassword !== inputPassword) {
                setIsPasswordMismatch(true);
            } else {
                setIsPasswordMismatch(false);
            }
        }
    }

    const onCheckPasswordHandler = (e) => {
        const inputCheckPassword = e.currentTarget.value;
        setCheckPassword(inputCheckPassword);

        if (!isPasswordInvalid && password && password !== inputCheckPassword) {
            setIsPasswordMismatch(true);
        } else {
            setIsPasswordMismatch(false);
        }
    }

    const handleFindSubmit = async (e) => {
        e.preventDefault();

        if (id && email && !isEmailInvalid &&
            isEmailEntered && isEmailAuth && isEmailAuthEntered) {// email 관련 조건 확인

            const memberInfo = {id, email};

            axios.post(`http://localhost:8080/api/member/find-pw/member`, memberInfo, {withCredentials: true})
                .then(function (res) {
                    console.log("postData : " + JSON.stringify(res.data));
                    setIsReadOnly(true);
                    setIsFound(res.data);
                })
                .catch(error => {
                    console.log(error);
                    alert("가입된 정보를 찾을 수 없습니다.")
                });
        } else {
            console.log("모든 조건을 만족하지 못했습니다.");
            alert("입력한 정보를 확인해주세요.");
        }
    }

    const handleChangeSubmit = async (e) => {
        e.preventDefault();

        if (isFound && id && password
            && !isPasswordMismatch && !isPasswordInvalid) {
            const memberInfo = {id, password, email};

            axios.post(`http://localhost:8080/api/member/find-pw/change-pw`, memberInfo, {withCredentials: true})
                .then(function (res) {
                    console.log("postData : " + JSON.stringify(res.data));
                    alert("비밀번호가 변경되었습니다.");
                    navigate("/");
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log("모든 조건을 만족하지 못했습니다.");
            alert("입력한 정보를 확인해주세요.");
        }
    }

    return (
        <div className="find-pw-index">
            <div className="find-pw-wrap-wrapper">
                <div className="find-pw-wrap">
                    <div className="find-pw-header-wrap">
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
                    <div className="find-pw-content-wrap">
                        <div className="main-wrap">
                            <div className="find-menu-wrap">
                                <div className="find-id-btn"><Link to={"/find-id"}>아이디 찾기</Link></div>
                                <div className="find-pw-btn"><Link to={"/find-pw"}>비밀번호 찾기</Link></div>
                            </div>
                            <form onSubmit={handleFindSubmit} className="submit-form">
                                <div className="find-pw-info-wrap">
                                    <div className="id-pw-wrap">
                                        <div className="text-wrapper">아이디</div>
                                        <input className="id-pw-input" onChange={onIdHandler} readOnly={isReadOnly}/>
                                    </div>
                                    <div className="email-wrap">
                                        {/*<div className="text-wrapper">이메일</div>*/}
                                        {/*<div className="check-wrap">*/}
                                        {/*    <input className="email-input" />*/}
                                        {/*    <button className="email-check-btn">인증하기</button>*/}
                                        {/*</div>*/}
                                        {/*<div className="id-pw-input" />*/}
                                        <EmailFindVerification email={email} setEmail={setEmail} isEmailSend={isEmailSend} setIsEmailSend={setIsEmailSend}
                                                               isEmailEntered={isEmailEntered} setIsEmailEntered={setIsEmailEntered}
                                                               isEmailInvalid={isEmailInvalid}  setIsEmailInvalid={setIsEmailInvalid}
                                                               isEmailAuth={isEmailAuth} setIsEmailAuth={setIsEmailAuth}
                                                               isEmailAuthEntered={isEmailAuthEntered} setIsEmailAuthEntered={setIsEmailAuthEntered} />
                                    </div>
                                </div>
                                <div className="find-pw-btn-wrap">
                                    <button className="find-pw-change-btn">비밀번호 찾기</button>
                                </div>
                            </form>
                            {isFound && <form onSubmit={handleChangeSubmit}>
                                <div className="change-pw-wrap">
                                    <div className="change-pw-guide-text">변경할 비밀번호를 입력해주세요.</div>
                                    <div className="text-wrapper-3">비밀번호</div>
                                    <input className="id-pw-input" placeholder={"8~20자 이내, 문자/숫자/기호 사용 가능합니다."}
                                           onChange={onPasswordHandler}/>
                                    {isPasswordInvalid && <div className="form-id-validation">8-20자 이내로 입력해주세요.</div>}
                                    <div className="text-wrapper-3">비밀번호 확인</div>
                                    <input className="id-pw-input" onChange={onCheckPasswordHandler}/>
                                    {isPasswordMismatch && <div className="form-id-validation">비밀번호와 똑같이 입력해주세요.</div>}
                                </div>
                                <div className="change-pw-btn-wrap">
                                    <button className="find-pw-change-btn">비밀번호 변경</button>
                                </div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindPw;