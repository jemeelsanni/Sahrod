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
                        <img className=" w-full h-96" src= "./Rectangle 9.png"/>
                    </div>
                    <div className="flex-shrink flex-grow basis-96">
                        <div className="text-3xl font-semibold">About Us</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nunc enim nisl 
                            sit egestas. A vel volutpat amet lectus eget sem mauris fringilla. Aliquam sit in 
                            fermentum nunc sapien in. Tellus pharetra diam quam vestibulum eleifend aliquam dolor 
                            suspendisse. Mauris  quam quisque sed vel pellentesque aliquet. Tortor orci commodo 
                            justo, nibh. Urna sit consectetur morbi ac duis integer facilisis habitasse faucibus. 
                            Placerat accumsan, purus imperdiet lobortis sapien turpis eleifend. Augue sollicitudin 
                            ut ultricies justo, condimentum sit ac. Ipsum leo rutrum etiam ullamcorper pulvinar non 
                            integer. Neque egestas faucibus in pellentesque viverra in magna. Maecenas egestas in ac id. 
                            Volutpat egestas at dolor egestas dui dui neque at. Lorem auctor odio nibh amet. Placerat 
                            amet id pellentesque pellentesque egestas est. Pellentesque quis egestas ac ac odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis nunc enim nisl 
                            sit egestas. A vel volutpat amet lectus eget sem mauris fringilla. Aliquam sit in 
                            fermentum nunc sapien in. Tellus pharetra diam quam vestibulum eleifend aliquam dolor 
                            suspendisse. Mauris, quam quisque sed vel pellentesque aliquet. Tortor orci commodo 
                            justo, nibh. Urna sit consectetur morbi ac duis integer facilisis habitasse faucibus. 
                            Placerat accumsan, purus imperdiet lobortis sapien turpis eleifend. Augue sollicitudin 
                            ut ultricies justo, condimentum sit ac. Ipsum leo rutrum etiam ullamcorper pulvinar non 
                            integer. Neque egestas faucibus in pellentesque viverra in magna. Maecenas egestas in ac id. 
                            Volutpat egestas at dolor egestas dui dui neque at. Lorem auctor odio nibh amet. Placerat 
                            amet id pellentesque pellentesque egestas est. Pellentesque quis egestas ac ac odio.</div>
                        </div>
                </div>
            

                

                
                    <div className="flex flex-wraptext-center items-center">
                        <div className="flex-shrink flex-grow basis-96 bg-bluebg text-bluetext p-10">
                            <div className="text-3xl font-semibold text-center">Our Mission</div>
                            <div className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, est ut a, eleifend tempor 
                                sagittis, consequat. Ante egestas eget ultricies eu tortor. Mollis at euismod eget in 
                                vulputate posuere ipsum magna malesuada.</div>
                        </div>
                        <div className="flex-shrink flex-grow basis-96 bg-bluetext text-bluebg p-10">
                            <div className="text-3xl font-semibold text-center">Our Vision</div>
                            <div className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, est ut a, eleifend tempor 
                                sagittis, consequat. Ante egestas eget ultricies eu tortor. Mollis at euismod eget in 
                                vulputate posuere ipsum magna malesuada.</div>
                        </div>
                    </div>
                    <br/>
        

                
                    <div className=" px-10">
                        <div className=" text-center text-3xl font-semibold text-bluebg justify-center">Facilities</div>
                        
                            <li className="text-bluebg">Spacious and conducive classrooms equipped with interactive white board and television sets.</li>
                            <li className="text-bluebg">Mini libraries including DVD and Video players.</li>
                            <li className="text-bluebg">An ultra-modern Computer Room fully equipped with the latest computers.</li>
                            <li className="text-bluebg">A high profile school library fully stocked with books covering virtually all subjects.</li>
                            <li className="text-bluebg">The cosy nature of the library makes it truly a reader’s delight.</li>
                            <li className="text-bluebg">A world class Music Room manned by highly skilled and competent teachers. </li>
                            <li className="text-bluebg">Art Room and Electronic Smart board as teaching aid.</li>
                            <li className="text-bluebg">A state of the art Home Economics Room equipped with standard kitchen and sitting room.</li>
                            <li className="text-bluebg">Well-equipped Science Room for effective teaching.</li>
                            <li className="text-bluebg">A standard boarding facility.</li>
                            <li className="text-bluebg">State of the art multi-purpose School Hall with a standard stage for various performances.</li>
                            <li className="text-bluebg">Well grassed Football field.</li>
                            <li className="text-bluebg">A well-equipped playground for the nursery.</li>
                            <li className="text-bluebg">A fully equipped in-house clinic staffed with medical professionals.</li>
                    
                    </div>
                

                
                    <div className="flex flex-wrap text-center items-center  bg-bluebg my-10 pl-10">
                        <div className="flex-shrink flex-grow basis-96">
                            <img className=" w-full" src="./classroom.jpg"/>
                        </div>
                        <div className="flex-shrink flex-grow basis-96 text-bluetext p-10">
                            <div className="text-3xl font-semibold" >ACHIEVEMENTS</div>
                            <br />
                            <li>99% with credit pass and above in 2014 SSCE</li>
                            <li>First Secondary School to Represent Nigeria at The International Geography Olympiad (iGEO) held in Cologne Germany in 2012</li>
                            <li>Bronze Medal at the International Junior Science Olympiad (IJSO) in 2008</li>
                            <li>Second Position in Ogun State COWBELL Mathematics Competition in 2004</li>
                        </div>
                    </div>
                    
                
            </div>
            
            <Footer/>
            
        </div>
        
        )
    }
    export default About