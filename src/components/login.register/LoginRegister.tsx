import {  Modal} from "flowbite-react"

import Login from "./Login"
import Register from "./Register"
import { useContext,useState } from "react";
import { ModalContext } from "../../contexts/Contexts";




function LoginRegister() {



  const [wantToRegister, setWantToRegister] = useState<boolean>(false);
  const {openModal, setOpenModal} = useContext(ModalContext);

  return (
    <Modal show={openModal} size="md" popup onClose={() => {
      setOpenModal(false)
      setWantToRegister(false)
      }}>
    <Modal.Header />
    {wantToRegister ? <Register   />  
    : <Login
    handleRegisterClick={() => setWantToRegister(!wantToRegister)}
    />  }

  </Modal>
  )
}

export default LoginRegister
