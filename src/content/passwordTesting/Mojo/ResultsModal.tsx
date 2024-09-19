import { Button, Modal, Table } from "flowbite-react";
import { updateAttempts } from "../../../utillities/updateResult";

import { useEffect, useRef } from "react";
interface ResultsModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  bruteForceResults: string[][];
}

function ResultsModal({
  openModal,
  setOpenModal,
  bruteForceResults,
}: ResultsModalProps) {
  const tBody = useRef<HTMLTableSectionElement | null>(null);

  useEffect(() => {
    if (openModal) {
      const timer = setTimeout(() => {
        if (tBody.current) {
          updateAttempts(bruteForceResults, tBody.current);
        }
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [openModal]);

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Bruteforce  Ergebnisse</Modal.Header>
      <Modal.Body>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Passwort</Table.HeadCell>
              <Table.HeadCell>Versuche</Table.HeadCell>
              <Table.HeadCell>Modus</Table.HeadCell>
              <Table.HeadCell>Zeit</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y" ref={tBody}></Table.Body>
          </Table>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Schließen</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ResultsModal;
