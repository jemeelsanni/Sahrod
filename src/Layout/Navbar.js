import React from "react";
import Header from "./Header";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Header />
            <div className="px-10 py-4 flex justify-between items-center">
                <div>
                    <img src="" alt="" />
                    <div className=" text-bluetext text-2xl">Sarod Academy</div>
                </div>
                <nav className=" flex gap-16 text-bluebg text-lg ">
                    <Link to="/" className="hover:text-bluetext">Home</Link>
                    <Link to="/About" className="hover:text-bluetext">About</Link>
                    <Link to="/Contact" className="hover:text-bluetext">Contact Us</Link>
                </nav>
            </div>
        </div>
    );
};

export default Navbar