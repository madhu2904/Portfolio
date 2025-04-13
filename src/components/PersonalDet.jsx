import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { GiFlyingFlag } from "react-icons/gi";
import { CiMail } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import MyResume from '../assets/My Resume (2).pdf';
import { FaDownload } from "react-icons/fa6";







export const PersonalDet=()=>{
    return(
    // <div className="flex flex-col justify-center ">
    <div className="grid md:grid-cols-2 grid-cols-1 w-5/6 mt-10 gap-10 px-6">
        <div className="col-span-2"><h1 className="md:text-7xl text-[#8ccbd8] font-semibold text-5xl text-center">About Me</h1></div>
        <div className="text-[#e3e6e0]  text-xl col-span-2 text-justify"><p>Hi, I’m Madhumitha V, a developer proficient in React and Java, with a passion for crafting innovative solutions and designing intuitive user interfaces that merge creativity with functionality. Enthusiastic about blockchain technology, I stay updated on emerging trends and seek opportunities to contribute to impactful projects while expanding my expertise.

</p></div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><MdDriveFileRenameOutline className="inline text-2xl mb-1"/> Name :</span> Madhumitha V</div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><IoIosCall className="inline text-2xl mb-1"/> Phone Number :</span> 6379286811</div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><GiFlyingFlag  className="inline text-2xl mb-1"/> Nationality :</span> Indian</div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><CiMail  className="inline text-2xl mb-1"/> Email :</span> madhumithavelusamy0@gmail.com</div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><MdOutlineWorkOutline  className="inline text-2xl mb-1"/> Internships Completed :</span> 1</div>
        <div className="text-white md:col-span-1 text-2xl col-span-2"><span className="text-[#8ccbd8]"><LiaLanguageSolid  className="inline text-2xl mb-1"/> Languages :</span> English, Tamil, Hindi</div>

        <div className="col-span-2 text-center mt-2"><button className=" w-fit align-middle rounded-md bg-[#8ccbd8] font-normal text-black text-2xl p-2 mb-4 hover:bg-slate-800 hover:text-[#e3e6e0]"><a href={MyResume} download="Madhumitha_Resume.pdf"><span className="flex gap-3"><span className="font-medium">Resume </span><FaDownload /> </span> </a> </button></div>




    </div>
    // {/* </div> */}
    )
}