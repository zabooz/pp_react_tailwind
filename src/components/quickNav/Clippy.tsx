import { Tabs, Drawer } from "flowbite-react";
import { useContext, useEffect } from "react";
import { ClippyContext } from "../../contexts/Contexts";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
function Clippy({ isOpen, handleClose }: Props) {
  const { passwords, usernames,setPasswords, setUsernames } = useContext<any>(ClippyContext);


  return (
    <Drawer open={isOpen} onClose={handleClose} className="pt-20">
      <Drawer.Header titleIcon={() => <></>} />
      <div>
        <img
          src="src/assets/clippy/copyCat1.jpeg"
          alt="sanchez"
          className="rounded-full mx-auto  w-24"
        />
        <h2 className="text-4xl font-bold text-[#9ca3af] text-center mt-5">
          Clippy
        </h2>
      </div>
      <Drawer.Items className=" flex justify-center">
        <Tabs
          aria-label="Tabs with underline"
          variant="underline"
          className="justify-center w-[90%] "
        >
          <Tabs.Item
            active
            title="Passwörter"
            className="!w-full asdfsdfgasgadgsadgf"
          >
            <ul>
              {passwords.length > 0 &&
                passwords.map((password: string, index: number) => (
                  <li key={index + password}>{password}</li>
                ))}
            </ul>
            {passwords}
          </Tabs.Item>
          <Tabs.Item title="Benutzernamen" className="">
            <ul>
              {usernames.length > 0 &&
                usernames.map((username: string, index: number) => (
                  <li key={index + username}>{username}</li>
                ))}
            </ul>
            {usernames}
          </Tabs.Item>
        </Tabs>
      </Drawer.Items>
    </Drawer>
  );
}

export default Clippy;
