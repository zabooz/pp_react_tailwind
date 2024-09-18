import { useContext, useCallback } from "react";
import { ClippyContext } from "../contexts/Contexts";

interface Props {
  password: string;
  children: React.ReactNode;
  type: string;
}

export const CopyToClipBoard = ({ password, children, type }: Props) => {
  const { setPasswords, passwords, setUsernames, usernames } =
    useContext<any>(ClippyContext);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(password).catch((err) => {
      console.error("Failed to copy: ", err);
    });

    if (type === "password") {
      if (passwords.includes(password)) return;
      setPasswords([...passwords, password]);
    } else if (type === "username") {
      if (usernames.includes(password)) return;
      setUsernames([...usernames, password]);
    }
  }, [password]);

  return (
    <span onClick={copyToClipboard} className="cursor-pointer">
      {children}
    </span>
  );
};
// ... existing code ...
