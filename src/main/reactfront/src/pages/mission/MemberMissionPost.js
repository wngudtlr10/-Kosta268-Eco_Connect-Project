import React, {useEffect, useState} from "react";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useNavigate, useParams} from "react-router-dom";

function MemberMissionPost () {

    const params = useParams();
    const memberId = params.memberId;
    const missionId = params.missionId;
    const memberMissionId = params.memberMissionId;
    // const [memberId, setMemberId] = useState();
    // const [missionId, setMissionId] = useState();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const navigate = useNavigate();
    const now = new Date();
    const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;


    const config = {
        headers:
            {
                "Content-Type": "multipart/form-data",
            }
    };

    const navigator = () => {
        navigate("/mypage/mission")
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }
    const handleImgChange = (e) => {
        setImages([...e.target.files]);
    }

    useEffect(() => {
        console.log(memberId, missionId, memberMissionId);
    },[]);


    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("memberId", memberId);
        formData.append("missionId", missionId);
        formData.append("memberMissionId", memberMissionId)
        formData.append("title", title);
        formData.append("content", content);

        images.forEach((image, index) => {
            formData.append(`images`, image);
        })
        console.log(formData);
        const response = await AuthAxios.post(`/api/missions/${missionId}/post`, formData, config)
            .then((response) => {
                console.log("success");
                console.log(response)
                navigator();
            })
            .catch((error) => {
                console.log("fail");
                console.log(error);
            })

    }

    return (
        <div className="member-mission-post-index">
            <div className="add-wrap-wrapper">
                <div className="add-wrap">
                    <div className="member-mission-post-form-wrap">
                        <div className="member-mission-post-text">미션 인증글 작성</div>
                        <form className="member-mission-post-form" method="post">
                            <div className="form-title">제목</div>
                            <input type="text" className="title" onChange={handleTitleChange} />
                            <div className="text-wrapper-2">내용소개</div>
                            <input type="text" className="content" onChange={handleContentChange} />
                            <div className="text-wrapper-2">사진등록</div>
                            <input type="file" className="img" onChange={handleImgChange} multiple="true"/>
                        </form>
                    </div>
                    <div className="add-button-wrap">
                        <div className="add-button">
                            <button className="add-button-text" onClick={handleSubmit}>작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MemberMissionPost;