import { List } from "flowbite-react";

import { useState } from "react";
import ChangeCredsModal from "./ChangeCredsModal";
function Settings() {

  const [changeOpen, setChangeOpen] = useState<boolean>(false)
  const [modalData,setModalData] = useState({text:"",type:""});



  const handleModal = (e:any) => {
    setModalData({text:e.target.dataset.text,type:e.target.dataset.type})
    setChangeOpen(!changeOpen)
  }


  return (
    <>
    <List unstyled className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
    <List.Item className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white" >Benutzername</p>

        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" data-type="username"
        data-text="Benutzername"
        onClick={(e) => handleModal(e)}
        
        >ändern</div>
      </div>
    </List.Item>
    <List.Item className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white" >E-Mail</p>

        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" data-type="email"
        data-text="E-Mail"
        onClick={(e) => handleModal(e)}>ändern</div>
      </div>
    </List.Item>
    <List.Item className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Passwort</p>

        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" data-type="password"
        data-text="Passwort"
        onClick={(e) => handleModal(e)}>ändern</div>
      </div>
    </List.Item>
    <List.Item className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Profilbild</p>

        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" data-type="avatar" data-text="Avatar"
        onClick={(e) => handleModal(e)}>ändern</div>
      </div>
    </List.Item>
  </List>
  <ChangeCredsModal   
  openModal = {changeOpen}
  setOpenModal = {setChangeOpen}
  modalData = {modalData}
  />
  </>
  )
}

export default Settings
