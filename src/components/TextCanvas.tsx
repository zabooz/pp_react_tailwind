import { Drawer } from "flowbite-react";
import { DrawerData } from "../interfaces/interfaces";
interface Props {
  show: boolean;
  handleClose: () => void;
  data: DrawerData;
}

function TextCanvas({ show, handleClose, data }: Props) {
  return (
    <>
      <Drawer open={show} onClose={handleClose} className={`pt-20 ${show ? 'block' : 'hidden'}`}>
        <Drawer.Header title={data.title} />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400"></p>
          <div className="grid grid-cols-1 gap-4">
            {data.paragraphs.map((paragraph:string) => (
              <p
                key={paragraph}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default TextCanvas;
