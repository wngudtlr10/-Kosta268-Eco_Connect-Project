import React, {useEffect, useState} from "react";
import {useForm, Controller} from 'react-hook-form';
import Axios from "axios";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import AdbIcon from "@mui/icons-material/Adb";
import {TextField} from "@mui/material";
import "./FundingWrite.css";

export const FundingWrite = () => {
        const BASE_IMAGE_PATH = "../../assets/images/funding/view/";

        return (
            <Layout>
                <Carousel></Carousel>
                <div className="screen">
                    <div className="div">
                        <div className="input-group">
                        </div>
                    </div>
                </div>
                <div className="div-container">
                    <AdbIcon></AdbIcon>
                    <AdbIcon></AdbIcon>
                    <input type="button" style={{width: '100px'}}></input>
            </div>
    </Layout>
    )
        ;
    }
;
export default FundingWrite;
