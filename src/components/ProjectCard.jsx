import {useContext} from 'react';
import projects from '../jsonFiles/projects';
import { IoOpenOutline } from "react-icons/io5";
import {ProjectBtnContext} from '../pages/Projects';
import { FaGithub } from "react-icons/fa";



export const ProjectCard=()=>{
    // const data=[1,"java","java","java",2,3,4];
    const{category}=useContext(ProjectBtnContext);
    const filteredProjects=projects.filter((project)=>project.category===category);
    return(

        <div className="md:mt-28 mt-20  grid grid-cols-1 md:grid-cols-2 w-screen gap-y-32 place-items-center pb-10 ">
           { 
            filteredProjects.map((project)=>
            {
                return(<>
                   <div className="bg-slate-800 h-96 w-96  md:h-96 md:w-5/6 grid grid-rows-2 grid-rows[50%_50%] md:grid-rows-1 md:grid-cols-[60%_38%] gap-4 p-5 md:p-7 hover:shadow-lg hover:shadow-[#8ccbd8]">
                   <div className="bg-white"><img src={project.image} className="w-full h-full object-cover"></img></div>
                   <div className="flex flex-col justify-between">
                   <div className="text-[#e3e6e0] font-semi-bold text-3xl">{project.title}</div>
                   <div className="text-[#8ccbd8] text-xl md:text-2xl self-center">Tech stack :{project.tech}</div>
                   <div className="flex space-between text-3xl justify-between md:gap-32 text-[#e3e6e0] ">
                        <a href={project.link} target="_blank"><IoOpenOutline className="hover:text-[#8ccbd8]"/></a>
                        <FaGithub  className="hover:text-[#8ccbd8]"/>
                    </div>
                   </div>

                  </div>
                </>
                )
            })
            }
            {/* sample column for grid */}
            {/* <div className="bg-slate-800 md:h-96 md:w-5/6 ">
            </div> */}
        </div>

    )
}