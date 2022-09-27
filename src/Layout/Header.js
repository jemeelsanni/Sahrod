import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className=" bg-bluebg px-10 py-4 flex justify-between items-center">
            <div className=" flex gap-4">
                <div className="flex gap-2 items-center">
                    <img src="./phone.png" alt="" className=" h-5" />
                    <div className=" text-bluetext text-lg">08065262763</div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="./phone.png" alt="" className=" h-5" />
                    <div className=" text-bluetext text-lg">08065262763</div>
                </div>
                <div className="flex gap-2 items-center">
                    <img src="./phone.png" alt="" className=" h-5" />
                    <div className=" text-bluetext text-lg">08065262763</div>
                </div>
            </div>
            <div className=" flex gap-10">
                <div className=" border-bluetext border-solid border-2 rounded-lg p-1">
                    <Link className=" text-bluetext text-base">Book a Tour</Link>
                </div>
                <div className="flex gap-3">
                    <div>Facebook</div>
                    <div>Instagram</div>
                    <div>twitter</div>
                </div>
            </div>

        </div>
    );
};

export default Header;