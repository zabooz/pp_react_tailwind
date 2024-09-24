import { Modal, Button, Tabs } from "flowbite-react";
import { FaRobot, FaRegLightbulb } from "react-icons/fa6";
import ExcaliburTipps from "./ExcaliburTipps";
import ExcaliburNerdStats from "./ExcaliburNerdStats";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { Points } from "../../../../interfaces/interfaces";
interface ExcaliburModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  nerdStats: ZxcvbnResult | null;
  passwordStrength: {result: number, points: Points} | null;
}

function ExcaliburModal({
  openModal,
  setOpenModal,
  nerdStats,
  passwordStrength
}: ExcaliburModalProps) {

  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header ><span className="!text-gray-300">Excalibur</span></Modal.Header>
        <Modal.Body>
          <Tabs aria-label="Default tabs" variant="default">
            <Tabs.Item active title="Tipps" icon={FaRegLightbulb}>
              <ExcaliburTipps  passwordStrength={passwordStrength} />
            </Tabs.Item>
            <Tabs.Item title="Nerd Stats" icon={FaRobot}>
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
