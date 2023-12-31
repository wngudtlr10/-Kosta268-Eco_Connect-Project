import React, {useEffect, useState, forwardRef} from "react";
import {useForm, Controller} from 'react-hook-form';
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import { useNavigate } from 'react-router-dom';


import DatePicker from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import "./FundingWrite.css";
import 'react-datepicker/dist/react-datepicker.css';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    InputGroup
    // InputGroup,
    // FormControl
} from "react-bootstrap";


const errorMsg = {
    'empty': '메일 주소를 입력해주세요',
    'exist_email': '이미 등록된 메일입니다. 다른 메일을 입력해주세요',
}

export const FundingWrite = () => {
    const BASE_IMAGE_PATH = "../../assets/images/funding/view/";
    const BASE_FUNDING_API_URL = "http://localhost:8080/api/funding"
    const navigate = useNavigate();
    const {control, handleSubmit, setError, clearErrors, formState: {errors}} = useForm();
    const [user, setUser] = useState({name: '', email: '', password: ''})
    const [startDate, setStartDate] = useState(new Date());

    const [submissionError, setSubmissionError] = useState('');
    const [validated, setValidated] = useState(false);
    const [resultMessage, setResultMessage] = useState({code: "200", message: "ok"})
    const [isValid, setIsValid] = useState(false);
    const [errorMail, setErrorMail] = useState(errorMsg.empty);
    const [endAt, setEndAt] = useState(new Date());
    // 파일 데이터 비동기 전송
    const formData = new FormData();
    // const contentsData = {
    //     userNo: user.userInfo.no,
    //     title,
    //     content,
    //     categoryCode,
    //     dues,
    //     personNumber
    // }
    // const fileData = inputRef.current.file.files;

    // for(let i = 0; i < fileData.length; i++) {
    //     formData.append("file", fileData[i]);
    // }
    //
    // formData.append("contentsData", new Blob([JSON.stringify(contentsData)], { type: "application/json" }));


    const ExampleCustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    function handleTitle(e) {
        console.log(e.target.value);
        setUser({...user, name: e.target.value})
    }

    const validateTitle = (value) => {
        if (!value || value.trim() === '') {
            setError("title", {type: "manual", message: "제목을 입력해주세요."});
            return false;
        } else if (value.length < 5) {
            setError("title", {type: "manual", message: "제목은 최소 5글자 이상이어야 합니다."});
            return false;
        }
        clearErrors("title");
        return true;
    };

    const onSubmit = async data => {
        const fundingData = {

            title: data.title,
            author: data.author,
            content: data.content,
            startAt: startDate,
            endAt: endAt,
            stockCount: data.stockCount,
            price: data.price,
            fundingCategoryId: data.fundingCategoryId,
            totalCollectedAmount: data.totalCollectedAmount
        };


        try {
            const response = await axios.post(BASE_FUNDING_API_URL+'/write', fundingData);
            if (response.status == 200) {
                console.log("펀딩 생성에 성공했습니다.");
                alert("펀딩 생성 성공");
                navigate('/funding/details');//
            }
        } catch (error) {
            setSubmissionError('Error submitting form');
            console.error('Error sending data', error);
        }
    };


    return (
        // <Formik
        //     validationSchema={schema}
        //     onSubmit={console.log}
        //     initialValues={{
        //         firstName: 'Mark',
        //         lastName: 'Otto',
        //         username: '',
        //         city: '',
        //         state: '',
        //         zip: '',
        //         terms: false,
        //     }}
        // >

        <Layout>
            <Carousel></Carousel>
            {/* sidebar */}
            {/*<Sidebar>*/}
            {/*    <Menu*/}
            {/*        menuItemStyles={{*/}
            {/*            button: {*/}
            {/*                // the active class will be added automatically by react router*/}
            {/*                // so we can use it to style the active menu item*/}
            {/*                [`&.active`]: {*/}
            {/*                    backgroundColor: '#13395e',*/}
            {/*                    color: '#b6c8d9',*/}
            {/*                },*/}
            {/*            },*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <MenuItem component={<Link to="/documentation"/>}> Documentation</MenuItem>*/}
            {/*        <MenuItem component={<Link to="/calendar"/>}> Calendar</MenuItem>*/}
            {/*        <MenuItem component={<Link to="/e-commerce"/>}> E-commerce</MenuItem>*/}
            {/*    </Menu>*/}
            {/*</Sidebar>*/}
            <div className="screen">
                <div className="div">
                    <div className="input-group">
                    </div>
                </div>
            </div>

            <div className="div-container">
                <h1> 🌍프로젝트 정보🌍 </h1>
                <p>프로젝트 관리 > 프로젝트 정보</p>
            </div>

            {/*  펀딩 생성 폼 컨테이너 */}
            <Container className="my-4">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>😂펀딩 카테고리😂</Form.Label>
                            <Form.Select>
                                <option>식품</option>
                                <option>의류</option>
                                <option>생활용품</option>
                                <option>기타</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" size="lg">
                            <Form.Label>✅제목✅</Form.Label>
                            <Form.Control
                                onChange={handleTitle}
                                name="title"
                                type="text"
                                placeholder="제목을 입력해주세요"
                                minLength="5"
                                maxLength="30"
                                required

                            />
                            <Form.Control.Feedback type="invalid" className={"float-left"}>
                                제목을 입력해주세요!(최소 5글자)
                            </Form.Control.Feedback>

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" size="lg">
                            <Form.Label>😀작성자😀</Form.Label>
                            <Form.Control
                                name="author"
                                type="text"
                                placeholder="작성자"
                                aria-label="Disabled input example"
                                readOnly
                            />
                            {/*{errors.email && (*/}
                            {/*    <Form.Text className="text-danger">*/}
                            {/*        {errors.email.message}*/}
                            {/*    </Form.Text>*/}
                            {/*)}*/}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="pay">
                            <Form.Label>💰재고 수량💰</Form.Label>
                            <Form.Control
                                name="inventory"
                                type="text"
                                placeholder="100개"
                                minLength="1"
                                maxLength="3"
                                required
                            />
                            <p>원</p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="pay">
                            <Form.Label>💰1개당 금액💰</Form.Label>
                            <Form.Control
                                name="amount"
                                type="text"
                                placeholder="15000"
                                minLength="1"
                                maxLength="6"
                                required
                            />
                            <p>원</p>
                            <Form.Control.Feedback type="invalid" className={"float-left"}>
                                금액을 입력해주세요!(최소 1000원)
                            </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="pay">
                            <Form.Label>💰목표 금액💰</Form.Label>
                            <Form.Control
                                name="targetamount"
                                type="text"
                                placeholder="15000*100=1500000원"
                                minLength="1"
                                maxLength="10"
                            />
                            <p>원</p>
                        </Form.Group>

                        {/* 펀딩 제품 설명 */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>💬펀딩제품 상세설명💬</Form.Label>
                            <Form.Control
                                name="content"
                                type="textarea"
                                placeholder="펀딩 제품을 상세히 설명해 주세요"
                                as="textarea"
                                rows={13}
                                minLength="10"
                                maxLength="255"
                                required
                            />
                            <Form.Control.Feedback type="invalid" className={"float-left"}>
                                제품설명을 입력해주세요!(최소 10글자)
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/* 펀딩 마감일 */}
                        <Form.Group className="mb-3" controlId="pay">
                            <Form.Label>⏰펀딩 마감일⏰ ▶️▶️▶️</Form.Label>
                            <DatePicker
                                locale={ko}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy년 MM월 dd일"
                                customInput={<ExampleCustomInput/>}
                            />
                            <p>* 프로젝트 펀딩 시작일은 프로젝트 생성시간입니다. *</p>
                        </Form.Group>

                        다중 파일 업로드
                        <Form.Group controlId="formFileMultiple" className="mb-3" onEncrypted="multipart/form-data">
                            <Form.Label>📑Multiple files input example📑</Form.Label>
                            <Form.Control
                                type="file"
                                multiple
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                // onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                                id="validationFormik0"
                            />
                        </Form.Group>

                        {/* 펀딩 생성 버튼 */}
                        <Button variant="primary" type="submit">
                           펀딩 수정
                        </Button>
                        <Button variant="primary" type="submit">
                           펀딩 삭제
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </Layout>

    );
};

export default FundingWrite;
