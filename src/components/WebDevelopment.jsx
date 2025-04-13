import ProgressBar from "@ramonak/react-progress-bar";
import {useState,useEffect} from 'react';


export const WebDevelopment=()=>
{
    const [progress,setProgress]=useState(
        {
            Html:0,
            Css:0,
            Boot:0,
            react:0,
            tailwind:0,
            node:0,
            springboot:0,
            django:0,
        }
    );
    useEffect(()=>{

        const timer=setTimeout(()=>{
            setProgress({
                Html:100,
            Css:100,
            Boot:100,
            react:70,
            tailwind:80,
            node:30,
            django:30,
            
            })
        },1000);
},[])
    return(
        <div className="bg-slate-800 rounded-3xl h-fit md:ml-28 md:mr-28 ml-10 mr-10  flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 text-white h-fit gap-y-10 md:gap-y-20 md:gap-x-36 py-12 px-6 gap-x-12">
      
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5  gap-y-2"><h7 className="text-center text-2xl">HTML</h7><ProgressBar completed={progress.Html} bgColor="#3E98C7" labelClassName="hidden"/></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">CSS</h7><ProgressBar completed={progress.Css} bgColor="#3E98C7" labelClassName="hidden"/></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">BOOTSTRAP</h7><ProgressBar completed={progress.Boot} bgColor="#3E98C7" labelClassName="hidden" /></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">REACT.js</h7><ProgressBar completed={progress.react} bgColor="#3E98C7" labelClassName="hidden"/></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">TAILWIND CSS</h7><ProgressBar completed={progress.tailwind} bgColor="#3E98C7" labelClassName="hidden"/></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">NODE</h7><br className="md:hidden"/><ProgressBar completed={progress.node} bgColor="#3E98C7" labelClassName="hidden"/></div>
        <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">DJANGO</h7><br className="md:hidden"/><ProgressBar completed={progress.django} bgColor="#3E98C7" labelClassName="hidden"/></div>

        {/* <div  className="md:w-48 md:h-24 h-36 w-28 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">SPRING BOOT</h7><ProgressBar completed={0} bgColor="#3E98C7" labelClassName="hidden"/></div> */}


        </div>
                
    </div>
    )
}