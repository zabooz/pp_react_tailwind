import OffCanvas from "../../components/OffCanvas";
import GylphSorcery from "./glyphSorcery/GylphSorcery";
import PictureMagic from "./pictureMagic/PictureMagic.tsx";
import RuneTranslator from "./runeTranslator/RuneTranslator.tsx";
import { leetspeakTextShortened } from "../../data/drawer/drawerData";

import { DrawerData } from "../../interfaces/interfaces";

import { useState } from "react";
function PasswordGenerating() {
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: "",
    paragraphs: [],
  });

  const handleClickDrawer = (content: DrawerData) => {
    setDrawerShow(!drawer);
    setDrawerContent(content);
  };
  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };

  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3">
        <RuneTranslator
          handleDrawerClick={() => handleClickDrawer(leetspeakTextShortened)}
        />
        <PictureMagic />
        <GylphSorcery />
      </main>
      <OffCanvas
        handleClose={handleCloseDrawer}
        show={drawer}
        data={drawerContent}
      ></OffCanvas>

      <div className="quickNav"></div>
      <div className="canvas"></div>
    </>
  );
}

export default PasswordGenerating;
