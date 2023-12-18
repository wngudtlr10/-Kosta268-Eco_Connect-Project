import React, {useEffect, useState} from "react";
import Axios from "axios";

import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import Pagination from "../../components/PageNation/PageNation"

import "./FundingView.css";
import CardGrid from "../../components/Card/CardGrid";


export const FundingView = () => {
    const BASE_IMAGE_PATH = "../../assets/images/funding/view/";

    return (
        <Layout>
            <Carousel></Carousel>
            <CardGrid></CardGrid>
            <div className="screen">
                <div className="div">
                </div>
            </div>
            <Pagination></Pagination>
        </Layout>
    );
};
export default FundingView;
