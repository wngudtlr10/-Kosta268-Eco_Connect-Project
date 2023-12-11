// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Main from './Main';
import Member from "./pages/member/MemberList";
import Funding from "./pages/funding/FundingView";

import Error400 from "./pages/errors/Error400"
import Error500 from "./pages/errors/Error500"

function App() {
    return (
        <Router>
            <Routes>
                {/*main, member routes */}
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/member"} element={<Member/>}/>

                {/*funding*/}
                <Route path={"/funding"} element={<Funding/>}/>

                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>


            </Routes>
        </Router>
    );
}

export default App;
