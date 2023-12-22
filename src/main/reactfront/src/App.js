// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Join from "./pages/member/Join";
import Login from "./pages/member/Login";
import FindId from "./pages/member/FindId";
import FindPw from "./pages/member/FindPw";
import Layout from "./components/Layout/Layout";
import MemberTest from "./pages/member/MemberTest";
import Main from './Main';
import FundingView from "./pages/funding/FundingView";
import FundingWrite from "./pages/funding/FundingWirte"
import FundingDetail from './pages/funding/FundingDetail';
import FundingUpdate from './pages/funding/FundingUpdate';
import FundingDelete from './pages/funding/FundingDelete';
import FundingPayment from './pages/funding/FundingPayment';

import Error400 from "./pages/errors/Error400"
import Error500 from "./pages/errors/Error500"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                {/*main, member routes */}
                <Route path={"/"} element={<Main/>}/>

                <Route path={"/join"} element={<Join />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/find-id"} element={<FindId />} />
                <Route path={"/find-pw"} element={<FindPw />} />
                <Route element={<Layout />}>
                    <Route path={"/membertest"} element={<MemberTest />} />
                    {/*funding*/}
                    <Route path={"/funding/view"} element={<FundingView />} />
                    <Route path={"/funding/write"} element={<FundingWrite />} />
                    <Route path={"/funding/details"} element={<FundingDetail />} />
                    <Route path={"/funding/update"} element={<FundingUpdate />} />
                    <Route path={"/funding/delete"} element={<FundingDelete />} />
                    <Route path={"/funding/payment"} element={<FundingPayment />} />
                </Route>
                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>
            </Routes>
        </Router>
    );
}

export default App;
