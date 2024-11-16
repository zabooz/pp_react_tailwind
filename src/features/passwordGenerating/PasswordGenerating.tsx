import React, { useRef, useState } from 'react';

const TextCanvas = React.lazy(() => import('../../components/TextCanvas.tsx'));
import GylphSorcery from './glyphSorcery/GylphSorcery.tsx';
import PictureMagic from './pictureMagic/PictureMagic.tsx';
import RuneTranslator from './runeTranslator/RuneTranslator.tsx';
import { leetspeakTextShortened } from '../../data/drawer/drawerData.ts';
import { DrawerData } from '../../interfaces/interfaces.ts';



function PasswordGenerating() {
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: '',
    paragraphs: [],
  });

  const handleClickDrawer = (content: DrawerData) => {
    setDrawerShow(!drawer);
    setDrawerContent(content);
  };
  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };

  const scrollDiv1 = useRef<HTMLImageElement>(null);
  const scrollDiv2 = useRef<HTMLImageElement>(null);
  const scrollToElement = (scroll: React.RefObject<HTMLImageElement>) => {
    const { current } = scroll;

    if (current !== null) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="grid grid-cols-1  gap-4  lg:grid-cols-3 w-full content-center min-h-[90vh]">
        <RuneTranslator
          handleDrawerClick={() => handleClickDrawer(leetspeakTextShortened)}
        />
        <img
          src="/assets/landingPage/arrow.svg"
          alt="arrow"
          className="max-w-[4rem] cursor-pointer lg:hidden  rotate-180 mx-auto mt-8 "
          onClick={() => scrollToElement(scrollDiv1)}
          ref={scrollDiv1}
        />
        <PictureMagic />
        <img
          src="/assets/landingPage/arrow.svg"
          alt="arrow"
          className="max-w-[4rem] cursor-pointer lg:hidden rotate-180 mx-auto mt-4 "
          onClick={() => scrollToElement(scrollDiv2)}
          ref={scrollDiv2}
        />
        <GylphSorcery />
        <TextCanvas
          handleClose={handleCloseDrawer}
          show={drawer}
          data={drawerContent}
        ></TextCanvas>
      </main>
  );
}

export default PasswordGenerating;
