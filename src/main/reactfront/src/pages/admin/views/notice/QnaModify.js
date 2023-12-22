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
 import React from 'react'
 import { useState, useEffect} from 'react'
 import axios from 'axios'
 
 
 const QnaModify =  ({qnaId, onUpdate}) => {
     const [visible, setVisible] = useState(false)
     const [formData, setFormData] = useState({
      title: '', 
      content: '', 
      image: '',
      category: '',
      content2: '',
      status: false,
      modify_at: new Date().toISOString().split('T')[0],
 });

 useEffect(() => {
  // 공지사항 데이터를 가져오기
  fetchQnaData();
}, [qnaId]);

const fetchQnaData = async () => {
  try {
    // 서버에서 공지사항 데이터 가져오기
    const response = await axios.get(`http://localhost:8080/api/qna/${qnaId}`);
    // 이전 값으로 초기화
    setFormData({
      title: response.data.title || '',     // 이전 값이 없으면 빈 문자열
      content: response.data.content || '',
      image: response.data.image || '', // 이전 값이 없으면 빈 문자열
      content2: response.data.content2 || '', // 이전 값이 없으면 빈 문자열
      status: response.data.status || false,
      category: response.data.category || '', // 이전 값이 없으면 빈 문자열
      modify_at: new Date().toISOString().split('T')[0], 
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
    await axios.put(`http://localhost:8080/api/qna/${qnaId}`, formData);
   
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

      
  <CFormInput type="file" id="formFile" label="이미지" accept='image/*' 
      value={formData.image} name='image' onChange={handleInputChange}
  />
  <br></br>

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

 <CFormSelect 
  aria-label="Default select example"
  options={[
    '카테고리',
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3'}
  ]}
  name='category'
  value={formData.category}
  onChange={handleInputChange}
/>
<br></br>

<CInputGroup>
     <CInputGroupText>답변</CInputGroupText>
     <CFormTextarea aria-label="content" name='content2' value={formData.content2} onChange={handleInputChange}></CFormTextarea>
    </CInputGroup>
    <br></br>
    <CFormSelect 
  aria-label="Default select example"
  options={[
    '답변여부',
    { label: '대기중', value: '0' },
    { label: '확인중', value: '1' },
    { label: '답변완료', value: '2'}
  ]}
  name='status'
  value={formData.status}
  onChange={handleInputChange}
/>
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
 
 export default QnaModify;