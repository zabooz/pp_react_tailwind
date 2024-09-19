
import { useClippyContext } from "../contexts/Contexts";

interface Props {
  password: string;
  children: React.ReactNode;
  type: string;
}

export const CopyToClipBoard = ({ password, children, type }: Props) => {
  const { setPasswords, passwords, setUsernames, usernames } = useClippyContext()
  console.log("sf")
  const copy = (type:string,password:string) => {
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
  };

  return (
    <span onClick={()=>copy(type,password)} className="cursor-pointer">
      {children}
    </span>
  );
};

