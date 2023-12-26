import React, { useState } from 'react';
import axios from "axios";

function EmailVerification({ email, setEmail, isEmailDuplicated, setIsEmailDuplicated,
                               isEmailInvalid, setIsEmailInvalid, isEmailEntered, setIsEmailEntered,
                               isEmailAuth, setIsEmailAuth, isEmailAuthEntered, setIsEmailAuthEntered }) {
    const [isEmailSend, setIsEmailSend] = useState(false);
    // const [isEmailEntered, setIsEmailEntered] = useState(false);
    // const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    // const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
    // const [isEmailAuth, setIsEmailAuth] = useState(false);
    // const [isEmailAuthEntered, setIsEmailAuthEntered] = useState(false);

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
    };

    const onEmailSendHandler = () => {
        axios.post(`http://localhost:8080/api/mail/mail-send`, {email : email}, {withCredentials: true})
            .then(function (res) {
                console.log("postEmail : " + JSON.stringify(res.data));
                setIsEmailSend(true);
            })
            .catch(error => console.log(error));
    };

    const onEmailAuthHandler = (e) => {
        const inputAuth = e.currentTarget.value;

        setIsEmailAuthEntered(!!inputAuth);

        axios.post(`http://localhost:8080/api/mail/mail-confirm`, {code: inputAuth}, {withCredentials: true})
            .then(function (res) {
                setIsEmailAuth(res.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="title-text-wrapper">이메일</div>
            <div className="input-btn-wrap">
                <input name={"email"} className="form-input-sm" onChange={onEmailHandler} disabled={isEmailSend}/>
                <button className="form-email-btn" type={"button"} onClick={onEmailSendHandler} disabled={!isEmailEntered || isEmailInvalid || isEmailDuplicated || isEmailSend}>인증하기</button>
            </div>
            {isEmailInvalid && <div className="form-id-validation">이메일 형식이 올바르지 않습니다.</div>}
            {isEmailDuplicated && <div className="form-id-validation">이미 사용 중인 이메일입니다.</div>}
            {isEmailSend && <div className="form-id-success">이메일이 전송되었습니다. 인증번호를 입력해주세요.</div>}
            {isEmailSend && <input className="form-input" onChange={onEmailAuthHandler} disabled={isEmailAuthEntered && isEmailAuth}/>}
            {isEmailAuthEntered && !isEmailAuth && <div className="form-id-validation">인증번호가 일치하지 않습니다.</div>}
            {isEmailAuthEntered && isEmailAuth && <div className="form-id-success">인증 되었습니다.</div>}
        </>
    );
}

export default EmailVerification;