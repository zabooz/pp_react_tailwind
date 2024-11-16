import { List } from 'flowbite-react';
import { useState } from 'react';
import ChangeCredsModal from './ChangeCredsModal';
import ProfileChoosery from './ProfileChoosery';
function Settings() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState({ text: '', type: '' });
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [drawerData, setDrawerData] = useState({ text: '', type: '' });

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget; 
    const text = target.dataset.text;
    const type = target.dataset.type;
  
 
    if (text && type) {
      setModalData({ text, type });
      setOpenModal(prev => !prev); // Toggle the modal state
    }
  };
  

  const handleDrawer = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.currentTarget; 
    const text = target.dataset.text; 
    const type = target.dataset.type;
  
    if (text && type) {
      setDrawerData({ text, type }); 
      setOpenDrawer(prev => !prev); 
    }
  };


  const li: {
    sections: string[];
    options: string[];
    event: Record<string, (e: React.MouseEvent<HTMLDivElement>) => void>;
  } = {
    sections: [
      'Benutzername',
      'Passwort',
      'E-mail',
      'ProfilBild',
    ],
    options: [
      'ändern'
    ],
    event: {
      'Benutzername': handleModal,
      'Passwort': handleModal,
      'E-mail': handleModal,
      'ProfilBild': handleDrawer
    }
  };




  return (
    <>
      <List
        unstyled
        className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
      >
        {li.sections.map((section) => (
          <List.Item className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {section}
                </p>
              </div>
              <div
                className="inline-flex items-center text-base font-semibold text-white dark:hover:text-[#57c1db] hover:underline underline-offset-8"
                data-type="username"
                data-text="Benutzername"
                onClick={(e) => li.event[section](e)}
              >
                {li.options[0]}
              </div>
            </div>
          </List.Item>
        ))}
     
      </List>
      <ChangeCredsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalData={modalData}
      />
      <ProfileChoosery
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        drawerData={drawerData}
      />
    </>
  );
}

export default Settings;
