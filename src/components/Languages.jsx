import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useState,useEffect} from 'react';


export const Languages=()=>{
  const [progress,setProgress]=useState(
    {
        java:0,
        python:0,
        js:0,
        html:0
    }
);

useEffect(()=>{
  const timer=setTimeout(()=>{
   setProgress({ 
    java:80,
    python:60,
    js:70,
    html:100

   })

  },500)
},[]);


  return (
    <div className="bg-slate-800 rounded-3xl h-fit md:ml-28 md:mr-28 ml-10 mr-10  flex justify-center">
        <div className="grid md:grid-cols-4 grid-cols-2 text-white h-fit gap-y-10 md:gap-y-20 md:gap-x-36 py-12 px-6 ">
      
        <div className="md:w-48 md:h-48 h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">JAVA</h7><CircularProgressbar value={progress.java}  /></div>
        <div className="md:w-48 md:h-48  h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">PYTHON</h7><CircularProgressbar value={progress.python}  /></div>
        <div className="md:w-48 md:h-48  h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">JAVA SCRIPT</h7><CircularProgressbar value={progress.js}  /></div>
        {/* <div className="md:w-48 md:h-48  h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">C</h7><CircularProgressbar value={66}  /></div> */}
        <div className="md:w-48 md:h-48  h-36 w-36 flex flex-col md:gap-y-5 gap-y-2"><h7 className="text-center text-2xl">HTML</h7><CircularProgressbar value={progress.html}  /></div>


        </div>
                
    </div>
  )
}