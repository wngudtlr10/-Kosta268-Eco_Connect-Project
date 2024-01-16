import "./MyPageGifticon.css";
import MyPageSidebar from "../../components/Sidebar/MyPageSidebar";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import MGPageNation from "../../components/PageNation/MGPageNation";

function MyPageGifticon() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [gifticonList, setGifticonList] = useState([]);
    const [memberId, setMemberId] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();

    const openModal = (item) => {
        setIsModalOpen(true);
        setSelectedItem(item);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const fetchData = () => {
        AuthAxios.get(`/api/mypage/have-gifticon?page=${page}`)
            .then((response) => {
                console.log("response.data : ", response.data);
                setGifticonList(response.data.content);
                if (response.data.totalPages === 0) {
                    setTotalPages(1);
                } else {
                    setTotalPages(response.data.totalPages);
                }
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    }

    const getMemberId = () => {
        AuthAxios.get(`/api/member/me`)
            .then((response) => {
                setMemberId(response.data.memberId);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    }

    useEffect(() => {
        getMemberId();
        fetchData();
    }, []);

    useEffect(() => {
        fetchData();
    }, [page])

    const handleDelete = (memberGifticonId, memberId) => {
        let result = window.confirm("기프티콘을 삭제하시겠습니까?");
        if (result) {
            AuthAxios.delete(`/api/mypage/have-gifticon/memberGifticonId/${memberGifticonId}/memberId/${memberId}`)
                .then((response) => {
                    if (response.status === 200) {
                        alert('기프티콘 삭제가 완료되었습니다.');
                        fetchData();
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    };

    return (
        <div className="mypage-gifticon-index">
            <div className="my-gifticon-wrap-wrapper">
                <div className="my-gifticon-wrap">
                    <MyPageSidebar/>
                    <div className="my-gifticon-content">
                        <div className="my-gifticon-info">
                            <div className="status-row">
                                <div className="status">
                                    <div className="status-blank" />
                                    <div className="my-gifticon-url">
                                        <Link to={"/"}>
                                            <div className="text-wrapper">Home</div>
                                        </Link>
                                        <div className="direction">></div>
                                        <Link to={"/reward"}>
                                            <div className="text-wrapper">Reward</div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="my-gifticon-text">
                                    <div className="div">나의 기프티콘</div>
                                    <div className="rectangle" />
                                </div>
                            </div>
                        </div>
                        <div className="my-gifticon-table">
                            {
                                gifticonList.length === 0 ?
                                <img
                                    className="my-gathering-no-list"
                                    alt="My gathering list"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/659164cb6c2db389163db9dc/img/my-gathering-list-null.png"
                                />
                                :
                                <>
                                {gifticonList.map((item, number) => (
                                <div className="my-gifticon-list" key={number}>
                                    <img
                                        className="gifticon-img"
                                        alt="Gifticon img"
                                        src={item.image}
                                    />
                                    <div className="gifticon-name">{item.name}</div>
                                    <button className="gifticon-view-btn" onClick={() => openModal(item)}>기프티콘 보기</button>
                                    <button className="gifticon-delete-btn" onClick={() => handleDelete(item.memberGifticonId, item.memberId)}>삭제하기</button>
                                </div>
                                ))}
                                </>
                            }
                        </div>
                        <MGPageNation page={page} totalPages={totalPages} setPage={setPage} />

                        {isModalOpen && selectedItem && (
                            <>
                                <div className="backdrop" onClick={closeModal}>
                                    <div className="my-gifticon-modal">
                                        <div className="gifticon-name-2">{selectedItem.name}</div>
                                        <img
                                            className="gifticon-img"
                                            alt="Gifticon img"
                                            src={selectedItem.image}
                                        />
                                        <img 
                                            className="barcode"
                                            alt="barcode img"
                                            src={selectedItem.barcode}
                                        />
                                        <button className="gifticon-modal-close" onClick={closeModal}>닫기</button>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPageGifticon;