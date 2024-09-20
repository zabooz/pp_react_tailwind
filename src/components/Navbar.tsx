import { useState, useEffect } from "react";
import {
  ModalContext,
  useLoginContext,
  useSlideContext,
} from "../contexts/Contexts";
import { Link, useNavigate } from "react-router-dom";
import LoginRegister from "./login.register/LoginRegister";
import { logOut } from "../backend/logout";
import {
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";

export const NavbarCom = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loggedIn, setLoggedIn, change } = useLoginContext();
  const {
    nextSlide,
    setNextSlide,
    direction,
    directionFunc,
  } = useSlideContext();
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


  useEffect(() => {
    directionFunc(nextSlide)
    console.log(direction,nextSlide)
  },[nextSlide])


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Sanfte Scrollbewegung
    });
  };

  return (
    <>
      <ModalContext.Provider value={{ openModal, setOpenModal }}>
        <Navbar
          fluid
          rounded
          className="	fixed w-full z-20 dark:bg-slate-700 !justify-center"
        >
          <NavbarBrand  onClick={() => {
            setNextSlide(0)
            navigate("/")
            scrollToTop()
          }
            
            
            
            } className="cursor-pointer">
            <img
              src="src/assets/landingPage/logo_transparent.png"
              className="mr-3 h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-3xl font-semibold  md:hidden lg:block dark:text-gray-400">
              Password Playground
            </span>
          </NavbarBrand>

          <div className="flex md:order-2 ">
            <DarkThemeToggle />
            {loggedIn ? (
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="User settings"
                    img={data[0]}
                    className="hidden md:block"
                  />
                }
                className=""
              >
                <DropdownHeader>
                  <span className="block text-sm">Hallo! {data[1]}</span>
                </DropdownHeader>
                <DropdownItem onClick={() => navigate("/dashBoard")}>
                  Dashboard
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
                className="w-12 cursor-pointer hidden md:block"
                alt="login"
                onClick={() => setOpenModal(true)}
              />
            )}

            <NavbarToggle />
          </div>
          <NavbarCollapse className=" dark:text-gray-400 text-lg  justify-between">
            <Link
              to="/password-generating"
              className="py-2 px-4 font-bold text-lg tracking-wider dark:text-gray-400 dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
              onClick={() => {
                setNextSlide(1)
              }}
            >
              <p>
                Erstelle<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">deine Passwort</span>
              </p>
            </Link>
            <Link
              to="/password-testing"
              className=" py-2 px-4 text-lg font-bold tracking-wider dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
              onClick={() => {
                setNextSlide(2)
              }}
            >
              <p>
                Teste<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">dein Passwort</span>
              </p>
            </Link>
            <Link
              to="/username-generating"
              className="py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
              onClick={() => {
                setNextSlide(3)
              }}
            >
              <p>
                Erfinde<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">deinen Username</span>
              </p>
            </Link>
            {loggedIn ? (
              <div className="md:hidden">
                <p
                  onClick={() => {
                    setNextSlide(4)
                    navigate("/dashBoard")
                  }}
                  className="flex gap-2 cursor-pointer py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
                >
                  Dashboard
                  <img
                    src={data[0]}
                    className="w-6 cursor-pointer rounded"
                    alt="login"
                    onClick={() => setOpenModal(true)}
                  />
                </p>
                <p
                  onClick={() => {
                    logOut(setLoggedIn);
                    navigate("/");
                  }}
                  className="cursor-pointer py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
                >
                  Log out
                </p>
              </div>
            ) : (
              <a
                className="w-12 cursor-pointer md:hidden py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:underline underline-offset-8"
                onClick={() => setOpenModal(true)}
              >
                Login
              </a>
            )}
          </NavbarCollapse>
        </Navbar>

        <LoginRegister />
      </ModalContext.Provider>
    </>
  );
};
