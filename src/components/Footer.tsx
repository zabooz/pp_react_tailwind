import { Footer } from "flowbite-react";

import { Link } from "react-router-dom";

function FooterCom() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              
              src="src/assets/navbar/logo.svg"
              alt="Password Playground Logo"
            />
            <p>Password Playground"</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Link to={"/about-us"}>Über uns</Link>
                <Link to={"/project"}>Projekt</Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to={"/impressum"}>Impressum</Link>
                <Link to={"/privacy-policy"}>DatenSchutz</Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  )
}

export default FooterCom
