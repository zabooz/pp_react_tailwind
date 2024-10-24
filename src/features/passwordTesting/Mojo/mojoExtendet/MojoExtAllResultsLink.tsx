import { useBruteForce } from "../../../../contexts/Contexts";


function MojoExtAllResultsLink() {
    const { setOpenResultModal } = useBruteForce();

    return (
      <span
        onClick={() => setOpenResultModal(true)}
        className="cursor-pointer font-bold text-gray-400 underline  hover:text-[#0891b2d9]  underline-offset-4"
      >
        Siehe alle Ergebnisse!
      </span>
    );
}

export default MojoExtAllResultsLink
