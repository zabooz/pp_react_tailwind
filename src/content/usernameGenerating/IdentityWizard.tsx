import { Button, Card,Select,Table } from "flowbite-react"

function IdentityWizard() {
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
    Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei Gruppen von Adjektiven und eine Gruppe von Substantiven auswählst, oder lass den Generator eine zufällige Kombination für dich erstellen.  </p>
   
    <div className="flex">
        <div className="flex flex-col">
            <label htmlFor="adjectives">Wähle bis zu zwei Eigenschafften:</label>

              <Select id="adjective1" >
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </Select>
              <Select id="adjective2" >
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </Select>
            <label>...und einen Begriff:</label>
            <Select name="pwdGen" id="noun" >
              <option value="random">Zufällig</option>
              <option value="instruments">Instrument</option>
              <option value="fruits">Frucht</option>
              <option value="vegetables">Gemüse</option>
              <option value="animals">Tier</option>
              <option value="fantasyCreatures">Fantasiewesen</option>
              <option value="rpgClasses">Fantasy-Charakter</option>
              <option value="fantasyRaces">Fantasie-Volk</option>
              <option value="occupations">Beruf</option>
              <option value="vehicles">Fahrzeug</option>
              <option value="food">Essen</option>
              <option value="tools">Werkzeug</option>
              <option value="beverages">Getränk</option>
              <option value="clothingItems">Kleidungsstück</option>
              <option value="bodyParts">Körperteil</option>
              <option value="flowers">Blume</option>
              <option value="desserts">Dessert</option>
            </Select>
            <Button>Los Geht#s</Button>
        </div>
        <div>
        <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Password</Table.HeadCell>
          <Table.HeadCell>Stärke</Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell ></Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell></Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>
    </div>
        </div>



    </div>
  </Card>
  )
}

export default IdentityWizard
