import { Button } from "flowbite-react";
import MojoControl from "../MojoControl";
import MojoExtendetTable from "./MojoExtendetTable";
import MojoExtAllResultsLink from "./MojoExtAllResultsLink";
import { FormattedMessage } from "react-intl";
import { useBruteForceContext } from "../../../../contexts/bruteForceContext/bruteForceContext";
import { useSlideContext } from "../../../../contexts/slideProvider/slideContext";

function MojoExtendet() {
  const { startAnimation } = useSlideContext();

  const { setBruteForceResults } = useBruteForceContext();

  return (
    <div
      className={`  absolute top-0 min-h-[680px] rounded-lg  right-0 w-[500px] hidden border-2  border-slate-700 dark:border-slate-700  ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      }  lg:flex flex-col -z-10 `}
    >
      <MojoExtendetTable />
      <div className="my-auto ms-auto flex flex-row-reverse items-center w-full justify-evenly">
        <Button className="w-1/3" onClick={() => setBruteForceResults([])}>
          <FormattedMessage id="clearMojo"  defaultMessage={"Löschen"} />
        </Button>

        <MojoExtAllResultsLink />
      </div>
      <MojoControl className="mb-6 px-5"/>
    </div>
  );
}

export default MojoExtendet;
