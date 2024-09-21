import { useState } from "react";
import { useClippyContext } from "../contexts/Contexts";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";

interface Props {
  password: string;
  children: React.ReactNode;
  type: string;
  clippy: boolean;
}

export const CopyToClipBoard = ({
  password,
  children,
  type,
  clippy,
}: Props) => {
  const { setPasswords, passwords, setUsernames, usernames } =
    useClippyContext();
  const [copied, setCopied] = useState<string>("password");

  const copy = (type: string, password: string) => {
    navigator.clipboard.writeText(password).catch((err) => {
      console.error("Failed to copy: ", err);
    });
    setCopied(password);
    if (type === "password") {
      if (passwords.includes(password)) return;
      setPasswords([...passwords, password]);
    } else if (type === "username") {
      if (usernames.includes(password)) return;
      setUsernames([...usernames, password]);
    }
  };

  return (
    <span
      onClick={() => copy(type, password)}
      className="cursor-pointer flex w-full items-center"
      style={
        clippy
          ? { justifyContent: "space-between" }
          : { justifyContent: "space-evenly" }
      }
    >
      {copied === password ? (

        <BsClipboard2Check size={18} />

      ) : (

        <BsClipboard2 size={18} />


      )}
      {children}
    </span>
  );
};
