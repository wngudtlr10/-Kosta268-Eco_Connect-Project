import React from 'react';
import { useState, useEffect } from 'react';
import { CButton,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle   
} from '@coreui/react';
import AuthAxios from "../../utils/axios/AuthAxios";
const AwardAlter = (gifticonId) => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const id = gifticonId.gifticonId;
    const [gifticon, setGifticon] = useState();
    const fetchGifticon = () => {
        AuthAxios.get(`/api/gifticons/${id}`)
            .then((response) => {
                setGifticon(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data API: ', error);
            })
    }
    const buyGifticon = () => {
        AuthAxios.post(`/api/member/gifticon/${id}?quantity=1`)
            .then((response) => {
                console.log(response);
                setVisible(false);
                setVisible2(true);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchGifticon();
    }, [])

    return (
        <>
            <CButton onClick={() => {setVisible(!visible); buyGifticon(gifticonId)} } color='success' style={{color:'white',margin:"0 auto",width:'200px'}}>교환하기</CButton>
            <CModal
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="ToggleBetweenModalsExample1"
            >
                <CModalHeader>
                    <CModalTitle id="ToggleBetweenModalsExample1">기프티콘 교환</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <p>정말 교환하시겠습니까? 확인을 누르시면 포인트가 차감될 예정입니다</p>
                </CModalBody>
                <CModalFooter>
                <CButton
                        color="secondary"
                        onClick={() => {
                            setVisible(false)
                            
                        }}
                    >
                        취소
                    </CButton>
                    <CButton
                        color="primary"
                        onClick={() => {
                            setVisible(false)
                            setVisible2(true)
                        }}
                    >
                        확인
                    </CButton>
                </CModalFooter>
            </CModal>
            <CModal
                visible={visible2}
                onClick={() => {
                    setVisible(false)
                    setVisible2(false)
                }}
                aria-labelledby="ToggleBetweenModalsExample2"
            >
                <CModalHeader>
                    <CModalTitle id="ToggleBetweenModalsExample2">교환완료~~!</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <img src={gifticon ? gifticon.barcode : "https://i.postimg.cc/FFn4TGDn/1hDxo.jpg"} />
                    <p>  교환이 완료되었습니다! 교환하신 고객님께 빠른시일내에 발송 <br/>될 예정이며 발송이 되지 않았다면 고객센터에 문의하시기 바랍니다!</p>
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="primary"
                        onClick={() => {
                            setVisible2(false)
                        }}
                    >
                        확인
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
}

export default AwardAlter;