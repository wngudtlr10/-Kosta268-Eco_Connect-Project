// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';

import Join from "./pages/member/Join";
import Login from "./pages/member/Login";
import FindId from "./pages/member/FindId";
import FindPw from "./pages/member/FindPw";
import Layout from "./components/Layout/Layout";
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
import MyMission from "./pages/member/MyMission";
import MemberMissionPost from "./pages/mission/MemberMissionPost";
import Error400 from './pages/errorpage/ErrorPage400'
import Error500 from './pages/errorpage/ErrorPage500'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/admin/style.scss';
import Home from "./pages/home/home";
import AdminRoute from "./components/Layout/AdminRoute";
import {useRecoilState} from "recoil";
import {loginState} from "./store/recoilState";
import Reward from "./pages/reward/Reward";
import MyPageMember from "./pages/mypage/MyPageMember";
import MyPageGathering from "./pages/mypage/MyPageGathering";
import MyPageMission from "./pages/mypage/MyPageMission";

function PrivateRoute({ children }) {
    const [login, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();

    if (!login) {
        alert("로그인이 필요합니다.\n로그인 페이지로 이동합니다.");
        return <Navigate to={"/login"}/>;
    }

    return children;
}

function PublicRoute({ children, restricted }) {
    const [login, setLogin] = useRecoilState(loginState);
    const navigate = useNavigate();

    if (login && restricted) {
        // alert("잘못된 접근입니다.");

        return <Navigate to={"/"}/>;
    }
    return children;
}

function App() {
    return (
        <Router>
            <Routes>
                {/*home*/}
                <Route path={"/"} element={<Home/>}/>

                {/*member*/}
                <Route path={"/join"} element={<PublicRoute restricted={true}><Join /></PublicRoute>} />
                <Route path={"/login"} element={<PublicRoute restricted={true}><Login /></PublicRoute>} />
                <Route path={"/find-id"} element={<PublicRoute restricted={true}><FindId /></PublicRoute>} />
                <Route path={"/find-pw"} element={<PublicRoute restricted={true}><FindPw /></PublicRoute>} />

                {/*funding*/}
                <Route path={"/funding/view"} element={<FundingView />} />
                <Route path={"/funding/write"} element={<FundingWrite />} />
                <Route path={"/funding/details"} element={<FundingDetail />} />
                <Route path={"/funding/update"} element={<FundingUpdate />} />
                <Route path={"/funding/delete"} element={<FundingDelete />} />
                <Route path={"/funding/payment"} element={<FundingPayment />} />

                <Route element={<Layout />}>
                    {/* gathering */}
                    <Route path={"/gathering"} element={<GatheringList />} />
                    <Route path={"/gathering/:gatheringId"} element={<GatheringDetail />} />
                    <Route path={"/gathering/add"} element={<PrivateRoute><GatheringAdd /></PrivateRoute>} />
                    <Route path={"/gathering/update/:gatheringId"} element={<PrivateRoute><GatheringUpdate /></PrivateRoute>} />

                    {/* mission */}
                    <Route path={"/mission"} element={<MissionList />} />
                    <Route path={"/mission/:missionId"} element={<MissionDetail />} />
                    <Route path={"/member/:memberId/mission/:missionId/membermission/:memberMissionId"} element={<MemberMissionPost />} />
                    {/* Reward */}
                    <Route path={"/reward"} element={<Reward />} />

                    {/* MyPage */}
                    <Route path={"/mypage/member"} element={<MyPageMember/>}/>
                    <Route path={"/mypage/mission"} element={<MyPageMission />} />
                    <Route path={"/mypage/mission/test"} element={<MyMission />} />
                    <Route path={"/mypage/gathering"} element={<MyPageGathering/>}/>

                </Route>

                {/*error 400, 500*/}
                <Route path={"/error400"} element={<Error400/>}/>
                <Route path={"/error500"} element={<Error500/>}/>

                {/*admin*/}
                <Route path={"/admin/*"} element={
                    <AdminRoute>
                        <AdminLayout/>
                    </AdminRoute>
                }/>
            </Routes>
        </Router>
    );
}

export default App;
