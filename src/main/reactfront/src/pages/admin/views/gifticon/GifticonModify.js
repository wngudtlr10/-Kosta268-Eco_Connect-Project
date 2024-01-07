import React, {useEffect, useState} from "react";
import AuthAxios from "../../../../utils/axios/AuthAxios";
import {
    CButton,
    CFormInput, CFormSelect, CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CModal,
    CModalBody, CModalFooter,
    CModalHeader,
    CModalTitle
} from "@coreui/react";
import Post from "../../../../components/Post/Post";

const GifticonModify = ({gifticonId, onUpdate}) => {
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [remains, setRemains] = useState();
    const [barcode, setBarcode] = useState();
    const [image, setImage] = useState();

    const fetchGifticon = async () => {
        const response = await AuthAxios.get(`/api/gifticons/${gifticonId}`)
            .then((response) => {
                console.log(response);
                setName(response.data.name);
                setPrice(response.data.price);
                setRemains(response.data.remains);
                setBarcode(response.data.barcode);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePriceChange = (e) => {
        setName(e.target.value);
    }
    const handleRemainsChange = (e) => {
        setName(e.target.value);
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

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("price", price);
            formData.append("remains", remains);
            formData.append("barcode", barcode);
            formData.append("image", image);
            await AuthAxios.patch(`/api/gifticons/${gifticonId}`, formData)
                .then((response) => {
                    console.log("success update");
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

    useEffect(() => {
        fetchGifticon();
    }, []);

    useEffect(() => {
        fetchGifticon();
    }, [gifticonId])

    return (
        <>
            <CButton onClick={() => setVisible(!visible)} style={{ height: '30px', lineHeight: '5px' }}>수정</CButton>
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
                    {barcode && <img src={barcode} alt="기존 바코드" style={{width: '100px', height: '100px'}}/>}
                    <br></br>

                    <CFormInput type="file" id="formFile" label="이미지" accept='image/*'
                                name='image'  onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="기존 이미지" style={{width: '100px', height: '100px'}}/>}
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
    )
}

export default GifticonModify;
