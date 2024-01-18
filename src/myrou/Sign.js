import React from "react";
import SignUp from "./Signup";
import Navbar from "./Navbar";
import Footer from "../component/Footer";

const Sign=()=>{
    return(
        <>
        <div style={{backgroundColor:"#005987", width:"98.5vw", overflowX:"hidden"}}>
        <Navbar />
        <SignUp />
        <Footer />
        </div>
        
        </>
    )
}
export default Sign;