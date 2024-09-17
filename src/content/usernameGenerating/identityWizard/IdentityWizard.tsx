

import {Card } from "flowbite-react";
import Selectors from "./Selectors";
import {useState} from "react"
import IdentityTable from "./IdentityTable";
const  IdentityWizard =() =>{
    const [userValues, setValues] = useState<string[]>([])
  return (
    <Card
      className="max-w-xl"
      imgAlt="Identity Wizard Picture"
      imgSrc="src/assets/usernameGenerating/identityWizard.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Identity Wizard
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei Gruppen
        von Adjektiven und eine Gruppe von Substantiven auswählst, oder lass den
        Generator eine zufällige Kombination für dich erstellen.{" "}
      </p>
        <div className="flex flex-col">
         <Selectors  setValues ={setValues}/>
        <div>
        <IdentityTable userValues={userValues}/>
        </div>
      </div>
    </Card>
  );
}

export default IdentityWizard;
