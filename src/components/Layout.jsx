import React from "react";
import "../styles/Layout.css";

const Layout = ({children}) =>{
    return (
        <div className="Layout-container">
            {children}
        </div>
    );
};

export default Layout;