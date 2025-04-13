import { NavBar } from "../components/NavBar";
import { AboutBtns } from "../components/AboutBtns";
import { createContext, useState } from "react";
import { PersonalDet } from "../components/PersonalDet";
import { Certifications } from "../components/Certifications";
import { Experience } from "../components/Experience";

export const BtnContext = createContext();
export const AboutMe = () => {
  const [persDet, setPrsnDet] = useState(true);
  const [certs, setCerts] = useState(false);
  const [exp, setExp] = useState(false);
  return (
    <>
      <BtnContext.Provider
        value={{ persDet, setPrsnDet, certs, setCerts, exp, setExp }}
      >
        <NavBar />
        <div className="bg-black h-screen inset-0 overflow-y-auto pt-[60px] no-scrollbar">
          <AboutBtns />
          {console.log(persDet)}
          {persDet && (
            <div className="flex justify-center">
              <PersonalDet />
            </div>
          )}
          {exp && <Experience />}
          {certs && <Certifications />}
        </div>
      </BtnContext.Provider>
    </>
  );
};
