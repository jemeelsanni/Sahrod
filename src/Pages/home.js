import React from "react";
import Navbar from "../Layout/Navbar";    
import Footer from "../Layout/Footer"; 
import { Link } from "react-router-dom";                                             

const Home = () =>{
    return(
        <div>
            
            <div className=" r">
                <div className=" absolute object-fit h-full w-full -z-10">
                    <img src="./DSC_0358.jpg" className=" w-full h-full" />
                </div>
                <Navbar />
                <div className="">
                    <div className=" text-center items-center">
                        <p className=" text-5xl font-bold text-bluebg">Sarod Academy</p>
                        <div className=" items-center mt-8">
                            <p className=" text-bluebg text-3xl font-semibold"> We make learning interesting through creeativity</p>
                            <p className=" text-bluebg text-2xl font-medium">Discover | Learn | Play</p>
                        </div>
                    </div>
                    <div className="mt-20 flex gap-0 items-center justify-center">
                        <div className=" px-8 py-5 bg-yellow items-center text-center">
                            <img src="./Learning.png" alt="" />
                            <div className=" text-white">Learning</div>
                        </div>
                        <div className=" px-8 py-5 bg-red items-center text-center">
                            <img src="./Learning.png" alt="" />
                            <div className=" text-white">Creativity</div>
                        </div>
                        <div className=" px-8 py-5 bg-bluebg items-center text-center">
                            <img src="./Learning.png" alt="" />
                            <div className=" text-white">Nuturing</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className=" my-20  bg-bluebg text-bluetext text-center p-16">
                <div className=" text-2xl font-bold">Our Mission</div> <br />
                <div className=" font-normal text-xl">We are poised to positively affect our community host, the 
                            nation and the world, contributing our own quota towards the development of the child
                            in the new world order. 
                </div>
                <button to="/" className=" bg-bluetext text-bluebg px-3 py-1 mt-4 text-lg font-medium rounded-md">
                    <Link to="Contact">Get in Touch</Link>
                </button>
            </div>
            <div className=" flex flex-wrap text-center mx-20 gap-10 text-bluebg items-center ">
                <div className="flex-shrink flex-grow basis-96">
                    <div className=" text-3xl font-bold">About Us</div>
                    <div className=" mt-3 text-xl font-normal">We inspire learning through creativity. We partner with parentscarers and all, in a 
                        nurturing, creative, fun and safe environment. We foster the crafty Wizards ethos to 
                        ensure that quality learning opportunities and progress occur for all our unique 
                        students in a fun and caring environments.
                    </div>
                    <button className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium rounded-md">
                        <Link  to="About">Discover More</Link>
                    </button>
                </div>
                <div className="flex-shrink flex-grow basis-96">
                    <img src="DSC_0493.jpg" alt="" />
                </div>
            </div>
            <div className=" bg-bluebg text-bluetext py-6 my-20">
                <div className="text-center">
                    <div className="text-2xl font-bold">Meet Our Managemement Staffs</div>
                    
                </div>
                <div className=" flex flex-wrap px-24 mt-8 gap-6">
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Rectangle 4.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">ADMIN</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                            </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Rectangle 4.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">PRINCIPAL</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                        </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Rectangle 4.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">VICE PRINCIPAL</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                    </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Rectangle 4.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">HEADTEACHER</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                </button>*/}
                        </div>
                    </div>
                    
                </div>

                
            </div>
            <div className=" flex flex-wrap text-center mx-20 gap-12  text-bluebg items-center ">
                <div className="flex-shrink flex-grow basis-96">
                    
                    <img className=" " src="./About.png" alt="" />
                </div>
                <div className="flex-shrink flex-grow basis-96">
                    <div className=" text-3xl font-bold">Watch What Our Parents <br /> Have Said About Us</div>
                    <div className=" mt-3 text-xl font-normal">Listen to what our parents have said about our Academy approach to 
                    Education. To find out more about the difference The Academy can make to your child, make an appointment, 
                    get in touch today. We are proud of our reputation, with 5-star reviews from over 20 reviews and ratings.
                    </div>
                    <button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium rounded-md">
                        <Link to="About">See More</Link>
                    </button>
                </div>
                
            </div>

            <div className=" text-bluetext bg-bluebg mt-20 text-center p-12">
                <div className=" text-3xl font-bold">Testimonials</div>
                <div className=" flex flex-wrap mt-8 gap-6">
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Activities1.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">???Listen to what our parents have said about our Academy approach to Education. 
                    To find out more about the difference The Academy can make to your child, make 
                    an appointment, get in touch today. We are proud of our reputation, with 5-star 
                    reviews from over 20 reviews and ratings.???</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                            </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Activities2.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">???Listen to what our parents have said about our Academy approach to Education. 
                    To find out more about the difference The Academy can make to your child, make 
                    an appointment, get in touch today. We are proud of our reputation, with 5-star 
                    reviews from over 20 reviews and ratings.???</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                        </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Activities3.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">???Listen to what our parents have said about our Academy approach to Education. 
                    To find out more about the difference The Academy can make to your child, make 
                    an appointment, get in touch today. We are proud of our reputation, with 5-star 
                    reviews from over 20 reviews and ratings.???</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                    </button>*/}
                        </div>
                    </div>
                    <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
                        <img className=" h-64 w-full object-cover" src="./Activities4.png" alt=""/>
                        <div className=" p-6 text-center">
                            <div className=" font-bold text-sm">???Listen to what our parents have said about our Academy approach to Education. 
                    To find out more about the difference The Academy can make to your child, make 
                    an appointment, get in touch today. We are proud of our reputation, with 5-star 
                    reviews from over 20 reviews and ratings.???</div>
                            {/**<button to="/" className=" text-bluetext bg-bluebg px-3 py-1 mt-4 text-lg font-medium">
                                <Link>Discover More</Link>
                </button>*/}
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Home 