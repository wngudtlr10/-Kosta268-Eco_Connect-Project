import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ChatButton from "../../pages/chat/ChatButton";

function Layout({children}) {
    return (
        <main>
            {<Header/>}
            {children}

            <Outlet/>
            <ChatButton/>
            {<Footer/>}
        </main>
    )
}

export default Layout;

<Layout>

</Layout>