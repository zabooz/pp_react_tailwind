import { Button, Drawer } from "flowbite-react";
import { pictureArray } from "../../utillities/pictureArray";
import { useState, useContext } from "react";
import { LoginContext } from "../../contexts/Contexts";
import { dataKrakenGives, dataKrakenTrades } from "../../backend/dataKraken";
import { dataKrakenTradesData } from "../../interfaces/interfaces";
interface ModalProps {
  openDrawer: boolean;
  setOpenDrawer: (openModal: boolean) => void;
  drawerData: DrawerData;
}
interface DrawerData {
  text: string;
  type: string;
}

const pictures = pictureArray("src/assets/profilePics/", ".jpeg", 24);

function ProfileChoosery({
  openDrawer,
  setOpenDrawer,
  drawerData,
}: ModalProps) {
  const [avatar, setAvatar] = useState<string>(
    "src/assets/profilePics/default.jpeg"
  );
  const { change, setChange } = useContext(LoginContext);

  const handelChange = async ({ key, value }: dataKrakenTradesData) => {
    sessionStorage.removeItem("userStats");
    await dataKrakenTrades({ key, value });
    const response = await dataKrakenGives();
    if (response)
      sessionStorage.setItem("userStats", JSON.stringify(response.data));
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
      <Drawer.Header title={drawerData.text + " auswählen"} />
      <Drawer.Items>
        <div className="grid grid-cols-4 gap-4">
          {pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              className=" rounded-full"
              onClick={(e) => {
                document.querySelectorAll(".ring-2").forEach((el) => {
                  el.classList.remove("ring-2", "ring-blue-500");
                });

                const target = e.target as HTMLImageElement;
                target.classList.add("ring-2", "ring-blue-500");
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
          handelChange({ key: "avatar", value: avatar });
        }}
      >
        Auswählen
      </Button>
    </Drawer>
  );
}

export default ProfileChoosery;
