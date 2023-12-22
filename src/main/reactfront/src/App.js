// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from './Main';
import Join from "./pages/member/Join";
import Login from "./pages/member/Login";
import FindId from "./pages/member/FindId";
import FindPw from "./pages/member/FindPw";
import Layout from "./components/Layout";
import MemberTest from "./pages/member/MemberTest";

function App() {
    return (
        <Router>
            <Routes>
                {/*  // main, member routes */}
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/join"} element={<Join />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/find-id"} element={<FindId />} />
                <Route path={"/find-pw"} element={<FindPw />} />
                <Route element={<Layout />}>
                    <Route path={"/membertest"} element={<MemberTest />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
