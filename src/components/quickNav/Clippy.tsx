import { Tabs, Drawer } from "flowbite-react";

import { useClippyContext } from "../../contexts/Contexts";
import { CopyToClipBoard } from "../CopyToClipBoard";
import { FaRegTrashAlt } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}
function Clippy({ isOpen, handleClose }: Props) {
  const { passwords, usernames, setPasswords, setUsernames } =
    useClippyContext();

  const handleDelete = (index: number) => {
    const newPasswords = [...passwords];
    const newUsernames = [...usernames];
    newPasswords.splice(index, 1);
    newUsernames.splice(index, 1);
    setPasswords(newPasswords);
    setUsernames(newUsernames);
  };

  return (
    <Drawer open={isOpen} onClose={handleClose} className="pt-20">
      <Drawer.Header titleIcon={() => <></>} />
      <div>
        <img
          src="/assets/clippy/clippy.webp"
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
                passwords.map((password: string, index: number) => {
                  return (
                    <li
                      key={password}
                      className="font-semibold text-lg flex items-center gap-3 text-gray-400"
                    >
                      <FaRegTrashAlt onClick={() => handleDelete(index)} />
                      <CopyToClipBoard
                        clippy={true}
                        type={"password"}
                        value={password}
                      >
                        {password}
                      </CopyToClipBoard>
                    </li>
                  );
                })}
            </ul>
          </Tabs.Item>
          <Tabs.Item title="Benutzernamen">
            <ul>
              {usernames.length > 0 &&
                usernames.map((username: string, index: number) => (
                  <>
                    <li
                      key={username}
                      className="font-semibold text-lg text-gray-400 flex items-center gap-3"
                    >
                      <FaRegTrashAlt onClick={() => handleDelete(index)} />
                      <CopyToClipBoard
                        clippy={true}
                        type={"username"}
                        value={username}
                      >
                        {username}
                      </CopyToClipBoard>
                    </li>
                  </>
                ))}
            </ul>
          </Tabs.Item>
        </Tabs>
      </Drawer.Items>
    </Drawer>
  );
}

export default Clippy;
