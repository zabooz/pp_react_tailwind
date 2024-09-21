import { Button, Modal, Card, Label, TextInput } from "flowbite-react";
import { dataKrakenTrades, dataKrakenGives } from "../../backend/dataKraken";
import { dataKrakenTradesData } from "../../interfaces/interfaces";

import { useLoginContext } from "../../contexts/Contexts";
interface ModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  modalData: ModalData;
}
interface ModalData {
  text: string;
  type: string;
}

function ChangeCredsModal({ openModal, setOpenModal, modalData }: ModalProps) {
  const { change, setChange } = useLoginContext()

  const handelChange = async ({ key, value }: dataKrakenTradesData) => {
    sessionStorage.removeItem("userStats");
    await dataKrakenTrades({ key, value });
    const response = await dataKrakenGives();
    if (response)
      sessionStorage.setItem("userStats", JSON.stringify(response.data));
    setOpenModal(false);
    setChange(!change);
  };
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>{modalData.text} ändern</Modal.Header>
      <Modal.Body>
        <Card className="max-w-sm">
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor={modalData.type} value={modalData.text} />
              </div>
              <TextInput id={modalData.type} type={modalData.type} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor={modalData.type + "confirm"}
                  value={`${modalData.text} wiederholen`}
                />
              </div>
              <TextInput
                id={modalData.type + "confirm"}
                type={modalData.type}
                required
              />
            </div>
            <Button
              type="submit"
              onClick={(e: any) => {
                e.preventDefault();
                handelChange({
                  key: modalData.type,
                  value: (
                    document.getElementById(
                      `${modalData.type}`
                    ) as HTMLInputElement
                  )?.value,
                });
              }}
            >
              Submit
            </Button>
          </form>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

export default ChangeCredsModal;
