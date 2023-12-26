import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ChatButton from "../../pages/chat/ChatButton";

function Layout({children}) {
    return (
        <div>
            {<Header/>}
            {children}

            <Outlet/>
            <ChatButton/>
            {<Footer/>}
        </div>
    )
}

export default Layout;