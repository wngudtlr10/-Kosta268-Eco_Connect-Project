import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import Layout from "../../components/Layout/Layout";
import "./FundingView.css";
import './FundingDetail.css'
import FundingDetailIntro from "../../components/Card/FundingDetailIntro";


const FundingDetail = () => {
    const BASE_IMAGE_PATH = "../../assets/images/funding/view/";

    const [fundings, setFundings] = useState([]);

    useEffect(() => {
        const fetchFundings = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/funding');
                setFundings(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchFundings();
    }, []);


    const formatDate = (dateString) => {
        // Using moment.js for robust date parsing
        return moment(dateString).isValid() ? moment(dateString).format('YYYY-MM-DD HH:mm:ss') : 'Unavailable';
    };

    let listItemStyle = {
        margin: "50px",
        backgroundColor: "#ec8989",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "bold",
    };

    return (
        <Layout>
            <div className="screen">
                <div className="div">
                </div>
            </div>
            <div className="funding-detail-image">
                <img src="../"></img> {/* 수정: <img> 태그로 바꿨습니다 */}
            </div>
            {/* <div className="funding-intro-box">
                <div className="funding-intro-title">프로젝트 스토리</div>
                <div className="funding-intro-image-wrap"><img className="funding-intro-image" src="https://i.postimg.cc/5Nnzzjvy/Funding-intro.png"></img></div>
             </div> */}
              <div className="intro-warp">
              <FundingDetailIntro  />
              </div>
                            <div>
                                <h1 style={{ textAlign: "center" }}>Funding Detail</h1>
                                <ul>
                                    {fundings.map(funding => (
                                        <li key={funding.id} style={listItemStyle}>
                                            <div>1. 제목: {funding.title}</div>
                                            <div>2. 저자: {funding.author}</div>
                                            <div>3. 카테고리 ID: {funding.fundingCategoryId} </div>
                                            <div>4. 상태: {funding.status}</div>
                                            <div>5. 내용: {funding.content}</div>
                                            <div>6. 생성 날짜: {formatDate(funding.createdAt).toLocaleString()}</div>
                                            <div>7. 종료 날짜: {formatDate(funding.endAt).toLocaleString()}</div>
                                            <div>8. 좋아요: {funding.likes}</div>
                                            <div>9. 수정 날짜: {formatDate(funding.modify_at).toLocaleString()}</div>
                                            <div>10. 시작 날짜: {formatDate(funding.startAt).toLocaleString()}</div>
                                            <br />
                                            <br />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Layout>
                        );
}

                        export default FundingDetail
