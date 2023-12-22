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
 import { useState, useEffect } from 'react'
 import axios from 'axios'
 
 
 const FnaModify =  ({faqId , onUpdate}) => {
     const [visible, setVisible] = useState(false)
     const [formData, setFormData] = useState({
      title: '', 
      content: '', 
 });

 useEffect(() => {
  // 공지사항 데이터를 가져오기
  fetchFaqData();
}, [faqId]);

const fetchFaqData = async () => {
  try {
    // 서버에서 공지사항 데이터 가져오기
    const response = await axios.get(`http://localhost:8080/api/faq/${faqId}`);
    // 이전 값으로 초기화
    setFormData({
      title: response.data.title || '',     // 이전 값이 없으면 빈 문자열
      content: response.data.content || '',
      image: response.data.image || '', // 이전 값이 없으면 빈 문자열
      content2: response.data.content2 || '', // 이전 값이 없으면 빈 문자열
      status: response.data.status || '',
      category: response.data.category || '', // 이전 값이 없으면 빈 문자열
    });
  } catch (error) {
    console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
  }
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleUpdate = async () => {
  try {
    // 수정된 데이터를 서버에 전송
    await axios.put(`http://localhost:8080/api/faq/${faqId}`, formData);
   
    onUpdate();
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

      
 


       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"
       name='title' onChange={handleInputChange} value={formData.title}
   />
        </CInputGroup>
 
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="content"
       name='content'
       value={formData.content}
       onChange={handleInputChange}
     ></CFormTextarea>
    </CInputGroup>
 <br></br>


 

 
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
 
 export default FnaModify;