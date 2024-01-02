import "./MyPageMission.css";
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import React from "react";

function MyPageMission() {

    return (
        <div className="mypage-mission-index">
            <div className="my-mission-wrap-wrapper">
                <div className="my-mission-wrap">
                    <MyPageSidebar/>
                    <div className="my-mission-right">
                        <div className="my-mission-main-wrap">
                            <div className="my-mission-info-wrap">
                                <div className="my-mission-info">
                                    <div className="status-row">
                                        <div className="status">
                                            <div className="status-blank" />
                                            <div className="my-mission-url">
                                                <div className="text-wrapper">Home</div>
                                                <div className="direction">></div>
                                                <div className="text-wrapper">Mission</div>
                                            </div>
                                        </div>
                                        <div className="my-mission-text">
                                            <div className="div">나의 미션</div>
                                            <div className="rectangle" />
                                        </div>
                                    </div>
                                    <div className="my-mission-card-wrap">
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">20</div>
                                                <div className="text-wrapper-3">진행중인 미션</div>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-2" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">12</div>
                                                <div className="text-wrapper-4">완료한 미션</div>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-3" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-2">200</div>
                                                <p className="p">
                                                    <span className="span">누적 포인트&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                    <span className="text-wrapper-5">상세보기</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <div className="div-3">
                                                <div className="bg-4" />
                                                <img
                                                    className="artwork"
                                                    alt="Artwork"
                                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6592ee1de6f8325569d87d8e/img/artwork.png"
                                                />
                                            </div>
                                            <div className="div-4">
                                                <div className="text-wrapper-6">2</div>
                                                <div className="text-wrapper-7">실패한 미션</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="status-row-2">
                                <div className="my-mission-ongoing">
                                    <div className="text-wrapper-8">진행중인 미션</div>
                                </div>
                                <div className="my-mission-table">
                                    <div className="th">
                                        <div className="frame">
                                            <div className="checkbox-none">
                                                <div className="checkbox" />
                                            </div>
                                            <div className="text-wrapper-9">미션 리스트</div>
                                            <div className="text-wrapper-10">흭득가능 포인트</div>
                                            <div className="text-wrapper-11">주최자</div>
                                            <div className="text-wrapper-12">남은시간</div>
                                            <div className="text-wrapper-13">Action</div>
                                        </div>
                                    </div>
                                    <div className="split-wrapper">
                                        <img
                                            className="split"
                                            alt="Split"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/split.svg"
                                        />
                                    </div>
                                </div>
                                <div className="my-mission-list-wrapper">
                                    <div className="my-mission-list">
                                        <div className="checkbox-none">
                                            <div className="checkbox" />
                                        </div>
                                        <div className="my-mission-info-2">
                                            <div className="my-mission-image" />
                                            <div className="my-mission-title-and">
                                                <div className="text-wrapper-14">쓰레기 1개 줍기</div>
                                                <div className="text-wrapper-15">성남시</div>
                                            </div>
                                        </div>
                                        <div className="my-mission-point">
                                            <p className="element-p">
                                                <span className="text-wrapper-16">10 </span>
                                                <span className="text-wrapper-17">P</span>
                                            </p>
                                        </div>
                                        <div className="my-mission-host">
                                            <img
                                                className="img"
                                                alt="My mission host"
                                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6581278e47a45727e508871b/img/my-mission-host-profile.svg"
                                            />
                                            <div className="my-mission-host-name">
                                                <div className="text-wrapper-18">에코커넥트</div>
                                            </div>
                                        </div>
                                        <div className="my-mission-remain">
                                            <p className="text-wrapper-19">2 Hours 1 min 30s</p>
                                        </div>
                                        <div className="my-mission-button">
                                            <button className="my-mission-post">
                                                인증
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-mission-delete">
                                    <button className="my-mission-delete-btn">미션삭제</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageMission;