
import React, {useEffect, useState} from "react";
import axios from "axios";
import moment from 'moment';
import Layout from "../../components/Layout/Layout";
import "./FundingView.css";


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


    return (
        <Layout>
            <div className="screen">
                <div className="div">
                </div>
            </div>
            <div className="funding-detail-image">
                <imgae src="../"></imgae>
            </div>
            <div>
                <h1>Funding Detail</h1>
                <ul>
                    {fundings.map(funding => (
                        <li key={funding.id}>
                            <div>1. Title: {funding.title}</div>
                            <div>2. Author: {funding.autour}</div>
                            <div>3. Category ID: {funding.category_id}</div>
                            <div>4. Status: {funding.status}</div>
                            <div>5. Content: {funding.content}</div>
                            <div>6. Created At: {formatDate(funding.create_at).toLocaleString()}</div>
                            <div>7. End At: {formatDate(funding.end_at).toLocaleString()}</div>
                            <div>8. Likes: {funding.likes}</div>
                            <div>9. Modified At: {formatDate(funding.modify_at).toLocaleString()}</div>
                            <div>10. Start At: {formatDate(funding.start_at).toLocaleString()}</div>
                            <br/>
                            <br/>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}

export default FundingDetail




