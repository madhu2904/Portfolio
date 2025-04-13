import React from 'react';
import  Lottie  from 'lottie-react';
import Animation from '../jsonFiles/e5Y2RmOI4L.json';


export const LoadingScreen=()=>
{
    return (
    <>
    <div className="fixed inset-0 flex justify-center items-center bg-black h-screen w-screen">
    <div className="w-3/6">
    <Lottie animationData={Animation} loop={true} />
    </div>
    </div>
    </>
    )

}