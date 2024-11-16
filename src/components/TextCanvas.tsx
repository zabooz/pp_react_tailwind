import { Drawer } from "flowbite-react";
import { DrawerData } from "../interfaces/interfaces";
import { useIntl } from "react-intl";
interface Props {
  show: boolean;
  handleClose: () => void;
  data: DrawerData;
}

function TextCanvas({ show, handleClose, data }: Props) {
  const  intl = useIntl();
  return (
    <>
      <Drawer open={show} onClose={handleClose} className={`pt-20 ${show ? 'block' : 'hidden'}`}>
        <Drawer.Header title={data.title} />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400"></p>
          <div className="grid grid-cols-1 gap-4">
            {data.paragraphs.map(para => (
              <p
                key={para.id}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {intl.formatMessage({ id: para.id, defaultMessage: para.defaultMessage })}
              </p>
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default TextCanvas;
