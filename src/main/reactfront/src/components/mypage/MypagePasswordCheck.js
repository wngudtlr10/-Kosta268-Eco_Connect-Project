import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import PropTypes from "prop-types";

import "./MypagePasswordCheck.css";

export const MypagePasswordCheckWrap = ({ className }) => {

    const [member, setMember] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                setMember(response.data);
            } else {
                alert("사용자의 정보를 가져오지 못했습니다.");
            }
        });
    }, []);

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordSubmit = () => {
        setError("");
        setLoading(true);

        Axios.post("http://localhost:8080/api/passwordcheck/1", {
            memberId: member.memberId,
            password: password,
        })
            .then((response) => {
                if (response.data.success) {
                    navigate("/myinfo-edit");
                } else {
                    setError("비밀번호가 올바르지 않습니다. 다시 입력해 주세요.");
                }
            })
            .catch((error) => {
                setError("서버 오류가 발생했습니다. 다시 시도해 주세요.");
            })
            .finally(() => {
                setLoading(false);
            });
    };



    // const handleCancelClick = () => {
    //     // 취소 버튼을 누르면 마이페이지 메인 페이지로 이동하도록 설정
    //     navigate("/");
    // };

    return (
        <div className={`mypage-password-check ${className}`}>
            <div className="infomation">
                <div className="password-check">
                    <div className="title">비밀번호 확인</div>
                    <p className="description">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해 주세요.</p>
                </div>
                <div className="password-check-2">
                    <div className="overlap-wrapper">
                        <div className="overlap-group-2">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordInput}
                                className="input-2"
                            />
                            <div className="password">비밀번호</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-area-wrap">
                <div className={`button-area ${loading ? 'loading' : ''}`}>
                    <div className="button-continue" onClick={handlePasswordSubmit}>
                        <div className="continue">{loading ? '확인 중...' : '확인'}</div>
                    </div>
                    <div className="button-cancel" >
                        <Link to="/">
                            <div className="cancel">취소</div>
                        </Link>
                    </div>
                </div>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

MypagePasswordCheckWrap.propTypes = {
    className: PropTypes.string.isRequired
};