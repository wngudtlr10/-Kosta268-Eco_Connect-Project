import React, { useState } from 'react';
import axios from "axios";

function EmailFindVerification({ email, setEmail, isEmailInvalid, setIsEmailInvalid,
                               isEmailEntered, setIsEmailEntered, isEmailAuth, setIsEmailAuth,
                               isEmailAuthEntered, setIsEmailAuthEntered }) {
    const [isEmailSend, setIsEmailSend] = useState(false);

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
                <button className="form-email-btn" type={"button"} onClick={onEmailSendHandler} disabled={!isEmailEntered || isEmailInvalid || isEmailSend}>인증하기</button>
            </div>
            {isEmailInvalid && <div className="form-id-validation">이메일 형식이 올바르지 않습니다.</div>}
            {isEmailSend && <div className="form-id-success">이메일이 전송되었습니다. 인증번호를 입력해주세요.</div>}
            {isEmailSend && <input className="form-input" onChange={onEmailAuthHandler} disabled={isEmailAuthEntered && isEmailAuth}/>}
            {isEmailAuthEntered && !isEmailAuth && <div className="form-id-validation">인증번호가 일치하지 않습니다.</div>}
            {isEmailAuthEntered && isEmailAuth && <div className="form-id-success">인증 되었습니다.</div>}
        </>
    );
}

export default EmailFindVerification;