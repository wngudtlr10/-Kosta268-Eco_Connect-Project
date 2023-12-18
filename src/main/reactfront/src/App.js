// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Main from './Main';
import Member from "./pages/member/MemberList";
import Funding from "./pages/funding/FundingView";
import FundingDeatil from "./pages/funding/FundingDetail";
import FundingWrite from "./pages/funding/FundingWirte"

import Error400 from "./pages/errors/Error400"
import Error500 from "./pages/errors/Error500"

import 'bootstrap/dist/css/bootstrap.min.css';
import FundingDetail from "./pages/funding/FundingDetail";

function App() {
    return (
        <Router>
            <Routes>
                {/*main, member routes */}
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/member"} element={<Member/>}/>


                {/*login, siginup*/}
                {/*<Route path={"/login"} element={<Login/>}/>*/}
                {/*<Route path={"/siginup"} element={<Signup/>}/>*/}


                {/*funding*/}
                <Route path={"/funding"} element={<Funding/>}/>
                <Route path={"/fundingDetail"} element={<FundingDetail/>}/>
                <Route path={"/fundingWrite"} element={<FundingWrite/>}/>


                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>
            </Routes>
        </Router>
    );
}

export default App;
