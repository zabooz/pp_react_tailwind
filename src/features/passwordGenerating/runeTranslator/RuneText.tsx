import { FormattedMessage } from "react-intl";
import { leetspeakTextShortened } from "../../../data/drawer/drawerData";
import { DrawerData } from "../../../interfaces/interfaces";

interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneText({ handleDrawerClick }: Props) {
  return (
    <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">
      <span
        className="font-bold cursor-pointer dark:text-[#0ea5e9] text-[#ea6954] underline underline-offset-2"
        onClick={() => handleDrawerClick(leetspeakTextShortened)}
      >
        <FormattedMessage id="runeText-link"
          defaultMessage="Leetspeak"
          description={"Link to Leetspeak drawer"} />
      </span>{" "}
      <FormattedMessage id="runeText-description"
        defaultMessage="Leetspeak ist eine Art von Textumwandlung, bei der bestimmte Buchstaben und Zeichen durch andere ersetzt werden. Probier es aus, um dein Passwort besser zu schützen."
        description={"Description of Leetspeak"} />{" "}
    </p>
  );
}

export default RuneText;
