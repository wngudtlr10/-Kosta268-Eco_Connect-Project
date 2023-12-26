import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const FundingDelete = () => {
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
        <div>
            <h1>Funding List</h1>
            <ul>
                {fundings.map(funding => (
                    <li key={funding.id}>
                        <div>Title: {funding.title}</div>
                        <div>Author: {funding.autour}</div>
                        <div>Category ID: {funding.category_id}</div>
                        <div>Status: {funding.status}</div>
                        <div>Content: {funding.content}</div>
                        <div>Created At: {formatDate(funding.create_at).toLocaleString()}</div>
                        <div>End At: {formatDate(funding.end_at).toLocaleString()}</div>
                        <div>Likes: {funding.likes}</div>
                        <div>Modified At: {formatDate(funding.modify_at).toLocaleString()}</div>
                        <div>Start At: {formatDate(funding.start_at).toLocaleString()}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FundingDelete;
