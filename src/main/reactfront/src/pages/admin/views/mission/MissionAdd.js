import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle,
    CButton,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CFormSwitch,
    CFormTextarea,
    CFormSelect
  } from '@coreui/react'
import AuthAxios from "../../../../utils/axios/AuthAxios";
import { useState} from 'react'
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "../../../../components/Post/Post";
const MissionAdd = ({ onUpdate }) => {
    const [visible, setVisible] = useState(false)
    const now = new Date();
    const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [point, setPoint] = useState();
    const [host, setHost] = useState();
    const [category, setCategory] = useState();
    const [startAt, setStartAt] = useState(localDateTime);
    const [endAt, setEndAt] = useState(localDateTime);
    const [deadline, setDeadline] = useState(localDateTime);
    const [addressObj, setAddressObj] = useState({
        zoneCode: "",
        fullAddress: "",
        subAddress: "",
    })

    const handleCreate = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('point', point);
            formData.append('host', host);
            formData.append('category', category);
            formData.append('startAt', startAt);
            formData.append('endAt', endAt);
            formData.append('deadline', deadline);
            formData.append("zoneCode", addressObj.zoneCode);
            formData.append("fullAddress", addressObj.fullAddress);
            formData.append("subAddress", addressObj.subAddress);

            await AuthAxios.post('/api/missions', formData)
                .then((response) => {
                    console.log("success");
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
            setVisible(false);
            onUpdate();

        } catch (error) {
            console.error('데이터 전송 중 오류 발생:', error);
        }
        setVisible(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }
    const handlePointChange = (e) => {
        setPoint(e.target.value);
    }
    const handleHostChange = (e) => {
        setHost(e.target.value);
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }
    const handleStartAtChange = (e) => {
        setStartAt(e.target.value);
    }
    const handleEndAtChange = (e) => {
        setEndAt(e.target.value);
    }
    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }
    const handleSubAddressChange = (e) => {
        setAddressObj(prevState => ({
            ...prevState,
            subAddress: e.target.value
        }));
    };

    return (
        <>
            <CButton onClick={() => setVisible(!visible)} style={{ height: '30px', lineHeight: '5px', color: 'white' }} color='success'>미션등록</CButton>
            <CModal
                backdrop='static'
                alignment="center"
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredScrollableExample"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredScrollableExample">수정</CModalTitle>
                </CModalHeader>
                <CModalBody>


                    <CFormInput type="file" id="formFile" label="이미지" accept='image/*'
                                name='image'  onChange={handleImageChange}
                    />
                    <br></br>

                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">제목</CInputGroupText>
                        <CFormInput aria-label="title" aria-describedby="basic-addon1"
                                    value={title} name='title' onChange={handleTitleChange} />
                    </CInputGroup>

                    <CInputGroup>
                        <CInputGroupText>내용</CInputGroupText>
                        <CFormTextarea aria-label="content"
                                       value={description} name='description' onChange={handleDescriptionChange}></CFormTextarea>
                    </CInputGroup>
                    <br></br>


                    <CInputGroup className="mb-3">
                        <CInputGroupText>제공 포인트</CInputGroupText>
                        <CFormInput aria-label="point"
                                    value={point} name='point' onChange={handlePointChange} />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                        <CInputGroupText>주최자</CInputGroupText>
                        <CFormInput aria-label="host"
                                    value={host} name='host' onChange={handleHostChange} />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                        <CInputGroupText>키테고리</CInputGroupText>
                        <CFormSelect aria-label="category" options={[
                            '카테고리를 선택하세요',
                            { label: "활동형", value: "활동형" },
                            { label: "참여형", value: "참여형" },
                            { label: "도전형", value: "도전형" }
                        ]}
                                     value={category} name='category' onChange={handleCategoryChange} />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                        <CInputGroupText>시작일시</CInputGroupText>
                        <CFormInput type="datetime-local" aria-label="startAt"
                                    value={startAt} name='startAt' onChange={handleStartAtChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>종료일시</CInputGroupText>
                        <CFormInput type="datetime-local" aria-label="endAt"
                                    value={endAt} name='endAt' onChange={handleEndAtChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>마감일자</CInputGroupText>
                        <CFormInput type="datetime-local" aria-label="deadline"
                                    value={deadline} name='deadline' onChange={handleDeadlineChange} />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                        <CInputGroupText>우편번호</CInputGroupText>
                        <CFormInput value={addressObj.zoneCode} name="zonecode" placeholder="우편번호" readOnly />
                        <Post setAddressObj={setAddressObj} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>도로명 주소</CInputGroupText>
                        <CFormInput name="full-address" value={addressObj.fullAddress} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>상세 주소</CInputGroupText>
                        <CFormInput name="sub-address" value={addressObj.subAddress} onChange={handleSubAddressChange} />
                    </CInputGroup>



                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={handleCreate}>저장</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default MissionAdd;