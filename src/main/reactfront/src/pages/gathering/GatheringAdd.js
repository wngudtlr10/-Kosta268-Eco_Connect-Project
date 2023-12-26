import "./GatheringAdd.css";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../../components/Post/Post";
import AuthAxios from "../../utils/axios/AuthAxios";

function GatheringAdd() {

    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");
    const [addressObj, setAddressObj] = useState({
        zoneCode: "",
        fullAddress: "",
        subAddress: "",
    });
    const [capacity, setCapacity] = useState("");
    const [etc, setEtc] = useState("");
    const now = new Date();
    const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const [deadline, setDeadline] = useState(localDateTime);
    const [startAt, setStartAt] = useState(localDateTime)
    const [memberId, setMemberId] = useState();
    const navigate = useNavigate();

    const imageInputRef = useRef();
    const imageRef = useRef();

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
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
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

    const handleCapacityChange = (e) => {
        setCapacity(e.target.value)
    }

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const handleStartAtChange = (e) => {
        setStartAt(e.target.value);
    }

    const handleEtcChange = (e) => {
        setEtc(e.target.value);
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('creatorId', memberId);
        formData.append("title", title);
        formData.append("intro", intro);
        formData.append("category", category)
        formData.append("image", image);
        formData.append("zoneCode", addressObj.zoneCode);
        formData.append("fullAddress", addressObj.fullAddress);
        formData.append("subAddress", addressObj.subAddress);
        formData.append("capacity", capacity);
        formData.append("deadline", deadline);
        formData.append("startAt", startAt);
        formData.append("etc", etc);

        const response = await AuthAxios.post('/api/gathering', formData, config)
            // const response = await axios.post('http://localhost:8080/api/gathering', formData, config)
            .then((response) => {
                console.log("success");
                console.log(response)
                navigate('/gathering');
            })
            .catch((error) => {
                console.log("fail");
                console.log(error);
            })

    }

    useEffect(() => {
        fetchMember();
    }, [])

    return (
        <div className="gathering-add-index">
            <div className="add-wrap-wrapper">
                <div className="add-wrap">
                    <div className="gathering-add-form-wrap">
                        <div className="gathering-add-text">봉사모임 작성</div>
                        <form className="gathering-add-form" method="post">
                            <div className="form-title">모임제목</div>
                            <input type="text" className="title" onChange={handleTitleChange} />
                            <div className="text-wrapper-2">모임소개</div>
                            <input type="text" className="intro" onChange={handleIntroChange} />
                            <div className="text-wrapper-2">카테고리</div>
                            <select className="category" onChange={handleCategoryChange}>
                                <option value="">선택하세요</option>
                                <option value="CLEAN_UP">환경 미화</option>
                                <option value="TALENT_DONATION">재능 기부</option>
                                <option value="SPONSORSHIP">후원</option>                                <option value="CLEAN_UP">청소</option>
                            </select>
                            <div className="text-wrapper-2">사진등록</div>
                            <input type="file" className="img" onChange={handleImgChange} ref={imageInputRef}/>
                            <img ref={imageRef} alt="preview" className="img-preview" />
                            <div className="text-wrapper-2">모임 위치</div>
                            <div className="zipcode-button-wrap">
                                <input type="text" className="zonecode" value={addressObj.zoneCode} placeholder="우편번호" readOnly />
                                <Post setAddressObj={setAddressObj}/>
                            </div>
                            <input type="text" className="full-address" value={addressObj.fullAddress} placeholder="도로명주소"  readOnly/>
                            <input type="text" className="sub-address" value={addressObj.subAddress} placeholder="상세주소" onChange={handleSubAddressChange} />
                            <div className="text-wrapper-2">정원</div>
                            <input type="text" className="capacity" onChange={handleCapacityChange}/>
                            <div className="text-wrapper-2">모집 마감일</div>
                            <input type="datetime-local" className="deadline" value={deadline} onChange={handleDeadlineChange}/>
                            <div className="text-wrapper-2">모임 일시</div>
                            <input type="datetime-local" className="startAt" value={startAt} onChange={handleStartAtChange} />
                            <div className="text-wrapper-2">기타안내사항</div>
                            <input type="text" className="etc" onChange={handleEtcChange}/>
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

export default GatheringAdd;
