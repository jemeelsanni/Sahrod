import React from "react";
import Navbar from "../Layout/Navbar";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="">
        <div className="sm:hidden block">
          <img src="hero.png" alt="" />
        </div>
        <div className="sm:block hidden">
          <img src="Hero section.png" alt="" className=" object-fit  " />
        </div>
      </div>
      <div>
        <div className="sm:my-12 ">
          <p className="text-center font-normal text-ash text-base">
            Tested and Approved by
          </p>
        </div>
        <div className=" flex justify-around sm:px-24">
          <div className=" flex items-center sm:gap-4 lg:gap-2">
            <img src="waec.png" alt="" className=" w-6  sm:w-14 h-6  sm:h-14" />
            <p className="font-normal text-ash text-xl sm:text-2xl">WAEC</p>
          </div>
          <div className=" flex items-center sm:gap-4 lg:gap-2">
            <img src="coat.png" alt="" className=" w-6 h-6 sm:w-14 sm:h-14" />
            <p className="font-normal text-ash text-xl sm:text-2xl">FMC</p>
          </div>
          <div className=" flex items-center sm:gap-4 lg:gap-2">
            <img src="neco.jpg" alt="" className=" w-6 h-6 sm:w-14 sm:h-14" />
            <p className="font-normal text-ash text-xl sm:text-2xl">NECO</p>
          </div>
        </div>
        <div className=" my-6 text-center p-16">
          <div className=" text-3xl text-bluebg font-semibold mb-3">
            Why we are the best from others
          </div>
          <div className=" font-normal text-xl  text-ash sm:px-64 ">
            We strive to enhance the learning environment, expand and update our
            facilities to be a world-class high school. This we do with
            community support and professional advice. We also build
            relationship with international institutions and hope to more rounds
            for the sake of the future of our children.
          </div>
        </div>
        <div className="text-bluetext">
          <div className=" flex flex-wrap sm:px-24 sm:mt-8 sm:gap-6">
            <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
              <div className=" p-6 text-center  text-ash ">
                <p className=" text-3xl text-bluebg font-medium">
                  Enriched Curriculum
                </p>
                <p className=" font-normal text-xl">
                  Our curriculum is well-rounded, giving equal importance to
                  both Western and Islamic education.
                </p>
              </div>
            </div>
            <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
              <div className=" p-6 text-center text-ash">
                <p className=" text-3xl text-bluebg font-medium">
                  Skilled Teachers
                </p>
                <p className=" font-normal text-xl">
                  Our teachers undergo regular training to enhance their subject
                  expertise and teaching techniques for the benefit of the
                  students.
                </p>
              </div>
            </div>
            <div className=" bg-white flex-grow flex-shrink basis-64 overflow-hidden">
              <div className=" p-6 text-center text-ash">
                <p className=" text-3xl text-bluebg font-medium">
                  E-Learning Support
                </p>
                <p className=" font-normal text-xl">
                  Empowering students to learn at their own pace with our
                  comprehensive e-learning support service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-bluetext my-6 text-center sm:p-16">
          <div className=" text-3xl text-bluebg font-semibold mb-3">
            About Us
          </div>
          <div className=" font-normal text-xl  text-bluebg sm:px-64 ">
            We inspire learning through creativity. We partner with
            parentscarers and all, in a nurturing, creative, fun and safe
            environment. We foster the crafty Wizards ethos to ensure that
            quality learning opportunities and progress occur for all our unique
            students in a fun and caring environments.
          </div>
          <div className="flex-shrink flex-grow basis-96 mt-6">
            <img src="./DSC_0358.jpg" className=" " />
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap text-center mb-16 sm:mx-24 sm:px-12 gap-10 text-bluebg items-center ">
        <div className="flex-shrink flex-grow basis-96">
          <div>
            <div className=" text-3xl font-bold">Mission</div>
            <div className=" text-xl font-normal">
              We inspire learning through creativity. We partner with
              parentscarers and all, in a nurturing, creative, fun and safe
              environment. We foster the crafty Wizards ethos to ensure that
              quality learning opportunities and progress occur for all our
              unique students in a fun and caring environments.
            </div>
          </div>
          <br />
          <div>
            <div className=" text-3xl font-bold">Vision</div>
            <div className=" text-xl font-normal">
              We inspire learning through creativity. We partner with
              parentscarers and all, in a nurturing, creative, fun and safe
              environment. We foster the crafty Wizards ethos to ensure that
              quality learning opportunities and progress occur for all our
              unique students in a fun and caring environments.
            </div>
          </div>
        </div>

        <div className="flex-shrink flex-grow basis-96">
          <img src="DSC_0493.jpg" alt="" />
        </div>
      </div>
      <div>
        <div className="text-3xl text-bluebg font-medium text-center mb-3">
          Parent Testimonials
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Sarod Academy zero tolerance to examination malpractice is
                worthy of commendation and this teaches students to avoid any
                form of corrruption in their endeavor.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Sanni Jemeel</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Sarod Academy combines both Islamic Knowledge with impeccable
                western education.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Usman Sulaiman</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
