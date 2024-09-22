import { Footer } from "flowbite-react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSlideContext } from "../contexts/Contexts";

function FooterCom() {
  const [visible, setVisible] = useState(true);
  const {startAnimation} = useSlideContext();
  useEffect(() => {
    // Wenn die Animation startet, Footer ausblenden
    if (startAnimation) {
        setVisible(false); // Footer ausblenden
         setTimeout(() => {
            setVisible(true); // Footer nach 2000ms wieder anzeigen
        }, 2000); // Dauer der Animation


      }
}, [startAnimation]);




  return (
    <Footer container className={`!text-[#9ca3af] dark:bg-slate-700 rounded-none mt-5 ${startAnimation ? '!dark:bg-slate-800' : (visible ? 'dark:bg-slate-700' : 'dark:bg-slate-800')}`}>
       <div className={`w-full ${startAnimation ? '!hidden' : (visible ? '!block' : '!hidden')}`}>
        <div className="grid w-full">
          <div>
          </div>
          <div className="flex flex-wrap items-center md:justify-evenly">
            <div>
              <Footer.Title  title="about" className="!text-[#9ca3af]"/>
              <Footer.LinkGroup col className="!text-[#9ca3af]">
                <Link to={"/about-us" }>Über uns</Link>
                <Link to={"/project"}>Projekt</Link>
                <a href="legacyDesign\index.html">Legacy Design</a>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="!text-[#9ca3af]"/>
              <Footer.LinkGroup col className="!text-[#9ca3af]">
                <Footer.Link href="https://github.com/zabooz">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="!text-[#9ca3af]" />
              <Footer.LinkGroup col className="!text-[#9ca3af]">
                <Link to={"/impressum"}>Impressum</Link>
                <Link to={"/privacy-policy"}>DatenSchutz</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
