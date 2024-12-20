import { Modal } from 'flowbite-react';
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { useModalContext } from '../../contexts/modalContext/modalContext';

function LoginRegister() {
    const [wantToRegister, setWantToRegister] = useState<boolean>(false);
    const { openModal, setOpenModal } = useModalContext();

    return (
        <Modal
            dismissible
            show={openModal}
            size="md"
            popup
            onClose={() => {
                setOpenModal(false);
                setWantToRegister(false);
            }}
        >
            <Modal.Header />
            {wantToRegister ? <Register /> : <Login handleRegisterClick={() => setWantToRegister(!wantToRegister)} />}
        </Modal>
    );
}

export default LoginRegister;
