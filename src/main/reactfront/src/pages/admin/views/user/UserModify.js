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
   CFormSelect,
   CFormTextarea
 } from '@coreui/react'
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'


const UserModify =  ({userId, onUpdate}) => {
    const [visible, setVisible] = useState(false)
    const [formData, setFormData] = useState({
      name: '', 
      address: '', 
      image: '',
      email: '',
      isadmin: '',
      point: '',
 });

 useEffect(() => {
  // 공지사항 데이터를 가져오기
  fetchUserData();
}, [userId]);

const fetchUserData = async () => {
  try {
    // 서버에서 공지사항 데이터 가져오기
    const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
    // 이전 값으로 초기화
    setFormData({
      name: response.data.name || '',     // 이전 값이 없으면 빈 문자열
      address: response.data.address || '',
      profile: response.data.profile || '', // 이전 값이 없으면 빈 문자열
      email: response.data.email || '', // 이전 값이 없으면 빈 문자열
      isadmin: response.data.isadmin || '',
      point: response.data.point || '', // 이전 값이 없으면 빈 문자열
      profile: response.data.profile || '', // 이전 값이 없으면 빈 문자열
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
    await axios.put(`http://localhost:8080/api/users/${userId}`, formData);
   
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
      value={formData.file} name='profile' onChange={handleInputChange}
  />
<br></br>
      <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">이름</CInputGroupText>
  <CFormInput aria-label="Username" aria-describedby="basic-addon1"
   value={formData.name} name='name' onChange={handleInputChange}/>
</CInputGroup>

<CInputGroup className="mb-3">
  <CFormInput  aria-label="Recipient's username" aria-describedby="basic-addon2"
  value={formData.address} name='address' onChange={handleInputChange}/>
  <CInputGroupText id="basic-addon2"
   >주소</CInputGroupText>
</CInputGroup>

<CInputGroup className="mb-3">
  <CFormInput placeholder="이메일" aria-label="Username"
   value={formData.email} name='email' onChange={handleInputChange}/>
</CInputGroup>

<CFormSelect 
  aria-label="Role"
  options={[
    '-',
    { label: '유저', value: 'false' },
    { label: '관리자', value: 'true' },
  ]}
  value={formData.isadmin} name='isadmin' onChange={handleInputChange}
/>
<br></br>
<CInputGroup className="mb-3">
  <CInputGroupText>포인트</CInputGroupText>
  <CFormInput aria-label="Amount (to the nearest dollar)"
   value={formData.point} name='point' onChange={handleInputChange}/>
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

export default UserModify;