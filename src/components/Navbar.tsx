import { useState,  useEffect} from "react";
import { ModalContext, useLoginContext} from "../contexts/Contexts";
import { Link, useNavigate } from "react-router-dom";
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
  DarkThemeToggle
} from "flowbite-react";

export const NavbarCom = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loggedIn, setLoggedIn, change } = useLoginContext();

  const navigate = useNavigate();
  const [data, setData] = useState<string[]>([
    "src/assets/profile/default.png",
    "John Doe",
  ]);

  useEffect(() => {
    if (loggedIn) {
      const storedData = JSON.parse(sessionStorage.getItem("userStats")!);
      setData([storedData[0].avatar, storedData[0].username]);
    }
  }, [change, loggedIn]);

  return (
    <>
      <ModalContext.Provider value={{ openModal, setOpenModal }}>
        <Navbar
          fluid
          rounded
          className="	fixed w-full z-20 dark:bg-slate-700 !justify-center"
        >
          <NavbarBrand onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src="src/assets/landingPage/logo_transparent.png"
              className="mr-3 h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-3xl font-semibold hidden lg:block dark:text-gray-400">
              Password Playground
            </span>
          </NavbarBrand>

          <div className="flex md:order-2 ">
            {loggedIn ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={<Avatar alt="User settings" img={data[0]} />}
              >
                <DropdownHeader>
                  <span className="block text-sm">Hallo! {data[1]}</span>
                </DropdownHeader>
                <DropdownItem onClick={() => navigate("/dashBoard")}>
                  Dashboard
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                  <span>Dark mode</span> <DarkThemeToggle />
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    logOut(setLoggedIn);
                    navigate("/");
                  }}
                >
                  Sign out
                </DropdownItem>
              </Dropdown>
            ) : (
              <img
                src="src/assets/navbar/login.svg"
                className="w-12 cursor-pointer"
                alt="login"
                onClick={() => setOpenModal(true)}
              />
            )}

            <NavbarToggle />
          </div>
          <NavbarCollapse className=" dark:text-gray-400 text-lg ">
            <Link
              to="/password-generating"
              className="py-2 px-4 font-bold text-lg tracking-wider dark:text-gray-400 dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
            >
              Erschaffe dein Passwort
            </Link>
            <Link
              to="/password-testing"
              className=" py-2 px-4 text-lg font-bold tracking-wider dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
            >
              Teste dein Passwort
            </Link>
            <Link
              to="/username-generating"
              className="py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
            >
              Erfinde deinen Username
            </Link>
            <Link to="/" className="py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8 cursor-pointer">
              Hallo {data[1]}!
            </Link>
          </NavbarCollapse>
        </Navbar>

        <LoginRegister />
      </ModalContext.Provider>
    </>
  );
};
