import { LoadingScreen } from "../components/LoadingScreen";
import { useState, useEffect, useRef } from "react";
import { NavBar } from "../components/NavBar";
import { FaDownload } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import madhuphoto2 from "../assets/madhuphoto2.jpg";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyResume from "../assets/My Resume (2).pdf";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const typedRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-black h-screen md:fixed overflow-y-auto scroll-hidden inset-0">
          <NavBar />

          <div className="md:h-[calc(100vh-4rem)] flex md:flex-row flex-col  justify-center items-center gap-40 ">
            <div className=" lg:flex lg:flex-col lg:gap-12 text-white h-auto text-xl hidden p-7  border rounded-lg border-opacity-40 border-white bg-slate-700/40 mt-24">
              <a
                href="https://www.hackerrank.com/profile/madhu2904/"
                target="_blank"
              >
                {" "}
                <span className="flex gap-6 justify-between items-center text-[#e3e6e0] hover:text-[#8ccbd8] ">
                  <FaHackerrank className="text-3xl " /> 2* Gold Badge
                </span>
              </a>
              <a href="https://leetcode.com/u/V_Madhumitha/" target="_blank">
                {" "}
                <span className="flex gap-6  justify-between items-center  text-[#e3e6e0] hover:text-[#8ccbd8]">
                  <SiLeetcode className="text-3xl ml-0" /> 120+ Problems{" "}
                </span>
              </a>
              <a href="https://github.com/madhu2904/" target="_blank">
                {" "}
                <span className="flex gap-5 justify-center items-center  text-[#e3e6e0] hover:text-[#8ccbd8]">
                  <FaGithub className="text-3xl " /> View My Projects
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/madhumitha-velusamy-80a209254/"
                target="_blank"
              >
                {" "}
                <span className="flex gap-5 justify-center items-center text-[#e3e6e0] hover:text-[#8ccbd8]">
                  <FaLinkedin className="text-3xl" />
                  Connect with me
                </span>
              </a>
            </div>
            {/* ithu than */}
            <div className=" text-white flex flex-col  justify-center items-center md:gap-8 gap-5 mt-24">
              <h1 className="md:text-7xl  text-[#8ccbd8] font-semibold text-5xl  ">
                Madhumitha V
              </h1>
              <div className="h-48 w-48 border-white bg-slate-50 md:hidden ">
                <img src={madhuphoto2}></img>{" "}
              </div>
              <h5 className="text-4xl align-middle font-mono font-thin md:text-white mt-6 mb-0 text-center text-[#8ccbd8]">
                <ReactTyped
                  strings={[
                    "I'm a Web Developer",
                    "Java Programmer",
                    "Blockchain  Enthusiast",
                    "I'm a Lifelong Learner",
                  ]}
                  typeSpeed={150} // Speed of typing
                  backSpeed={70} // Speed of backspacing
                  loop
                ></ReactTyped>{" "}
              </h5>
              <p className="max-w-lg text-justify text-xl text-[#e3e6e0] md:pl-2 md:pr-4 pl-10 pr-10 ">
                A passionate web developer and Java programmer. My journey in
                tech is fueled by curiosity and commitment to continuous
                learning. Connect with me as I continue to explore new horizons
                in the world of technology!
              </p>
              <div className="flex  gap-20 md:mt-5 md:gap-10 ">
                <button className="rounded-md bg-[#8ccbd8] font-semibold text-black text-2xl p-3 hover:bg-slate-800 hover:text-[#e3e6e0]">
                  <a href={MyResume} download="Madhumitha_Resume.pdf">
                    <span className="flex gap-3">
                      Resume <FaDownload />{" "}
                    </span>{" "}
                  </a>{" "}
                </button>
                <button className="rounded-md bg-[#8ccbd8] font-semibold text-black text-2xl p-3  hover:bg-slate-800 hover:text-[#e3e6e0]">
                  <Link to="/about">
                    <span className="flex gap-3 items-center">
                      Know More <FaArrowRight />{" "}
                    </span>
                  </Link>
                </button>
              </div>
            </div>
            <div className="md:block hidden h-60 w-60 animate-float">
              <img src={madhuphoto2} className="rounded-lg"></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
