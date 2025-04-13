import {Link} from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import {useState} from 'react';
import { IoClose } from "react-icons/io5";



export const NavBar=()=>
    {
       const [menu,setMenu]=useState(false);
        return(
            <div className="flex  justify-between h-16 bg-slate-800 fixed inset-x-0">
                <div id="nameDiv" className="pt-3">
   {/* name to be displayed in the left of screen */}
                     <span className="text-2xl text-[#e3e6e0] justify-between pl-10  font-semibold ">MADHUMITHA V</span>
    
                </div>
                <div id="div for nav items">

                    <div className="md:flex flex-end text-xl text-[#e3e6e0] gap-4 pr-10 pt-4 hidden font-thin " >
                        <Link to="/"> <span className="hover:bg-[#8ccbd8] hover:font-medium p-2 hover:text-black rounded-md border-hidden ">Home</span></Link>
                        <Link to="/about"> <span className="hover:bg-[#8ccbd8] hover:font-medium hover:text-black p-2 rounded-md border-hidden ">About me</span></Link>
                        <Link to="/skills"> <span className="hover:bg-[#8ccbd8] hover:font-medium hover:text-black p-2 rounded-md border-hidden ">Skills</span></Link>
                        <Link to="/projects"> <span className="hover:bg-[#8ccbd8] hover:font-medium hover:text-black p-2 rounded-md border-hidden ">Projects</span></Link>
                        <Link to="/contact"> <span className="hover:bg-[#8ccbd8] hover:font-medium hover:text-black p-2 rounded-md border-hidden ">Contact</span></Link>


                    </div>
                    <div className="md:hidden flex justify-center flex-end pr-10   pt-4 text-[#8ccbd8] text-4xl  font-extrabold" onClick={()=>{setMenu(!menu)}}> {menu ? <IoClose/> : <FaLaptopCode/>}</div>
                    {menu && (
                    <div className="md:hidden flex  flex-col items-center bg-slate-700 text-[#e3e6e0] text-xl font-thin absolute top-16 left-0 w-full ">
                        <Link to="/" onClick={() => setMenu(false)} className="w-full text-center p-4 hover:bg-[#8ccbd8] hover:text-black hover:font-medium ">
                            Home
                        </Link>
                        <Link to="/about" onClick={() => setMenu(false)} className="w-full text-center p-4 hover:bg-[#8ccbd8] hover:text-black rounded-md  hover:font-medium">
                            About me
                        </Link>
                        <Link to="/skills" onClick={() => setMenu(false)} className="w-full text-center p-4 hover:bg-[#8ccbd8] hover:text-black hover:font-medium">
                            Skills 
                        </Link>
                        <Link to="/projects" onClick={() => setMenu(false)} className="w-full text-center p-4 hover:bg-[#8ccbd8] hover:text-black hover:font-medium">
                            Projects
                        </Link>
                        <Link to="/contact" onClick={() => setMenu(false)} className="w-full text-center p-4 hover:bg-[#8ccbd8] hover:text-black hover:font-medium">
                            Contact
                        </Link>
                    </div>
                )}
                </div>
    
            </div>

            
        );
    
    }