import {NavBar} from '../components/NavBar';
import {Email} from '../components/Email';
import {useRef} from 'react';
import {SocialMedia} from '../components/SocialMedia';

export const Contact=()=>
{
    let arr=[1,2,3,4,5,6,7,8,9,10];
   
    return(
        <div className="bg-black inset-0 overflow-y-auto no-scrollbar h-screen ">
            <NavBar/>
            
            <div className="flex flex-col md:flex-row justify-center items-center  h-screen overflow-y-auto-auto gap-y- gap-x-20 pt-52 md:pt-20">
            <div className=" order-1 md:order-1">
            <Email />
            </div>
            <SocialMedia/>
            
            </div>
            
        </div>
    );
}
