import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { login } from './backend/login.ts';
import ForgotPassword from './ForgotPassword.tsx';
import { useLoginContext } from '../../contexts/loginContext/loginContext.ts';
import { useModalContext } from '../../contexts/modalContext/modalContext.ts';
import { LoginData } from '../../interfaces/interfaces';
interface Props {
  handleRegisterClick: () => void;
}

function Login({ handleRegisterClick }: Props) {
  const [userData, setUserData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const { setOpenModal } = useModalContext();
  const { setLoggedIn } = useLoginContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleLoginClick = async () => {
    try {
      const result = await login(userData);
      if (result) {
        setLoggedIn(true);
        setOpenModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Log in oder auch nicht
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Benutzername" />
            </div>
            <TextInput
              id="username"
              placeholder="KartoffelPolizist"
              required
              autoFocus
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Passwort" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between">
            <span
              className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              onClick={() => {
                setShowPassword(true);
              }}
            >
              Passwort vergessen?
            </span>
          </div>
          <div className="w-full">
            <Button onClick={handleLoginClick}>Log in </Button>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
            Nicht registriert?&nbsp;
            <span
              className="text-cyan-700 hover:underline dark:text-cyan-500"
              onClick={handleRegisterClick}
            >
              Erstelle Account
            </span>
          </div>
        </div>
      </Modal.Body>
      <ForgotPassword
        setShowPassword={setShowPassword}
        showPassword={showPassword}
      />
    </>
  );
}

export default Login;
