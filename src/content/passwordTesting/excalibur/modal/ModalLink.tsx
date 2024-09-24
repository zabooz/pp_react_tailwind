import { useExcalibur } from "../../../../contexts/Contexts";

function ModalLink() {
  const { setShowModal, showModalLink, modalLinkText } = useExcalibur();

  return (
    showModalLink && (
      <span
        onClick={() => setShowModal(true)}
        className="cursor-pointer font-bold text-gray-400 underline underline-offset-2 hover:text-[#0891b2d9]"
      >
        {modalLinkText}
      </span>
    )
  );
}
export default ModalLink;
