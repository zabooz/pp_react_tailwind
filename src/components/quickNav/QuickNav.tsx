import { Button } from 'flowbite-react';
import { useState } from 'react';
import Clippy from './Clippy';
import Sanchez from './Sanchez';
function QuickNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<string>('');
  const handleClose = () => {
    setIsOpen(false)
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const data = button.dataset.drawer;
    setData(data || '');
    setIsOpen(true);

  };
  

  return (
    <>
      <div
        className="fixed bottom-[40%] z-20 right-[-170px]
 flex flex-col gap-5  text-[#910f0f]"
      >
        <Button
          data-drawer="sanchez"
          className="w-60 text-left hover:animate-move-out p-0 flex  border-2 dark:border-[#0891b2] justify-start dark:bg-slate-700  items-center border-[#ea6954] bg-[#ea6954] "
          onClick={handleClick}
        >
          <img
            src="/assets/sanchez/sanchez.webp"
            alt="sanchez"
            className="w-12 rounded-full"
          />
          <span className="my-auto ms-2 text-lg dark:!text-white-400">
            Sanchez
          </span>
        </Button>
        <Button
          data-drawer="clippy"
          className="w-50 hover:animate-move-out text-left border-2 dark:border-[#0891b2] border-[#ea6954] bg-[#ea6954]   p-0 flex items-center justify-start  dark:bg-slate-700"
          onClick={handleClick}
        >
          <img
            src="/assets/clippy/clippy.webp"
            alt="clippy"
            className="w-12 rounded-full"
          />
          <span className="my-auto ms-2 text-lg !dark:text-[#0891b2d9]">
            Clippy
          </span>
        </Button>
      </div>
    {data === 'sanchez' ? (
        <Sanchez isOpen={isOpen} handleClose={handleClose} /> )
        : (<Clippy isOpen={isOpen} handleClose={handleClose}/>)
        }

    </>
  );
}

export default QuickNav;
