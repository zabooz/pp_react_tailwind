import { Card, Button} from "flowbite-react";
import { useState } from "react";
import { glyphSorcery } from "./glyphSorceryScript";
import { StorageData } from "../../../interfaces/interfaces";
import { useSlideContext } from "../../../contexts/Contexts";
import Switcher from "../../../utillities/Switcher";
import GlyphHeader from "./GlyphHeader";
import GlpyhText from "./GlpyhText";
import GlyphControl from "./GlyphControl";

function GylphSorcery() {
  const [passwordLength, setPasswordLength] = useState(6);
  const [language, setLanguage] = useState("english");
  const [dataArr, setDataArr] = useState<StorageData[]>([]);
  const { startAnimation } = useSlideContext();

  const handeClick = async () => {
    const data = await glyphSorcery(language, passwordLength);
    setDataArr([...dataArr, data]);
  };

  return (
    <Card
      className={`max-w-md mx-auto border-4 ${
        startAnimation ? "animate-fade-out" : "animate-fade-in"
      } dark:hover:shadow-2xl transition-shadow duration-1000 `}
      imgAlt="Glyph Sorcery picture"
      imgSrc="/assets/passwordGenerating/glyphSorcery.webp"
    >
      <GlyphHeader />
      <GlpyhText />
      <GlyphControl
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        setLanguage={setLanguage}
      />
      <Switcher app="glyphSorcery" data={dataArr} />
      <Button onClick={handeClick} className="mt-3 bg-[#ea6954]">
        Los geht's
      </Button>
    </Card>
  );
}

export default GylphSorcery;
