import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import AuthAxios from "../../utils/axios/AuthAxios";
import './GatheringUpdate.css';

function GatheringUpdate() {
    const now = new Date();
    const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [location, setLocation] = useState("");
    const [addressObj, setAddressObj] = useState({
        zoneCode: "",
        fullAddress: "",
        subAddress: "",
    });
    const [deadline, setDeadline] = useState(localDateTime);
    const [startAt, setStartAt] = useState(localDateTime);
    const [capacity, setCapacity] = useState("");
    const [etc, setEtc] = useState("");

    let params = useParams();
    let gatheringId = params.gatheringId;
    const navigate = useNavigate();

    const imageInputRef = useRef();
    const imageRef = useRef();

    const fetchGathering = () => {
        console.log(gatheringId);
        AuthAxios.get(`http://localhost:8080/api/gathering/${gatheringId}`)
            .then((response) => {
                console.log(response.data);
                const gathering = response.data;
                setTitle(gathering.title);
                setIntro(gathering.intro);
                setAddressObj({
                    zoneCode: gathering.zoneCode,
                    fullAddress: gathering.fullAddress,
                    subAddress: gathering.subAddress
                })
                setDeadline(gathering.deadline);
                setStartAt(gathering.startAt);
                setCapacity(gathering.capacity);
                setEtc(gathering.etc);
                setImage(gathering.image);
                imageRef.current.src = gathering.image;
            })
    };



    useEffect(() => {
        fetchGathering();

    },[gatheringId])

    const config = {
        headers:
            {
                "Content-Type": "multipart/form-data",
            }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleIntroChange = (e) => {
        setIntro(e.target.value);
    }
    const handleImgChange = (e) => {

        const file = e.target.files[0];
        setImage(file);
        if (file && file.type.substr(0, 5) === 'image') {
            imageRef.current.src = URL.createObjectURL(file);
        } else {
            imageRef.current.src = '';
        }
    }


    const handleSubAddressChange = (e) => {
        setAddressObj(prevState => ({
            ...prevState,
            subAddress: e.target.value
        }));
    };

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const handleStartAtChange = (e) => {
        setStartAt(e.target.value);
    }

    const handleCapacityChange = (e) => {
        setCapacity(e.target.value)
    }

    const handleEtcChange = (e) => {
        setEtc(e.target.value);
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("intro", intro);
        formData.append("image", image);
        formData.append("zoneCode", addressObj.zoneCode);
        formData.append("fullAddress", addressObj.fullAddress);
        formData.append("subAddress", addressObj.subAddress);
        formData.append("deadline", deadline);
        formData.append("startAt", startAt);
        formData.append("capacity", capacity);
        formData.append("etc", etc);

        const response = await AuthAxios.put(`http://localhost:8080/api/gathering/${gatheringId}`, formData, config)
            .then((response) => {
                console.log("success");
                console.log(response);
                navigate('/gathering');
            })
            .catch((error) => {
                console.log("fail");
                console.log(error);
            })


    }

    return (
        <div className="gathering-update-index">
            <div className="add-wrap-wrapper">
                <div className="add-wrap">
                    <div className="gathering-update-form-wrap">
                        <div className="gathering-update-text">봉사모임 수정</div>
                        <form className="gathering-update-form" method="post">
                            <div className="form-title">모임제목</div>
                            <input type="text" className="title" onChange={handleTitleChange} value={title}/>
                            <div className="text-wrapper-2">모임소개</div>
                            <input type="text" className="intro" onChange={handleIntroChange} value={intro} />
                            <div className="text-wrapper-2">사진등록</div>
                            <input type="file" className="img" onChange={handleImgChange} ref={imageInputRef}/>
                            <img ref={imageRef} alt="preview" className="img-preview" src={imageUrl} />
                            <div className="text-wrapper-2">모임 위치</div>
                            <div className="zipcode-button-wrap">
                                <input type="text" className="zonecode" value={addressObj.zoneCode} placeholder="우편번호" readOnly />
                                <Post setAddressObj={setAddressObj} />
                            </div>
                            <input type="text" className="full-address" value={addressObj.fullAddress} placeholder="도로명주소" readOnly/>
                            <input type="text" className="sub-address" value={addressObj.subAddress} placeholder="상세주소" onChange={handleSubAddressChange} />
                            <div className="text-wrapper-2">정원</div>
                            <input type="text" className="capacity" onChange={handleCapacityChange} value={capacity}/>
                            <div className="text-wrapper-2">모집 마감일</div>
                            <input type="datetime-local" className="deadline" value={deadline} onChange={handleDeadlineChange}/>
                            <div className="text-wrapper-2">모임 일시</div>
                            <input type="datetime-local" className="startAt" value={startAt} onChange={handleStartAtChange} />
                            <div className="text-wrapper-2">기타안내사항</div>
                            <input type="text" className="etc" onChange={handleEtcChange} value={etc}/>
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

export default GatheringUpdate;
