import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({children}) {
    return (
        <div>
            {<Header/>}
            {children}

            <Outlet/>
            {<Footer/>}
        </div>
    )
}

export default Layout;