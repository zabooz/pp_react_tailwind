import { useState } from 'react';
import { useClippyContext } from '../contexts/Contexts';
import { BsClipboard2, BsClipboard2Check } from 'react-icons/bs';

interface Props {
    value: string;
    children: React.ReactNode;
    type: string;
    clippy: boolean;
}

export const CopyToClipBoard = ({ value, children, type, clippy }: Props) => {
    const { setPasswords, passwords, setUsernames, usernames } = useClippyContext();
    const [isCopied, setIsCopied] = useState(false);
    const arr = type === 'password' ? passwords : usernames;
    const copy = (type: string, password: string) => {
        setIsCopied(true);
        navigator.clipboard.writeText(password).catch((err) => {
            console.error('Failed to copy: ', err);
        });
        if (type === 'password') {
            if (passwords.includes(value)) return;
            setPasswords([...passwords, value]);
        } else if (type === 'username') {
            if (usernames.includes(password)) return;
            setUsernames([...usernames, value]);
        }
    };
    return (
        <span
            onClick={() => copy(type, value)}
            className="cursor-pointer flex w-full items-center"
            style={clippy ? { justifyContent: 'space-between' } : { justifyContent: 'space-evenly' }}
        >
            {arr.includes(value) && !clippy ? (
                <BsClipboard2Check size={18} />
            ) : clippy && isCopied ? (
                <BsClipboard2Check size={18} />
            ) : (
                <BsClipboard2 size={18} />
            )}
            {children}
        </span>
    );
};
