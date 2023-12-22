import {
    CButton,
    CFormSelect
  } from '@coreui/react'
 import React from 'react'
 import axios from 'axios'
 import { useState, useEffect } from 'react'
 
 
 const MissionUserSubmit =  ({muId, onUpdate}) => {
     const [formData, setFormData] = useState({
      status: '',
 });
 

const handleUpdate = async () => {
  try {
    // 수정된 데이터를 서버에 전송
    await axios.put(`http://localhost:8080/api/mission/user/${muId}`, formData);
    console.log('Updating with formData:', formData);
    onUpdate();
  } catch (error) {
    console.error('공지사항 수정 중 오류 발생:', error);
  }
};

useEffect(() => {
  // 공지사항 데이터를 가져오기
  fetchMissionUserData();
}, [muId]);

const fetchMissionUserData = async () => {
  try {
    // 서버에서 공지사항 데이터 가져오기
    const response = await axios.get(`http://localhost:8080/api/mission/user/${muId}`);
    // 이전 값으로 초기화
    setFormData({
      status: response.data.status || ''
    });
  } catch (error) {
    console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
  }
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  console.log('Input changed:', name, value);
  setFormData({ ...formData, [name]: value });
};

     return (
         <>
     <CFormSelect 
     onChange={handleInputChange}
     name="status"
   aria-label="Default select example"
   options={[
    'Open this select menu',
    { label: '수락대기중', value: "0"},
    { label: '수락', value: '1' },
    { label: '보류', value: '2' }
  ]}
  value={formData.status}
/>
<br></br>
     <CButton onClick={handleUpdate} style={{height:'30px',lineHeight:'5px'}} >수정</CButton>
   </>
     );
 }
 
 export default MissionUserSubmit;