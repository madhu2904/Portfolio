import {BtnContext} from '../pages/AboutMe';
import {useContext,useState} from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";



export const AboutBtns=()=>
{
    const {setPrsnDet,persDet,certs,exp,setExp,setCerts } =useContext(BtnContext)
    const [menu,setMenu]=useState(false);

    
    return (<>
        <div className="md:visible md:flex justify-center mt-8 gap-48  hidden">
        <button  className={persDet ? "text-white border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-white hover:border-[#8ccbd8] border-2 "}
         onClick={() => {setPrsnDet(true),setExp(false),setCerts(false)}}>Personal Details</button>

        <button  onClick={() =>{ setCerts(true),setPrsnDet(false),setExp(false)}}className={certs ? "text-white border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-white hover:border-[#8ccbd8] border-2 "}>Certifications & Certificates</button>
        
        <button onClick={() =>{ setExp(true),setCerts(false),setPrsnDet(false)}} className={exp ? "text-white border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-white hover:border-[#8ccbd8] border-2 "}>Experience</button>
    </div>
    <>
    <div className="md:hidden visible text-[#8ccbd8] p-8 text-3xl  "  onClick={()=>{setMenu(!menu)}} >{menu ? <AiOutlineMenuFold />
 : <AiOutlineMenuUnfold />
    }
    {
        menu && 
        <div className="md:hidden bg-slate-800 border-white border  h-fit w-1/2 fixed flex flex-col justify-center gap-6 p-4 rounded-md text-[#e3e6e0] font-thin text-xl  ">
            <button onClick={()=>{setCerts(false),setPrsnDet(true),setExp(false)}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">Personal Details</button>
            <button onClick={()=>{setCerts(true),setPrsnDet(false),setExp(false)}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">Certifications & Certificates</button>
            <button onClick={()=>{setCerts(false),setPrsnDet(false),setExp(true)}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">Experience</button>
        </div>
    }
    </div>
    </>
    
    </>
    );
};