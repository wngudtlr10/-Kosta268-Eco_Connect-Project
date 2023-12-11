// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Member from "./pages/member/MemberList";
import Main from './Main';

function App() {
    return (
        <Router>
            <Routes>
                {/*  // main, member routes */}
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/member"} element={<Member/>}/>
            </Routes>
        </Router>
    );
}

export default App;
