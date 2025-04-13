import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0d6glzi", "template_rr0jsz6", form.current, {
        publicKey: "ombTsqnrxyAM9wYrd",
      })
      .then(
        () => {
          
          toast.success("Mail sent successfully, You will be contacted soon");
          form.current.reset();
        },
        (error) => {
          
          toast.error("Failed to send Mail, Please Reach out via other platforms.");
          console.log("FAILED...", error.text);
          form.current.reset();
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center gap-y-6 h-5/6  px-10 py-10 items-centre bg-slate-800 rounded-md text-xl font-mono focus-within:shadow-lg focus-within:shadow-[#8ccbd8] "
      >
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="w-96 px-2 h-12 rounded-md  bg-slate-200 focus:outline-slate-800"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="user_email"
          className="w-96 h-12 px-2 rounded-md bg-slate-200"
          required
        />

        <input
          type="text"
          name="user_subject"
          placeholder="Subject"
          className="w-96 h-12 px-2 rounded-md bg-slate-200"
          required
        />

        <textarea
          name="message"
          placeholder="Type Your Message Here"
          className="w-96 h-44 px-2 py-2 rounded-md bg-slate-200"
          required
        />
        <input
          type="submit"
          value="Send"
          className="bg-[#8ccbd8] w-28 h-10 text-2xl font-semibold rounded-md text-slate-800 hover:text-slate-100 hover:bg-black hover:border-slate-100 border-[#8ccbd8] border-2 cursor-pointer"
        />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
