import React from "react";
import "./Main.css";
import Layout from "./components/Layout/Layout";

function Main() {
    return (
       <Layout>
        <div className="main-container">
            <h1 className="main-title">Welcome to the Main Page</h1>
            <div className="main-desc">
                <p>This is your new cool Main page.</p>
                <p>You can add more contents here.</p>
                <p>기본 루트 경로</p>
            </div>
        </div>
       </Layout>
    );
}

export default Main;