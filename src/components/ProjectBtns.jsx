import {ProjectBtnContext} from '../pages/Projects';
import{useState,useContext} from 'react';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";



export const ProjectBtns=()=>
{
    const{category,setCategory}=useContext(ProjectBtnContext);
    const[menu,setMenu]=useState(false);
return(
    <>
    {/* /* //for large screens  */ }
    <div className="hidden md:flex gap-48 mt-8 md:visible justify-center">
    <button className={category==="java" ? "text-[#e3e6e0] border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-[#e3e6e0] hover:border-[#8ccbd8] border-2 "}
    onClick={()=>{setCategory("java")}}> 
        Java Projects
    </button>
    <button className={category==="web" ? "text-[#e3e6e0] border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-[#e3e6e0] hover:border-[#8ccbd8] border-2 "}
    onClick={()=>{setCategory("web")}}> 
        Web Development 
    </button>
    <button className={category==="general" ? "text-[#e3e6e0] border-[#8ccbd8] border-2 text-2xl rounded-md p-1 bg-slate-800": "  bg-[#8ccbd8]  text-black border-transparent text-2xl rounded-md p-1 hover:bg-slate-800 hover:text-[#e3e6e0] hover:border-[#8ccbd8] border-2 "}
    onClick={()=>{setCategory("general")}}> 
        General Category
    </button>
    
    </div>
    {/* //FOR SMALL SCREENS  */}
    
  <div className="md:hidden visible text-[#8ccbd8] p-8 text-3xl  "  onClick={()=>{setMenu(!menu)}} >{menu ? <AiOutlineMenuFold />
        : <AiOutlineMenuUnfold />}  </div>
        {
            menu &&
            <div className="md:hidden bg-slate-800 border-white border  h-fit w-1/2 fixed flex flex-col justify-center gap-6 p-4 rounded-md text-[#e3e6e0] font-thin text-xl  ">
            <button onClick={()=>{setCategory("java");setMenu(false);}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">Java Projects</button>
            <button onClick={()=>{setCategory("web");setMenu(false);}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">Web Development</button>
            <button onClick={()=>{setCategory("general");setMenu(false);}} className="hover:bg-[#8ccbd8] hover:text-black hover:font-semibold hover:rounded-md">General</button>
        </div>
        }
        
    </>

   

)
}