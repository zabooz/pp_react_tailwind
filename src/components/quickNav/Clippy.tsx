import { Tabs, Drawer } from "flowbite-react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

function Clippy({ isOpen, handleClose }: Props) {
  return (
    <Drawer open={isOpen} onClose={handleClose} className="pt-20">
        <div>
        <img
          src="src/assets/clippy/copyCat1.jpeg"
          alt="sanchez"
          className="rounded-full mx-auto  w-24"
        />
        <h2 className="text-4xl font-bold text-[#9ca3af] text-center mt-5">
          Clippy
        </h2>
        </div>
      <Drawer.Items className=" flex justify-center">
        <Tabs
          aria-label="Tabs with underline"
          variant="underline"
        className="justify-center w-[90%] "
        >
          <Tabs.Item active title="Passwörter" className="!w-full asdfsdfgasgadgsadgf">
     
          </Tabs.Item>
          <Tabs.Item title="Benutzernamen"className="">zui67</Tabs.Item>
        </Tabs>
      </Drawer.Items>
    </Drawer>
  );
}

export default Clippy;
