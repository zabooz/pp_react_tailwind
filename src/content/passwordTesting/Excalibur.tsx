
import { Card,Button,Progress, TextInput } from 'flowbite-react'
function Excalibur() {
  return (
    <Card
      className="max-w-md"
      imgAlt="Excalibur Picture"
      imgSrc="src/assets/passwordTesting/excalibur.png"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Excalibur
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Excalibur ist ein Tool, dass die Stärke deines Passworts überprüft. Es bewertet dabei Faktoren wie Länge, Komplexität und Vorhersehbarkeit und gibt dir eine umfassende Bewertung deiner Passwortsicherheit.
      </p>
      <div>
        <TextInput type="text" />
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
      <Button>Los geht's</Button>
    </Card>
  )
}

export default Excalibur
