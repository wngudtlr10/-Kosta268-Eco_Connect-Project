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
 import axios from 'axios'
 import { useState} from 'react'
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";
 
 const MissionAdd =  ({onUpdate}) => {
     const [visible, setVisible] = useState(false)
     const [formData, setFormData] = useState({
        content : '',
        created_at: new Date().toISOString().split('T')[0],
        image :'',
        point :'',
        status: '',
        title: '',
         });
         const [startDate, setStartDate] = useState(new Date());
         const [endDate, setEndDate] = useState(new Date());



         const handleCreate = async (e) => {
            e.preventDefault();
        
            try {
              // 서버에 데이터 전송
              await axios.post('http://localhost:8080/api/mission', formData);
              // 페이지 이동 또는 다른 작업 수행
              setVisible(false);
              onUpdate();
             
            } catch (error) {
              console.error('데이터 전송 중 오류 발생:', error);
            }
            setVisible(false);
          };

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

     return (
         <>
     <CButton onClick={() => setVisible(!visible)} style={{height:'30px',lineHeight:'5px',color:'white'}} color='success'>미션등록</CButton>
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
  value={formData.file} name='image' onChange={handleInputChange}
  />
  <br></br>

       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"
   value={formData.title} name='title' onChange={handleInputChange}/>
        </CInputGroup>
 
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="content"
     value={formData.content} name='content' onChange={handleInputChange}></CFormTextarea>
    </CInputGroup>
 <br></br>


 <CInputGroup className="mb-3">
   <CInputGroupText>제공 포인트</CInputGroupText>
   <CFormInput aria-label="Amount (to the nearest dollar)"
   value={formData.point} name='point' onChange={handleInputChange}/>
 </CInputGroup>

 <CFormSwitch size="xl" label="미션 활성화" id="mission_status"
 value={formData.status} name='status' onChange={handleInputChange}/>


<DatePicker
  selected={startDate}
  onChange={(date) => {
    setStartDate(date); // 선택된 날짜를 startDate에 업데이트
    handleInputChange({ target: { name: 'start', value: date } }); // formData 업데이트
  }}
/>


 <br></br>
 <br></br>
 <DatePicker
  selected={endDate}
  onChange={(date) => {
    setEndDate(date); // 선택된 날짜를 endDate에 업데이트
    handleInputChange({ target: { name: 'end', value: date } }); // formData 업데이트
  }}
/>
 
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