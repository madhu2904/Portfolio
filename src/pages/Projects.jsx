import {NavBar} from '../components/NavBar';
import{createContext,useContext} from 'react';
import {useState} from 'react';
import {ProjectBtns} from '../components/ProjectBtns';
import {ProjectCard} from '../components/ProjectCard';


export const ProjectBtnContext=createContext();
export const Projects = () =>
    {
        
        const[category,setCategory]=useState("java");
        
        

        return (
        <ProjectBtnContext.Provider value={{category,setCategory}}>
        
        <NavBar/>
        <div className="bg-black h-screen inset-0 overflow-y-auto pt-[60px] no-scrollbar">
        <ProjectBtns/>
        <ProjectCard/>
        

        </div>
        </ProjectBtnContext.Provider>
        )
    } 