import { useExcalibur } from '../../../../contexts/excaliburContext/excaliburContext';

function ModalLink() {
    const { setOpenModal, showModalLink, modalLinkText } = useExcalibur();

    return (
        showModalLink && (
            <span
                onClick={() => setOpenModal(true)}
                className="cursor-pointer font-bold text-gray-400 underline lg:hidden underline-offset-2 hover:text-[#0891b2d9]"
            >
                {modalLinkText}
            </span>
        )
    );
}
export default ModalLink;
