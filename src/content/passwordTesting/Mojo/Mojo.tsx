import { lazy } from "react";

const TextCanvas = lazy(() => import("../../../components/TextCanvas"));
const ResultsModal = lazy(() => import("./ResultsModal"));
import { useSlideContext } from "../../../contexts/Contexts";
import MojoControll from "./MojoControl";
import { useBruteForce } from "../../../contexts/Contexts";

import MojoHeader from "./MojoHeader";
import MojoTextContent from "./MojoTextContent";
import MojoAllResultsLink from "./MojoAllResultsLink";
import MojoExtendet from "./MojoExtendet";
import MojoTable from "./MojoTable";
import MojoExtendetTextButton from "./MojoExtendetTextButton";
import { Card } from "flowbite-react";
interface Props {
  mojoGrow: boolean;
  handleCardGrow: (grow: boolean) => void;
  onSite: boolean;
  excaliburGrow: boolean;
}

function Mojo({ mojoGrow, handleCardGrow, onSite }: Props) {
  const { setOpenResultModal, bruteForceResults, openResultModal } =
    useBruteForce();
  const { startAnimation } = useSlideContext();
  const { setDrawerShow, drawer, drawerContent } = useBruteForce();

  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };

  return (
    <div
      className={`flex  ${
        !onSite ? "" : mojoGrow ? "lg:growBox" : "lg:shrinkBox"
      }  min-h-[670px] transition-all rounded dark:border-slate-700 max-w-[508px] lg:max-w-[1003px] relative dark:hover:shadow-2xl cursor-default duration-1000 `}
    >
      <Card
        className={`max-w-lg ${
          startAnimation ? "animate-fade-out" : "animate-fade-in "
        }  border-2 border-r-1`}
        imgAlt="Mojo APP picture"
        imgSrc="/assets/passwordTesting/mojo.webp"
      >
        <MojoHeader />
        <MojoTextContent />
        <MojoTable />
        <MojoAllResultsLink />
        <MojoControll className="block lg:hidden" />
        <MojoExtendetTextButton
          className="hidden lg:block dark:text-gray-400"
          handleCardGrow={handleCardGrow}
          mojoGrow={mojoGrow}
        />
      </Card>
      <MojoExtendet />
      <TextCanvas
        handleClose={handleCloseDrawer}
        show={drawer}
        data={drawerContent}
      />
      <ResultsModal
        openModal={openResultModal}
        setOpenModal={setOpenResultModal}
        bruteForceResults={bruteForceResults}
      />
    </div>
  );
}

export default Mojo;
