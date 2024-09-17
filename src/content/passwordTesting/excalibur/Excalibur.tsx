import { Card, Button, Progress, TextInput } from "flowbite-react";
import { excaliburTesting } from "./excaliburScript";
import { useState } from "react";
import ExcaliburModal from "./ExcaliburModal"
import { ZxcvbnResult } from '@zxcvbn-ts/core'
function Excalibur() {


    const [showModal,setShowModal] = useState(false)
    const [nerdStats,setNerdStats] = useState<ZxcvbnResult | null>(null)
    const [password,setPassword] = useState<string>("")


  return (
    <>
    <Card
      className="max-w-md"
      imgAlt="Excalibur Picture"
      imgSrc="src/assets/passwordTesting/excalibur.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Excalibur
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Excalibur ist ein Tool, dass die Stärke deines Passworts überprüft. Es
        bewertet dabei Faktoren wie Länge, Komplexität und Vorhersehbarkeit und
        gibt dir eine umfassende Bewertung deiner Passwortsicherheit.
      </p>
      <div>
        <TextInput type="text" 
        onChange={(e) => setPassword(e.target.value)}
        />
        <Progress
          progress={45}
          progressLabelPosition="inside"
          textLabel="Flowbite"
          textLabelPosition="outside"
          size="lg"
          labelProgress
          labelText
        />
      </div>
      <Button
      onClick={() => excaliburTesting({setNerdStats,password})}
      >Los geht's</Button>
      <span 
      onClick={() => setShowModal(true)}
      className="cursor-pointer font-bold"
      >Auch hier könnte ihre werbung stehen</span>
    </Card>
    <ExcaliburModal openModal={showModal} setOpenModal={setShowModal} nerdStats={nerdStats}/>
    </>
  );
}

export default Excalibur;
