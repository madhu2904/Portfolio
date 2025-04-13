import git from '../assets/git.png';
import github from "../assets/github.png";
import googlecloud from "../assets/googlecloud.png";
import django from "../assets/django.png";
import firebase from "../assets/icons8-google-firebase-console-144.png";
import canva from "../assets/canva.png";
import mysql from "../assets/mysql.png";
import looker from "../assets/looker.png";
import ganache from "../assets/ganache.png";
import truffle from "../assets/truffle.png";


export const ToolsTech=()=>{
    const tools=[
        {
            id:1,
            name:'Git',
            image:git,
        },
        {
            id:2,
            name:'GitHub',
            image:github,
        },
        {
            id:3,
            name:'Firebase',
            image:firebase,
        },  {
            id:4,
            name:'Canva',
            image:canva,
        },
        {
            id:5,
            name:'Django',
            image:django,
        },
        {
            id:6,
            name:'Google Cloud',
            image:googlecloud,
        },
        {
            id:7,
            name:'MySQL',
            image:mysql,
        },
        {
            id:8,
            name:'Looker',
            image:looker,
        },
        {
            id:9,
            name:'Ganache',
            image:ganache,
        },
        {
            id:10,
            name:'Truffle',
            image:truffle,
        }
    ]
    return(
        <div className="h-fit  md:ml-28 md:mr-28 ml-10 mr-10 flex  justify-center">
             <div className="grid md:grid-cols-5 grid-cols-1 text-white h-fit gap-y-20 md:gap-y-20 md:gap-x-36 py-12 px-6 ">
             {/* <div className="md:w-20 md:h-20 h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">JAVA</h7><img src={tools[0].image}></img></div> */}
{
    tools.map((tool)=>{return(
        <div className="md:w-36 md:h-36 h-48 w-48 - flex flex-col md:gap-y-2 py-2 gap-y-2 bg-slate-800 items-center rounded-md  animate-float"><h7 className="text-center text-xl bg-slate-800 ">{tool.name}</h7><img className=" md:h-24 md:w-24 h-36 w-36  " src={tool.image}></img></div>
    )})
}
             </div>
        </div>
    )
}