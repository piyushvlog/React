import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return(
        <>
        <footer className="bg-light text-center">
    <p> © {year} PTeCH. All Rights Reserved.</p>
        </footer>


        </>
    )
}


export default Footer;