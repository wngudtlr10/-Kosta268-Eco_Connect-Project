import React, {useEffect, useState} from "react";
import AuthAxios from "../../../../utils/axios/AuthAxios";
import {
    CButton,
    CFormInput, CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CModal,
    CModalBody, CModalFooter,
    CModalHeader,
    CModalTitle
} from "@coreui/react";

const GifticonAdd = ({ onUpdate }) => {
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [remains, setRemains] = useState();
    const [barcode, setBarcode] = useState();
    const [image, setImage] = useState();

    const fetchGifticons = () => {
        AuthAxios.get(`/api/gifticons`)
            .then((response) => {
                onUpdate();
            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            })
    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const handleRemainsChange = (e) => {
        setRemains(e.target.value);
    }
    const handleBarcodeChange = (e) => {
        const file = e.target.files[0];
        // setBarcode(URL.createObjectURL(file));

        setBarcode(file);
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        // setImage(URL.createObjectURL(file));
        setImage(file);
    }

    const handleCreate = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("remains", remains);
            formData.append("barcode", barcode);
            formData.append("image", image);
            await AuthAxios.post(`/api/gifticons`, formData)
                .then((response) => {
                    console.log("success update");
                    fetchGifticons();
                })
                .catch((error) => {
                    console.log(error);
                })
            setVisible(false);
        } catch (error) {
            console.log(error);
        }
        setVisible(false);
    }


    return (
        <>
            <CButton onClick={() => setVisible(!visible)} style={{ height: '30px', lineHeight: '5px' }}>등록</CButton>
            <CModal
                backdrop='static'
                alignment="center"
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredScrollableExample"
            >
                <CModalHeader>
                    <CModalTitle id="VerticallyCenteredScrollableExample">등록</CModalTitle>
                </CModalHeader>
                <CModalBody>

                    <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">이름</CInputGroupText>
                        <CFormInput aria-label="name" aria-describedby="basic-addon1"
                                    value={name} name='name' onChange={handleNameChange} />

                    </CInputGroup>

                    <CInputGroup>
                        <CInputGroupText>가격</CInputGroupText>
                        <CFormTextarea aria-label="price"
                                       value={price} name='price' onChange={handlePriceChange}></CFormTextarea>
                    </CInputGroup>
                    <br></br>


                    <CInputGroup className="mb-3">
                        <CInputGroupText>남은 수량</CInputGroupText>
                        <CFormInput aria-label="remains"
                                    value={remains} name='remains' onChange={handleRemainsChange} />
                    </CInputGroup>

                    <CFormInput type="file" id="formFile" label="바코드" accept='image/*'
                                name='barcode'  onChange={handleBarcodeChange}
                    />
                    <br></br>

                    <CFormInput type="file" id="formFile" label="이미지" accept='image/*'
                                name='image'  onChange={handleImageChange}
                    />
                    <br></br>


                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                        Close
                    </CButton>
                    <CButton color="primary" onClick={handleCreate}>저장</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default GifticonAdd;