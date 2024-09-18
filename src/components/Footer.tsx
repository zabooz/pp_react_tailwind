import { Footer } from "flowbite-react";

import { Link } from "react-router-dom";

function FooterCom() {
  return (
    <Footer container className="!text-[#9ca3af] dark:bg-slate-700 rounded-none mt-5">
      <div className="w-full ">
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
