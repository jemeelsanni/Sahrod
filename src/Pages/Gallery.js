import React from "react"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className=" px-12 text-center text-3xl font-bold text-bluebg">Our Facilities</div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="DSC_0249.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0024.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0079.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0319.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0334.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0351.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0435.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0456.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="DSC_0488.jpg" />
                    <img src="DSC_0351.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>

            

            
            <Footer />
        </div>
    );
};

export default Gallery;