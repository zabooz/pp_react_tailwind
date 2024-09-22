import { useState, useEffect } from "react";
import {
  ModalContext,
  useLoginContext,
  useSlideContext,
} from "../contexts/Contexts";
import { useNavigate } from "react-router-dom";
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
  const { directionFunc } = useSlideContext();
  const navigate = useNavigate();
  const [data, setData] = useState<string[]>([
    "/assets/profile/default.png",
    "John Doe",
  ]);

  useEffect(() => {
    if (loggedIn) {
      const storedData = JSON.parse(sessionStorage.getItem("userStats")!);
      setData([storedData[0].avatar, storedData[0].username]);
    }
  }, [change, loggedIn]);

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
          className="	fixed w-full z-20 dark:bg-slate-700 bg-gray-200 !justify-center h-16"
        >
          <NavbarBrand
            onClick={() => {
              directionFunc(0);
              setTimeout(() => {
                navigate("/");

                scrollToTop();
              }, 800);
            }}
            className="cursor-pointer"
          >
            <img
              src="/assets/landingPage/logo_transparent_navbar.png"
              className="mr-3 h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-3xl font-semibold hidden sm:block  md:hidden lg:block dark:text-gray-400">
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
                src="/assets/navbar/login.svg"
                className="w-12 cursor-pointer hidden md:block"
                alt="login"
                onClick={() => setOpenModal(true)}
              />
            )}

            <NavbarToggle />
          </div>
          <NavbarCollapse className=" dark:text-gray-400 text-lg  justify-between">
            <a
              className="py-2 px-4 font-bold text-lg tracking-wider dark:text-gray-400 dark:hover:text-[#0891b2d9] hover:text-[#ea6954] hover:underline underline-offset-8 cursor-pointer"
              onClick={() => {
                directionFunc(1);
                setTimeout(() => {
                  scrollToTop();
                  navigate("/password-generating");
                }, 800);
              }}
            >
              <p>
                Erstelle<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">deine Passwort</span>
              </p>
            </a>
            <a
              className=" py-2 px-4 text-lg font-bold tracking-wider dark:hover:text-[#0891b2d9] hover:text-[#ea6954] hover:underline underline-offset-8 cursor-pointer"
              onClick={() => {
                directionFunc(2);
                setTimeout(() => {
                  scrollToTop();
                  navigate("/password-testing");
                }, 800);
              }}
            >
              <p>
                Teste<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">dein Passwort</span>
              </p>
            </a>
            <a
              className="py-2 px-4 text-lg tracking-wider font-bold dark:hover:text-[#0891b2d9] hover:text-[#ea6954] hover:underline underline-offset-8 cursor-pointer"
              onClick={() => {
                directionFunc(3);
                setTimeout(() => {
                  scrollToTop();
                  navigate("/username-generating");
                }, 800);
              }}
            >
              <p>
                Erfinde<span className="inline xl:hidden">!</span>{" "}
                <span className="hidden xl:inline">deinen Username</span>
              </p>
            </a>
            {loggedIn ? (
              <div className="md:hidden">
                <p
                  onClick={() => {
                    directionFunc(4);
                    scrollToTop();
                    setTimeout(() => {
                      navigate("/dashBoard");
                    }, 800);
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
