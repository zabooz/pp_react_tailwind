import { useState,useContext,useEffect} from "react";
import { ModalContext, LoginContext } from "../contexts/Contexts";
import { Link,useNavigate } from "react-router-dom";
import LoginRegister from "./login.register/LoginRegister";
import { logOut } from "../backend/logout";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,

} from "flowbite-react";




export const NavbarCom = () => {



  const [openModal, setOpenModal] = useState(false);
  const {loggedIn,setLoggedIn,change} = useContext(LoginContext)

  const navigate = useNavigate()
  const [data, setData] = useState<string[]>(["src/assets/profile/default.png","John Doe"])
  

  console.log(loggedIn)
  useEffect(() => {
      if(loggedIn) {
        const storedData= JSON.parse(sessionStorage.getItem("userStats")!)
        setData([storedData[0].avatar,storedData[0].username])
      }

  }, [change,loggedIn])


    
    
    
   


  return (
    <>
    <ModalContext.Provider value={{ openModal, setOpenModal}}>

       <Navbar fluid rounded className="	fixed w-full z-50">

    <NavbarBrand onClick={() => navigate("/")} className="cursor-pointer">
      <img src="src/assets/navbar/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Password Playground
      </span>
    </NavbarBrand>


      <div className="flex md:order-2">
        {loggedIn ? (
        <Dropdown
        arrowIcon={false}
        inline
        label={<Avatar alt="User settings" img={data[0]} />}
      >
        <DropdownHeader>
          <span className="block text-sm">Hallo!  {data[1]}</span>

        </DropdownHeader>
        <DropdownItem onClick={() => navigate("/dashBoard")}>
          Dashboard
          </DropdownItem>
        <DropdownDivider />
        <DropdownItem
        onClick={() => {
          logOut(setLoggedIn)
          navigate("/")
        }}
        >Sign out</DropdownItem>
      </Dropdown>
        ) : (
          <img src="src/assets/navbar/login.svg" className="w-12" alt="login" 
        onClick={() => setOpenModal(true)}
          
          />
        )}

        <NavbarToggle />
      </div>
      <NavbarCollapse>

        <Link to="/password-generating" className="block py-2 px-4 text-custom">
          Erschaffe dein Passwort
        </Link>
        <Link to="/password-testing" className="block py-2 px-4 text-custom">
          Teste dein Passwort
        </Link>
        <Link to="/username-generating" className="block py-2 px-4 text-custom">
          Erfinde deinen Username
        </Link>

      </NavbarCollapse>
    </Navbar>

    <LoginRegister />
    </ModalContext.Provider>
    </>
  );
}
