import './MyPageMember.css';
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";

function MyPageMember() {
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
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fa54b8bd0b7d889b4c942/img/profile-img.png"
                                        />
                                    </div>
                                    <div className="profile-info-wrap">
                                        <div className="profile-info-id">
                                            <div className="text-wrapper-2">MemberId</div>
                                        </div>
                                        <div className="profile-info-point">
                                            <div className="text-wrapper-3">포인트</div>
                                            <div className="text-wrapper-4">300 P</div>
                                        </div>
                                        <div className="profile-info-blank" />
                                        <div className="profile-info-edit">
                                            <button className="member-edit-btn">
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