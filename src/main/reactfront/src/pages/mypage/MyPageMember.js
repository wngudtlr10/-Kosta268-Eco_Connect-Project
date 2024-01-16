import './MyPageMember.css';
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import {useNavigate} from "react-router-dom";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useEffect, useState} from "react";

function MyPageMember() {
    const [memberProfile, setMemberProfile] = useState([]);
    const navigate = useNavigate();

    const fetchData = () => {
        AuthAxios.get(`/api/mypage/member`)
            .then((response) => {
                console.log("response.data : ", response.data);
                setMemberProfile(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    }

    const btnHandler = () => {
        navigate("/mypage/member/modify");
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mypage-index">
            <div className="mypage-wrap-wrapper">
                <div className="mypage-wrap">
                    <MyPageSidebar/>
                    <div className="content-wrap">
                        <div className="page-info-wrap">
                            <div className="page-info">
                                <div className="text-wrapper">MyPage</div>
                                <div className="div">Welcome Setting Page</div>
                            </div>
                        </div>
                        <div className="profile-wrap">
                            <div className="profile-title">
                                <div className="profile-title-2">유저 프로필</div>
                            </div>
                            <div className="profile-content">
                                <div className="profile-card">
                                    <div className="profile-img-wrap">
                                        <img
                                            className="profile-img"
                                            alt="Profile img"
                                            src={
                                                memberProfile.image === null ?
                                                    "https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fa54b8bd0b7d889b4c942/img/profile-img.png"
                                                    :
                                                    memberProfile.image
                                                }
                                        />
                                    </div>
                                    <div className="profile-info-wrap">
                                        <div className="profile-info-id">
                                            <div className="text-wrapper-2">{memberProfile.id}</div>
                                        </div>
                                        <div className="profile-info-point">
                                            <div className="text-wrapper-3">현재 포인트</div>
                                            <div className="text-wrapper-4">{memberProfile.holdingPoint} P</div>
                                        </div>
                                        <div className="profile-info-point">
                                            <div className="text-wrapper-3">누적 포인트</div>
                                            <div className="text-wrapper-4">{memberProfile.totalPoint} P</div>
                                        </div>
                                        <div className="profile-info-edit">
                                            <button className="member-edit-btn" onClick={btnHandler}>
                                                회원정보 수정
                                            </button>
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

export default MyPageMember;