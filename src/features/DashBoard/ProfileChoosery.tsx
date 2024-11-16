import { Button, Drawer } from 'flowbite-react';
import { useState } from 'react';
import { pictureArray } from './pictureArray';
import {
  dataKrakenGives,
  dataKrakenTrades,
} from '../../components/login.register/backend/dataKraken';
import { useLoginContext } from '../../contexts/Contexts';
import { dataKrakenTradesData } from '../../interfaces/interfaces';
interface ModalProps {
  openDrawer: boolean;
  setOpenDrawer: (openModal: boolean) => void;
  drawerData: DrawerData;
}
interface DrawerData {
  text: string;
  type: string;
}

const pictures = pictureArray('/assets/profilePics/', '.jpeg', 24);

function ProfileChoosery({
  openDrawer,
  setOpenDrawer,
  drawerData,
}: ModalProps) {
  const [avatar, setAvatar] = useState<string>(
    '/assets/profilePics/default.jpeg'
  );
  const { change, setChange } = useLoginContext();

  const handelChange = async ({ key, value }: dataKrakenTradesData) => {
    sessionStorage.removeItem('userStats');
    await dataKrakenTrades({ key, value });
    const response = await dataKrakenGives();
    if (response)
      {sessionStorage.setItem('userStats', JSON.stringify(response.data));}
    setOpenDrawer(false);
    setChange(!change);
  };

  return (
    <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      position="right"
      className="pt-[4rem]"
    >
      <Drawer.Header title={drawerData.text + ' auswählen'} />
      <Drawer.Items>
        <div className="grid grid-cols-4 gap-4">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              className=" rounded-full hover:shadow-2xl"
              onClick={(e) => {
                document.querySelectorAll('.ring-2').forEach((el) => {
                  el.classList.remove('ring-2', 'ring-blue-500', 'shadow-2xl');
                });

                const target = e.target as HTMLImageElement;
                target.classList.add('ring-2', 'ring-blue-500', 'shadow-2xl');
                setAvatar(picture);
              }}
            />
          ))}
        </div>
      </Drawer.Items>
      <Button
        className="mt-10"
        onClick={() => {
          setOpenDrawer(false);
          handelChange({ key: 'avatar', value: avatar });
        }}
      >
        Auswählen
      </Button>
    </Drawer>
  );
}

export default ProfileChoosery;
