// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Main from './Main';
import Member from "./pages/member/MemberList";
import FundingView from "./pages/funding/FundingView";
import FundingWrite from "./pages/funding/FundingWirte"
import FundingDetail from './pages/funding/FundingDetail';
import FundingUpdate from './pages/funding/FundingUpdate';
import FundingDelete from './pages/funding/FundingDelete';
import FundingPayment from './pages/funding/FundingPayment';

import Error400 from "./pages/errors/Error400"
import Error500 from "./pages/errors/Error500"

function App() {
    return (
        <Router>
            <Routes>
                {/*main, member routes */}
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/member"} element={<Member/>}/>


                {/*login, siginup*/}
                {/*<Route path={"/login"} element={<Login />}/>*/}
                {/*<Route path={"/signup"} element={<Signup />}/>*/}

                {/*funding*/}
                <Route path={"/funding/view"} element={<FundingView />} />
                <Route path={"/funding/write"} element={<FundingWrite />} />
                <Route path={"/funding/details"} element={<FundingDetail />} />
                <Route path={"/funding/update"} element={<FundingUpdate />} />
                <Route path={"/funding/delete"} element={<FundingDelete />} />
                <Route path={"/funding/payment"} element={<FundingPayment />} />

                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>
            </Routes>
        </Router>
    );
}

export default App;
