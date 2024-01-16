import "./MyPageMemberModify.css";
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import React, {useEffect, useRef, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import Post from "../../components/Post/Post";

function MyPageMemberModify() {
    const [memberInfo, setMemberInfo] = useState([]);
    const [memberId, setMemberId] = useState();
    const [addressObj, setAddressObj] = useState({
        zoneCode: "",
        fullAddress: "",
        subAddress: "",
    });
    const [passwordObj, setPasswordObj] = useState({
        currentPassword: "",
        newPassword: "",
        newPasswordCheck: "",
    });
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const fetchData = () => {
        AuthAxios.get(`/api/mypage/modify/member`)
            .then((response) => {
                console.log("response.data : ", response.data);
                setMemberInfo(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    }

    const fetchMember = () => {
        AuthAxios.get('/api/member/me')
            .then((response) => {
                setMemberId(response.data.memberId);
            })
            .catch((error) => {
                console.log(error);
                console.log('error fetching member data API: ',error);
            })
    }

    const handleSubAddressChange = (e) => {
        setAddressObj(prevState => ({
            ...prevState,
            subAddress: e.target.value
        }));
    };

    const handleAddressSubmit = () => {
        AuthAxios.put(`/api/mypage/modify/member/${memberId}/address`, addressObj)
            .then((response) => {
                console.log("response.data : ", response.data);
                window.alert("주소가 변경되었습니다.");
                setAddressObj({
                    zoneCode: response.data.zoneCode,
                    fullAddress: response.data.fullAddress,
                    subAddress: response.data.subAddress
                });
            })
            .catch((error) => {
                console.log('Error from API: ' , error);
            });
    }

    const onCurrentPasswordHandler = (e) => {
        setPasswordObj(prevState => ({
            ...prevState,
            currentPassword: e.target.value
        }));
    }

    const onPasswordHandler = (e) => {
        const inputPassword = e.currentTarget.value;
        setPassword(inputPassword);
        setPasswordObj(prevState => ({
            ...prevState,
            newPassword: e.target.value
        }));

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
        setPasswordObj(prevState => ({
            ...prevState,
            newPasswordCheck: e.target.value
        }));

        if (!isPasswordInvalid && password && password !== inputCheckPassword) {
            setIsPasswordMismatch(true);
        } else {
            setIsPasswordMismatch(false);
        }
    }

    const handlePasswordSubmit = () => {
        if (password && !isPasswordMismatch && !isPasswordInvalid
            && passwordObj.currentPassword.length !== 0 && passwordObj.newPassword.length !== 0) {

            AuthAxios.put(`/api/mypage/modify/member/${memberId}/password`, passwordObj)
                .then((response) => {
                    if(response.status === 200){
                        window.alert("비밀번호가 변경되었습니다.");
                        setPasswordObj({
                            currentPassword: "",
                            newPassword: "",
                            newPasswordCheck: "",
                        })
                    }
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        alert("현재 비밀번호가 일치하지 않습니다.");
                    } else {
                        console.log('Error from API: ' , error);
                    }
                });

        } else {
            alert("입력한 정보를 확인해주세요.");
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file && file.type.substr(0, 5) === 'image') {
            imageRef.current.src = URL.createObjectURL(file);
        } else {
            imageRef.current.src = '';
        }
    };

    const handleImageSubmit = () => {
        if (image) {
            const formData = new FormData();
            formData.append("image", image);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            AuthAxios.put(`/api/mypage/modify/member/${memberId}/profile`, formData, config)
                .then((response) => {
                    window.alert("프로필 사진이 변경되었습니다.");
                })
                .catch((error) => {
                    console.log('Error from API: ' , error);
                });
        } else {
            alert("선택한 이미지를 확인해주세요.");
        }
    }

    useEffect(() => {
        fetchData();
        fetchMember();
    }, []);

    useEffect(() => {
        setAddressObj({
            zoneCode: memberInfo.zoneCode,
            fullAddress: memberInfo.fullAddress,
            subAddress: memberInfo.subAddress,
        });
    }, [memberInfo]);

    return (
        <div className="mypage-member-modify-index">
            <div className="mypage-wrap-wrapper">
                <div className="mypage-wrap">
                    <MyPageSidebar/>
                    <div className="content-wrap">
                        <div className="page-info-wrap">
                            <div className="frame">
                                <div className="text-wrapper">MyPage</div>
                                <div className="div">Welcome Setting Page</div>
                            </div>
                        </div>
                        <div className="profile-wrap">
                            <div className="profile-title">
                                <div className="text-wrapper-2">회원정보 수정</div>
                            </div>
                            <div className="profile-content">
                                <div className="profile-content-top">
                                    <div className="profile-content-top-2">
                                        <div className="text-wrapper-3">아이디</div>
                                        <input className="div-2" value={memberInfo.id} readOnly/>
                                        <div className="text-wrapper-3">이메일</div>
                                        <input className="div-2" value={memberInfo.email} readOnly/>
                                    </div>
                                    <div className="profile-content-top-1">
                                        <div className="text-wrapper-3">프로필 사진</div>
                                        <div className="profile-img-wrap">
                                            {/*<label htmlFor="fileInput" className="profile-img">*/}
                                            <div className="profile-img-input-wrap">
                                                <img
                                                    className="profile-img"
                                                    alt="profile-img"
                                                    src={memberInfo.image ? memberInfo.image : `https://cdn.animaapp.com/projects/65976440eaec1a9e33ea98d1/releases/6599c62801e8a3e712603468/img/my-gathering-list-null.png`}
                                                    ref={imageRef}
                                                />
                                                <input
                                                    type="file"
                                                    className="file-input"
                                                    // style={{display: 'none'}}
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                            {/*</label>*/}

                                            <div className="profile-img-btn-wrap">
                                                <button className="text-wrapper-4" onClick={handleImageSubmit}>이미지 변경</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-content-2">
                                    <div className="profile-content-3">
                                        <div className="text-wrapper-3">기존 비밀번호</div>
                                        <input className="div-2" value={passwordObj.currentPassword}
                                               onChange={onCurrentPasswordHandler} type={"password"}/>
                                        <div className="text-wrapper-3">새 비밀번호</div>
                                        <input className="div-2" placeholder={"8~20자 이내, 문자/숫자/기호 사용 가능합니다."}
                                               onChange={onPasswordHandler} type={"password"} value={passwordObj.newPassword}/>
                                        {isPasswordInvalid && <div className="form-id-validation">8-20자 이내로 입력해주세요.</div>}
                                        <div className="text-wrapper-3">새 비밀번호 확인</div>
                                        <input className="div-2" placeholder={"비밀번호와 똑같이 입력해주세요."}
                                               onChange={onCheckPasswordHandler} type={"password"} value={passwordObj.newPasswordCheck}/>
                                        {isPasswordMismatch && <div className="form-id-validation">비밀번호와 똑같이 입력해주세요.</div>}
                                        <div className="div-wrapper-2">
                                            <button className="text-wrapper-4" onClick={handlePasswordSubmit}>변경하기</button>
                                        </div>
                                    </div>
                                    <div className="profile-content-4">
                                        <div className="text-wrapper-3">주소</div>
                                        <div className="form-address-form">
                                            <input className="form-address-zipcode" value={addressObj.zoneCode} readOnly/>
                                            <Post setAddressObj={setAddressObj}/>
                                        </div>
                                        <input className="div-2" value={addressObj.fullAddress} readOnly/>
                                        <div className="text-wrapper-3">상세주소</div>
                                        <input className="div-2" value={addressObj.subAddress} onChange={handleSubAddressChange}/>
                                        <div className="div-wrapper-2">
                                            <button className="text-wrapper-4" onClick={handleAddressSubmit}>변경하기</button>
                                        </div>
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

export default MyPageMemberModify;