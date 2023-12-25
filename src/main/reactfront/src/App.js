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
import AdminLayout from './components/Layout/AdminLayout';
import GatheringList from "./pages/gathering/GatheringList";
import GatheringDetail from "./pages/gathering/GatheringDetail";
import GatheringAdd from "./pages/gathering/GatheringAdd";
import GatheringUpdate from "./pages/gathering/GatheringUpdate";
import MissionList from "./pages/mission/MissionList";
import MissionDetail from "./pages/mission/MissionDetail";

import Error400 from './pages/errorpage/ErrorPage400'
import Error500 from './pages/errorpage/ErrorPage500'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/admin/style.scss';
import Home from "./pages/home/home";

function App() {
    return (
        <Router>
            <Routes>
                {/*main, member routes */}
                

                <Route path={"/join"} element={<Join />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/find-id"} element={<FindId />} />
                <Route path={"/find-pw"} element={<FindPw />} />
                <Route element={<Layout />}>
                    <Route path={"/"} element={<Home/>}/>

                    {/*funding*/}
                    <Route path={"/funding/view"} element={<FundingView />} />
                    <Route path={"/funding/write"} element={<FundingWrite />} />
                    <Route path={"/funding/details"} element={<FundingDetail />} />
                    <Route path={"/funding/update"} element={<FundingUpdate />} />
                    <Route path={"/funding/delete"} element={<FundingDelete />} />
                    <Route path={"/funding/payment"} element={<FundingPayment />} />
                    {/* gathering */}
                    <Route path={"/gathering"} element={<GatheringList />} />
                    <Route path={"/gathering/:gatheringId"} element={<GatheringDetail />} />
                    <Route path={"/gathering/add"} element={<GatheringAdd />} />
                    <Route path={"/gathering/update/:gatheringId"} element={<GatheringUpdate />} />
                    {/* mission */}
                    <Route path={"/mission"} element={<MissionList />} />
                    <Route path={"/mission/:missionId"} element={<MissionDetail />} />

                    {/* chat test */}
                    <Route path={"/chat-test"} element={<MemberTest />} />
                </Route>
                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>
                <Route path={"/admin/*"} element={<AdminLayout/>}/>
                
            </Routes>
        </Router>
    );
}

export default App;
