import  Lottie  from 'lottie-react';
import Animation from '../jsonFiles/community.json';
import logo from '../assets/CFLogo.jpg';


export const  Experience=()=>
{return(
    <div className="flex flex-col items-center">
        <h1 className="md:self-start md:pl-28 px-20 md:mt-10 md:py-5 text-4xl font-medium text-[#8ccbd8] md:text-start text-center "><a href="https://codersforum.netlify.app/" className="underline" target="_blank">CODERS FORUM </a>(<span className="font-thin italic">Co-Lead</span>)<br></br><span className="mt-0"><span className="text-[24px] font-thin italic">(2023-present)</span></span></h1>
        <div className="flex md:items-center  w-screen ">
        <div >
            {/* //md:px-40 px-20 */}
            <p className="text-[#e3e6e0]  text-justify text-xl md:pl-28  md:pr-0 mt-5 md:w-4/5 w-screen px-10">
            
              <li><span > Facilitate coding sessions, contests, and technical challenges to foster skill enhancement and growth among community members.</span> </li>
               <br/>
              <li> Oversee and manage the official <a href="https://www.linkedin.com/company/coders-forum/" target="_blank" className="text-[#8ccbd8] ">LinkedIn</a> page of Coders Forum, ensuring the consistent promotion of events and updates. Additionally, design engaging posters for upcoming contests and initiatives.</li>
                <br/>

             <li>Strategize, plan, and organize technical events and meetups, ensuring smooth execution and valuable experiences for all participants.</li>
               <br/>

               <li>Record and document the key details and outcomes of meet-ups and events, ensuring accurate and comprehensive records for future reference and engagement.</li>
            </p>
        </div>
        <div className="pr-40">
        {/* <Lottie animationData={Animation} className="mt-0 mr-40 h-fit " loop={true} /> */}
        <a href="https://codersforum.netlify.app/" target="_blank"><img src={logo} className="rounded-full mt-0 mr-60 md:block animate-float hidden"></img></a>

        </div>

        </div>
        
    </div>
)

}
// import Lottie from 'lottie-react';
// import Animation from '../jsonFiles/community.json';
// import logo from '../assets/CFLogo.jpg';

// export const Experience = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="md:self-start md:px-40 px-20 md:py-20 py-10 text-4xl text-[#8ccbd8]">
//         Co-LEAD @ CODERS FORUM
//       </h1>
//       <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start md:w-3/4">
//         {/* Paragraph Section */}
//         <div className="w-full md:w-3/4 px-5">
//           <p className="text-white text-justify text-xl">
//             <li>
//               Promote Skill Development: Facilitate coding sessions, contests,
//               and technical challenges to foster skill enhancement and growth
//               among community members.
//             </li>
//             <br />
//             LinkedIn Page Management: Oversee and manage the official LinkedIn
//             page of Coders Forum, ensuring the consistent promotion of events
//             and updates. Additionally, design engaging posters for upcoming
//             contests and initiatives.
//             <br />
//             <br />
//             Event and Meetup Planning: Strategize, plan, and organize technical
//             events and meetups, ensuring smooth execution and valuable
//             experiences for all participants.
//             <br />
//             <br />
//             Documentation and Reporting: Record and document the key details
//             and outcomes of meet-ups and events, ensuring accurate and
//             comprehensive records for future reference and engagement.
//           </p>
//         </div>

//         {/* Animation Section */}
//         <div className="hidden md:block w-full md:w-1/4 pl-44 md:h-1/4 md:mt-0">
//           {/* <Lottie animationData={Animation} loop={true} /> */}
//           <img src={logo} className="rounded-full"></img> 
//         </div>
//       </div>
//     </div>
//   );
// };
