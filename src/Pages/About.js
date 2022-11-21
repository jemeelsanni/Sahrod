import React from "react"
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer"
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div className=" p-10 flex flex-wrap gap-9 text-center items-center text-bluebg">
                    <div className="flex-shrink flex-grow basis-96">
                        <img className=" w-full h-96" src= "./DSC_0493.jpg"/>
                    </div>
                    <div className="flex-shrink flex-grow basis-96">
                        <div className="text-3xl font-semibold">About Us</div>
                        <div>Sarod Academy was established in 2014 to complement government efforts at providing qualitative
                            education for eligible learners of the host community and country at large. <br /> The school
                            commenced activities on the 4th of August, 2014 with Nine(9) learners, Five(5) teaching and Three(3)
                            non-teaching staffs. <br /> The school is government approved and has been accredited for WASSCE, NECO and BECE 
                        </div>
                        </div>
                </div>
            

                

                
                    <div className="flex flex-wraptext-center items-center">
                        <div className="flex-shrink flex-grow basis-96 bg-bluebg text-bluetext p-10">
                            <div className="text-3xl font-semibold text-center">Our Mission</div>
                            <div className=" text-center">We are poised to positively affect our community host, the 
                            nation and the world, contributing our own quota towards the development of the child
                            in the new world order. </div>
                        </div>
                        <div className="flex-shrink flex-grow basis-96 bg-bluetext text-bluebg p-10">
                            <div className="text-3xl font-semibold text-center">Our Vision</div>
                            <div className=" text-center">To empower students to be leaders and clear-thinkers, decision-makers
                            to marvel their individuality and yet to understand the dynamics of working as a team to make the most
                            of the opportunities that are available to them and create opportunities for others.</div>
                        </div>
                    </div>
                    <br/>
        

                
                    <div className=" px-10">
                        <div className=" text-center text-3xl font-semibold text-bluebg justify-center">Facilities</div>
                        
                            <li className="text-bluebg">Purpose-built Modern Blocks and Classrooms.</li>
                            <li className="text-bluebg">Well-Equipped Library.</li>
                            <li className="text-bluebg">Properly treated and purified drinkable water.</li>
                            <li className="text-bluebg">Adequate sporting and recreational facilities.</li>
                            <li className="text-bluebg">Standby Power Sets and eventual alternative energy strategy.</li>
                            <li className="text-bluebg">Adequate teacher-pupil ratio of 1:15. </li>
                            <li className="text-bluebg">Well-equipped Science Laboratory with modern tools and equipments.</li>
                            <li className="text-bluebg">Well-equipped Computer Lab with state of the Art Networking-Internet.</li>
                            <li className="text-bluebg">State of the art multi-purpose School Hall with a standard stage for various performances.</li>
                            <li className="text-bluebg">Well grassed Football field.</li>
                            <li className="text-bluebg">A fully equipped in-house clinic staffed with medical professionals.</li>
                    
                    </div>
                

                
                    <div className="flex flex-wrap text-center items-center  bg-bluebg my-10 pl-10">
                        <div className="flex-shrink flex-grow basis-96">
                            <img className=" w-full" src="./DSC_0476.jpg"/>
                        </div>
                        <div className="flex-shrink flex-grow basis-96 text-bluetext p-10">
                            <div className="text-3xl font-semibold" >Our Goal</div>
                            <br />
                            Our goal is to strive to enhance the learning environment, expanding and updating our facilities
                            to be a world-class high school. This we do with community support and professional advice. We also
                            build relationship with international institutions and hope to more rounds for the sake of the future 
                            of our children.
                        </div>
                    </div>
                    
                
            </div>
            
            <Footer/>
            
        </div>
        
        )
    }
    export default About