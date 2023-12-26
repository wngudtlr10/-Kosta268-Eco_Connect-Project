import React, {useEffect, useState} from 'react';
import AuthAxios from "../../utils/axios/AuthAxios";
import { Link } from 'react-router-dom';
import './MypageMain.css';
import {MypageFooterWrap} from "../../components/mypage/MypageFooter";
import {MypageSidebarWrap} from "../../components/mypage/MypageSidebar";
import {MypageHeaderWrap} from "../../components/mypage/MypageHeader";

const MypageMain = () => {

        const [member, setMember] = useState(null);

        useEffect(() => {
            AuthAxios.get(`http://localhost:8080/api/mypage`).then((response) => {
                // console.log(response.data)
                if (response.data) {
                    //회원 정보 확인용
                    // console.log(response.data);
                    setMember(response.data);
                } else {
                    alert("failed to ");
                }
            })
            .catch((error) => {
                console.error("Error fetching member data:", error);
                alert("An error occurred while fetching member data.");
            });
        }, []);

        return (
            <div className="mypage-main-index">
                <div className="div">
                    <div className="mypage-content">
                        <div className="my-info">
                            <div className="title">나의 정보</div>
                            <div className="card"/>
                            <div className="button-edit">
                              <Link to="/password-check">
                                <div className="edit">수정</div>
                              </Link>
                            </div>
                            <div className="my-info-user-status">
                                <div className="status">상태</div>
                                <div className="overlap-group">
                                    <img
                                        className="vector"
                                        alt="Vector"
                                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/vector.svg"
                                    />
                                    <div className="text-wrapper">{member ? member.role: "loading..."}</div>
                                </div>
                            </div>
                            <div className="my-info-grade">
                                <div className="overlap">
                                    <div className="text-wrapper">{member ? member.gradeId: "loading..."}</div>
                                    <img
                                        className="grade-seed"
                                        alt="Grade seed"
                                        src="https://cdn.animaapp.com/projects/656fc45c1d7b0bae0287709d/releases/65702bf70e1788ccd008ca5c/img/grade-seed.png"
                                    />
                                </div>
                                <div className="grade">등급</div>
                            </div>
                            <div className="my-info-point">
                                <div className="overlap">
                                    <div className="text-wrapper-2">{member ? member.holding: "loading..."}</div>
                                </div>
                                <div className="point">포인트</div>
                            </div>
                            <div className="my-info-email">
                                <div className="overlap">
                                    <div className="name-2">{member ? member.email: "loading..."}</div>
                                </div>
                                <div className="email">이메일</div>
                            </div>
                            <div className="my-info-name">
                                <div className="overlap">
                                    <div className="name-2">{member ? member.name: "loading..."}</div>
                                </div>
                                    <div className="name">이름</div>
                            </div>
                            <div className="my-info-profile"/>
                        </div>
                        <div className="my-address">
                            <div className="title-2">배송정보 관리</div>
                            <div className="card"/>
                            {/*<div className="edit-wrapper">*/}
                            {/*    <div className="edit-2">수정</div>*/}
                            {/*</div>*/}
                            <div className="my-address-delivery">
                                <div className="input-2"/>
                                <div className="delivery-request">배송 시 요청사항(선택)</div>
                            </div>
                            <div className="my-adress-email">
                                <div className="placeholder-wrapper">
                                    <p className="placeholder">(필수) 프로젝트 진행에 대한 새소식 및 결제 관련 안내를 받습니다.</p>
                                </div>
                                <div className="email-3">이메일</div>
                            </div>
                            <div className="my-address-contact">
                                <div className="input-2"/>
                                <div className="contact-number">연락처</div>
                            </div>
                            <div className="overlap-wrapper">
                                <div className="overlap-3">
                                    <div className="my-address-2">
                                        <div className="input-2"/>
                                        <div className="text-wrapper-3">주소</div>
                                    </div>
                                    {/*<div className="button-my-address">*/}
                                    {/*    <div className="text-wrapper-4">주소 찾기</div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="my-address-receiver">
                                <div className="input-2"/>
                                <div className="receiver">받는사람</div>
                            </div>
                        </div>
                    </div>
                    <MypageSidebarWrap className="mypage-sidebar-wrap-instance"/>
                    <div className="mypage-navigation">
                        <div className="navigation-status">
                            <div className="navigation">
                                <div className="title-3">MyPage</div>
                                <div className="description">나의 정보를 확인하고 수정할 수 있습니다.</div>
                            </div>
                            <div className="navigation-directory">
                                <div className="step">Home</div>
                                <div className="text-wrapper-5">/</div>
                                <div className="step">MyPage</div>
                            </div>
                        </div>
                        <div className="navbar">
                            <div className="my-information">나의 정보</div>
                            <div className="text-wrapper-6">나의 미션</div>
                            <div className="text-wrapper-6">나의 모임</div>
                            <div className="text-wrapper-6">나의 펀딩</div>
                            <div className="text-wrapper-6">나의 좋아요</div>
                        </div>
                    </div>
                    <MypageHeaderWrap className="mypage-header-wrap-instance"/>
                    <MypageFooterWrap className="mypage-footer-wrap-instance"/>
                </div>
            </div>
        );
}

export default MypageMain;