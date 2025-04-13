import {NavBar} from '../components/NavBar';
import { FaCode } from "react-icons/fa";
import {Languages} from '../components/Languages';
import { MdWeb } from "react-icons/md";
import {WebDevelopment} from "../components/WebDevelopment";
import {ToolsTech} from "../components/ToolsTech";


export const Skills=()=>
{
    return (
        <>
        <NavBar className="fixed "/>
    <div className="bg-black h-screen inset-0 overflow-y-auto pt-[60px] no-scrollbar">

        <div className=" flex flex-col gap-y-5 ">
         <h2 className="text-3xl  text-[#e3e6e0] font-semibold mt-10 md:px-14 md:self-start text-center">TECHNICAL SKILLS</h2>
         <h2 className="text-2xl  text-[#8ccbd8] md:px-28 font-medium md:self-start text-center mt-7"> <FaCode className="inline pr-1 text-3xl font-medium" />
         LANGUAGES </h2>
            <Languages /> 
        <h2 className="text-2xl  text-[#8ccbd8] md:px-28 font-medium md:self-start text-center mt-7"> <MdWeb className="inline pr-2 mb-1  text-3xl font-medium" />
            WEB DEVELOPMENT </h2>
            <WebDevelopment />
        <h2 className="text-3xl  text-[#e3e6e0] font-semibold mt-10 md:px-14 md:self-start text-center">TOOLS AND TECHNOLOGIES</h2>
            <ToolsTech />
        
        </div>

    </div>
    </>
    );
}