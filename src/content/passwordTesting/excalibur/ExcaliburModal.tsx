import { Modal, Button, Tabs } from "flowbite-react";
import { FaRobot,FaRegLightbulb } from "react-icons/fa6";
import ExcaliburTipps from "./ExcaliburTipps";
import ExcaliburNerdStats from "./ExcaliburNerdStats";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
interface ExcaliburModalProps {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
    nerdStats: ZxcvbnResult
}




function ExcaliburModal({openModal,setOpenModal,nerdStats}:ExcaliburModalProps) {
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <Tabs aria-label="Default tabs" variant="default">
            <Tabs.Item active title="Tipps" icon={FaRegLightbulb}>
              <ExcaliburTipps />
            </Tabs.Item>
            <Tabs.Item  title="Nerd Stats" icon={FaRobot}>
            <ExcaliburNerdStats nerdStats={nerdStats} />
            </Tabs.Item>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ExcaliburModal;
