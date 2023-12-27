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
    CFormTextarea
  } from '@coreui/react'
 import React from 'react'
 import { useState,useEffect } from 'react'
 import AuthAxios from "../../../../utils/axios/AuthAxios";
 
 
 const GatheringModify =  ({gatheringId, onUpdate}) => {

      const now = new Date();
      const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  
      const [image, setImage] = useState();
      const [title, setTitle] = useState();
      const [intro, setIntro] = useState();
      const [capacity, setCapacity] = useState();
      const [category, setCategory] = useState();
      const [startAt, setStartAt] = useState(localDateTime);
      const [deadline, setDeadline] = useState(localDateTime);
      const [addressObj, setAddressObj] = useState({
          zoneCode: "",
          fullAddress: "",
          subAddress: "",
      })
     const [visible, setVisible] = useState(false)

 useEffect(() => {
        console.log('[]: ', gatheringId);
        fetchGatheringData()
            .then((response) => {
                console.log(response);
            })
    }, [])

useEffect(() => {
  // 공지사항 데이터를 가져오기
  AuthAxios.get(`/api/gathering/${gatheringId}`)
      .then((response) => {
          setImage(response.data.image)
          setTitle(response.data.title);
          setIntro(response.data.intro);
          setCapacity(response.data.capacity);
          setCategory(response.data.category);
          setStartAt(response.data.startAt);
          setDeadline(response.data.deadline);
          setAddressObj(response.data.zoneCode);
          setAddressObj(prevState => ({
              ...prevState,
              fullAddress: response.data.fullAddress
          }));
          setAddressObj(prevState => ({
              ...prevState,
              subAddress: response.data.subAddress
          }));
      })
}, [gatheringId]);

const fetchGatheringData = async () => {
  try {
      const response = await AuthAxios.get(`api/gatherings/${gatheringId}`)
          .then((response) => {
              console.log(response);

          })

  } catch (error) {
      console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
  }
};


const handleImageChange = (e) => {
  const file = e.target.files[0];
  setImage(file);
}
const handleTitleChange = (e) => {
  setTitle(e.target.value);
}
const handleCapacityChange = (e) => {
  setCapacity(e.target.value);
}
const handleIntroChange = (e) => {
  setIntro(e.target.value);
}
const handleCategoryChange = (e) => {
  setCategory(e.target.value);
}
const handleStartAtChange = (e) => {
  setStartAt(e.target.value);
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

const handleUpdate = async () => {
  try {
      // 수정된 데이터를 서버에 전송
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
      formData.append('intro', intro);
      formData.append('capacity', capacity);
      formData.append('category', category);
      formData.append('startAt', startAt);
      formData.append('deadline', deadline);
      formData.append("zoneCode", addressObj.zoneCode);
      formData.append("fullAddress", addressObj.fullAddress);
      formData.append("subAddress", addressObj.subAddress);
      console.log("patch 전 gatheringId: ",gatheringId)
      await AuthAxios.patch(`api/gathering/${gatheringId}`, formData)
          .then((response) => {
              console.log(response);
              console.log("수정성공");
          })
          .catch((error) => {
              console.log(error);
              console.log("수정실패");
          })
      setVisible(false);

  } catch (error) {
      console.error('공지사항 수정 중 오류 발생:', error);
  }
  setVisible(false);
};


     return (
         <>
     <CButton onClick={() => setVisible(!visible)} style={{height:'30px',lineHeight:'5px'}}>수정</CButton>
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
   name='image' onChange={handleImageChange}
  />
  <br></br>

       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"
   value={title} name='title' onChange={handleTitleChange}
   />
        </CInputGroup>
 
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="intro"
     value={intro} name='intro' onChange={handleIntroChange}
     ></CFormTextarea>
    </CInputGroup>
 <br></br>


 
 <CInputGroup className="mb-3">
   <CInputGroupText>최대인원수</CInputGroupText>
   <CFormInput aria-label="Amount (to the nearest dollar)"
   value={capacity} name='capacity' onChange={handleCapacityChange}/>
 </CInputGroup>


 
       </CModalBody>
       <CModalFooter>
         <CButton color="secondary" onClick={() => setVisible(false)}>
           Close
         </CButton>
         <CButton color="primary" onClick={handleUpdate}>저장</CButton>
       </CModalFooter>
     </CModal>
   </>
     );
 }
 
 export default GatheringModify;