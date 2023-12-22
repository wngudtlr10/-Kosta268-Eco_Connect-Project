import '../../assets/css/member/FindId.css';
import {Link} from "react-router-dom";
import EmailVerification from "../../components/member/EmailVerification";
import {useState} from "react";
import axios from "axios";
import EmailFindVerification from "../../components/member/EmailFindVerification";

function FindId() {
    const [email, setEmail] = useState("");
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isEmailEntered, setIsEmailEntered] = useState(false);
    const [isEmailSend, setIsEmailSend] = useState(false);
    const [isEmailAuth, setIsEmailAuth] = useState(false);
    const [isEmailAuthEntered, setIsEmailAuthEntered] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const [foundId, setfoundId] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email && !isEmailInvalid &&
            isEmailEntered && isEmailAuth && isEmailAuthEntered) {// email 관련 조건 확인

            const memberInfo = {email};

            axios.post(`http://localhost:8080/api/member/find-id`, memberInfo, {withCredentials: true})
                .then(function (res) {
                    console.log("postData : " + JSON.stringify(res.data));
                    setfoundId(res.data.id);
                    setIsFound(true);
                })
                .catch(error => {
                    console.log(error);
                    alert("가입된 정보를 찾을 수 없습니다.");
                });
        } else {
            console.log("모든 조건을 만족하지 못했습니다.");
            alert("입력한 정보를 확인해주세요.");
        }
    }

    return (
        <div className="find-id-index">
            <div className="find-id-wrap-wrapper">
                <div className="find-id-wrap">
                    <div className="find-id-header-wrap">
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
                    <div className="find-id-content-wrap">
                        <div className="main-wrap">
                            <div className="find-menu-wrap">
                                <div className="find-id-btn"><Link to={"/find-id"}>아이디 찾기</Link></div>
                                <div className="find-pw-btn"><Link to={"/find-pw"}>비밀번호 찾기</Link></div>
                            </div>
                            <form onSubmit={handleSubmit} className="submit-form">
                                <div className="find-id-info-wrap">
                                    {/*<div className="email-wrap">*/}
                                    {/*    <div className="text-wrapper">이메일</div>*/}
                                    {/*    <div className="check-wrap">*/}
                                    {/*        <input className="email-input" />*/}
                                    {/*        <button className="email-check-btn">인증하기</button>*/}
                                    {/*    </div>*/}
                                    {/*    <input className="name-email-input" />*/}
                                    {/*</div>*/}
                                    <EmailFindVerification email={email} setEmail={setEmail} isEmailSend={isEmailSend} setIsEmailSend={setIsEmailSend}
                                                       isEmailEntered={isEmailEntered} setIsEmailEntered={setIsEmailEntered}
                                                       isEmailInvalid={isEmailInvalid}  setIsEmailInvalid={setIsEmailInvalid}
                                                       isEmailAuth={isEmailAuth} setIsEmailAuth={setIsEmailAuth}
                                                       isEmailAuthEntered={isEmailAuthEntered} setIsEmailAuthEntered={setIsEmailAuthEntered} />
                                </div>
                                <div className="find-id-btn-wrap">
                                    <button className="find-id-btn-2" type="submit">아이디 찾기</button>
                                </div>
                            </form>
                            {isFound && <div className="find-id-result">
                                {/*<div className="text-wrapper">찾으시는 아이디는</div>*/}
                                {/*<input className="name-email-input" value={foundId} readOnly/>*/}

                                <div className="text-wrapper">
                                    찾으시는 아이디는 [<strong>{foundId}</strong>] 입니다.
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindId;