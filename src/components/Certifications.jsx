import data from '../jsonFiles/certifications';
import badges from '../jsonFiles/badges';

export const Certifications=()=>
{
    return (
        <>
        <div>
            <div className="flex flex-col justify-center items-center gap-16 md:ml-20 md:mt-16">
                <h1 className="md:self-start  text-4xl text-[#8ccbd8]">CERTIFICATIONS</h1>
                <div className=" md:self-start md:ml-20 grid md:grid-cols-4 grid-cols-2 mr-4 ml-4 md:gap-40 gap-14 md:gap-y-16">
                    {data.map((certs)=>{
                        return(
                        <div className=" flex flex-col items-center justify-center w-48 gap-y-3">
                            <h1 className="text-2xl text-slate-200 font-medium text-center">{certs.title}</h1>
                            <img src={certs.image} className="h-52 w-48 rounded-md hover:border-[#8ccbd8] hover:border-4 "></img>
                            <a className="text-xl hover:text-[#e3e6e0] text-[#8ccbd8] " target='_blank' href={certs.link}>View Certificate</a>
                         </div>)})}
       
                </div>
                <h1 className="md:self-start text-4xl text-[#8ccbd8]">CERTIFICATES & BADGES</h1>
                <div className=" md:self-start md:ml-20 grid md:grid-cols-4 grid-cols-2 mr-4 ml-4 md:gap-40 gap-14 md:gap-y-16">
                    {badges.map((certs)=>{
                        return(
                        <div className=" flex flex-col items-center justify-center w-48 gap-y-3">
                            <h1 className="text-2xl text-slate-200 font-medium text-center">{certs.title}</h1>
                            <img src={certs.image} className="h-52 w-48 rounded-md hover:border-[#8ccbd8] hover:border-4 "></img>
                            <a className="text-xl hover:text-[#e3e6e0] text-[#8ccbd8] " target='_blank' href={certs.link}>View Certificate</a>
                         </div>)})}
                </div>
            </div>
        </div>
        </>
    )
}