import '../../assets/css/member/Join.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import EmailVerification from "../../components/member/EmailVerification";

function Join() {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [email, setEmail] = useState("");

    const [isIdDuplicated, setIsIdDuplicated] = useState(false);
    const [isIdInvalid, setIsIdInvalid] = useState(false);
    const [isIdVerified, setIsIdVerified] = useState(false);

    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

    const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isEmailEntered, setIsEmailEntered] = useState(false);
    const [isEmailSend, setIsEmailSend] = useState(false);
    const [isEmailAuth, setIsEmailAuth] = useState(false);
    const [isEmailAuthEntered, setIsEmailAuthEntered] = useState(false);

    const onIdHandler = (e) => {
        const inputId = e.currentTarget.value;
        setId(inputId);

        // 영어, 숫자로 구성되어 있는지 확인 (정규 표현식)
        const isValidFormat = /^[a-zA-Z0-9]+$/.test(inputId);

        if (inputId.length < 6 || inputId.length > 12 || !isValidFormat) {
            setIsIdInvalid(true);
            setIsIdVerified(false);
        } else {
            setIsIdInvalid(false);
            axios.post(`http://localhost:8080/api/member/find/id`, {id : inputId})
                .then(function (res) {
                    console.log("postId : " + JSON.stringify(res.data));
                    setIsIdDuplicated(res.data);
                    if (!res.data) {
                        setIsIdVerified(true);
                    } else {
                        setIsIdVerified(false);
                    }
                })
                .catch(error => console.log(error));
        }
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

    const onEmailHandler = (e) => {
        const inputEmail = e.currentTarget.value;
        setEmail(inputEmail);

        setIsEmailEntered(!!inputEmail);

        // 이메일 양식이 맞는지 확인 (정규 표현식)
        const isValidFormat = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputEmail);

        if (!isValidFormat) {
            setIsEmailInvalid(true);
        } else {
            setIsEmailInvalid(false);
            axios.post(`http://localhost:8080/api/member/find/email`, {email : inputEmail})
                .then(function (res) {
                    console.log("postId : " + JSON.stringify(res.data));
                    setIsEmailDuplicated(res.data);
                })
                .catch(error => console.log(error));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (id && password && email
            && !isIdDuplicated && !isIdInvalid && isIdVerified // id 관련 조건 확인
            && !isPasswordMismatch && !isPasswordInvalid // password 관련 조건 확인
            && !isEmailDuplicated && !isEmailInvalid && isEmailEntered && isEmailAuth && isEmailAuthEntered) {// email 관련 조건 확인

            const memberInfo = {id, password, email};

            axios.post(`http://localhost:8080/api/member/join`, memberInfo)
                .then(function (res) {
                    console.log("postData : " + JSON.stringify(res.data));
                    alert(`${res.data.id}님의 가입을 축하합니다.`);
                    navigate("/");
                })
                .catch(error => console.log(error));
        } else {
            console.log("모든 조건을 만족하지 못했습니다.");
            alert("입력한 정보를 확인해주세요.");
        }
    }

    return (
        <div className="join-index">
            <div className="join-wrap-wrapper">
                <div className="join-wrap">
                    <div className="join-header-wrap">
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
                    <div className="join-content-wrap">
                        <div className="join-info-wrap">
                            <div className="join-info-header">
                                <p className="header-msg">
                                    <span className="text-wrapper">Welcome to </span>
                                    <span className="span">Econnect</span>
                                </p>
                                <div className="div">회원가입</div>
                            </div>
                            <form onSubmit={ handleSubmit }>
                                <div className="join-info-form">
                                    <div className="info-wrap">
                                        <div className="title-text-wrapper">아이디</div>
                                        <input name={"id"} className="form-input" placeholder={"6-12자 이내, 영문, 숫자만 사용 가능 합니다."}
                                                onChange={onIdHandler}/>
                                        {isIdDuplicated && <div className="form-id-validation">이미 사용 중인 아이디입니다.</div>}
                                        {isIdInvalid && <div className="form-id-validation">6-12자 이내, 영문, 숫자만 사용 가능 합니다.</div>}
                                        {isIdVerified && <div className="form-id-success">사용 가능한 아이디입니다.</div>}
                                    </div>
                                    <div className="info-wrap">
                                        <div className="title-text-wrapper">비밀번호</div>
                                        <input name={"password"} className="form-input" placeholder={"8~20자 이내, 문자/숫자/기호 사용 가능합니다."}
                                               onChange={onPasswordHandler}/>
                                        {isPasswordInvalid && <div className="form-id-validation">8-20자 이내로 입력해주세요.</div>}
                                        <div className="title-text-wrapper">비밀번호 확인</div>
                                        <input className="form-input" placeholder={"비밀번호와 똑같이 입력해주세요."}
                                                onChange={onCheckPasswordHandler}/>
                                        {isPasswordMismatch && <div className="form-id-validation">비밀번호와 똑같이 입력해주세요.</div>}
                                    </div>
                                    <div className="info-wrap">
                                        <EmailVerification email={email} setEmail={setEmail} isEmailSend={isEmailSend} setIsEmailSend={setIsEmailSend}
                                                           isEmailEntered={isEmailEntered} setIsEmailEntered={setIsEmailEntered}
                                                           isEmailInvalid={isEmailInvalid}  setIsEmailInvalid={setIsEmailInvalid}
                                                           isEmailDuplicated={isEmailDuplicated} setIsEmailDuplicated={setIsEmailDuplicated}
                                                           isEmailAuth={isEmailAuth} setIsEmailAuth={setIsEmailAuth}
                                                           isEmailAuthEntered={isEmailAuthEntered} setIsEmailAuthEntered={setIsEmailAuthEntered} />
                                    </div>
                                </div>
                                <div className="btn-form">
                                    <button className="submit-btn" type="submit">회원가입</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;