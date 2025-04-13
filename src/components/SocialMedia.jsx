import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <>
      <div className="md:h-5/6 grid md:grid-cols-2 md:grid-rows-3 grid-rows-2 grid-cols-4  md:w-2/5 w-4/5 gap-x-11 md:gap-y-8 ">
        <div className="md:col-span-2 col-span-4 pb-7">
          <h1 className="md:text-4xl text-2xl text-[#8ccbd8] text-center font-semibold">
            OPEN TO CONNECT, COLLABORATE, AND CREATE.
          </h1>
          <p className="text-[#e3e6e0] hidden md:block text-center px-3 text-xl font-normal pt-6 ">
            Got a thought, idea, or opportunity? Just drop me a mail.
            <p>Or catch me on WhatsApp, LinkedIn, Insta, or GitHub </p>
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/madhumitha-velusamy-80a209254/"
          target="_blank"
        >
          <div className=" col-span-1 flex flex-col gap-y-2 pt-2 md:bg-slate-800 items-center justify-center rounded-sm hover:shadow-lg hover:shadow-[#e3e6e0] ">
            <FaLinkedin className="text-[#e3e6e0] hover:text-[#8ccbd8] text-5xl md:text-8xl " />
            <p className="text-white hidden md:block text-2xl font-normal">
              Let's Connect
            </p>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=916379286811&text=Hey+hi%2C+I'm+interested+to+collaborate+with+you.&type=phone_number&app_absent=0"
          target="_blank"
        >
          <div className=" col-span-1 flex flex-col gap-y-2 pt-2 md:bg-slate-800 items-center justify-center rounded-sm hover:shadow-lg hover:shadow-[#e3e6e0]">
            <FaWhatsappSquare className="text-[#e3e6e0] text-5xl md:text-8xl hover:text-[#8ccbd8]" />
            <p className="text-white hidden md:block text-2xl font-normal">
              Ping Me
            </p>
          </div>
        </a>
        <a href="https://www.instagram.com/madhumithav_2904/" target="_blank">
          <div className=" col-span-1 flex flex-col gap-y-2 pt-2 md:bg-slate-800 items-center justify-center rounded-sm hover:shadow-lg hover:shadow-[#e3e6e0]">
            <FaInstagramSquare className="text-[#e3e6e0] text-5xl md:text-8xl hover:text-[#8ccbd8]" />
            <p className="text-white hidden md:block text-2xl font-normal">
              Follow Me On
            </p>
          </div>
        </a>
        <a href="https://github.com/madhu2904" target="_blank">
          <div className=" col-span-1 flex flex-col gap-y-2 pt-2 md:bg-slate-800 items-center justify-center rounded-sm hover:shadow-lg hover:shadow-[#e3e6e0]">
            <FaGithub className="text-[#e3e6e0] text-5xl md:text-8xl hover:text-[#8ccbd8]" />
            <p className="text-white hidden md:block text-2xl font-normal">
              View My code
            </p>
          </div>
        </a>
      </div>
    </>
  );
};
