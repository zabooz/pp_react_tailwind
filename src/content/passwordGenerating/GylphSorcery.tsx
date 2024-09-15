
import { Card,Button,Table,Label,RangeSlider, Radio} from "flowbite-react";


function GylphSorcery() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Glyph Sorcery picture"
      imgSrc="src\assets\passwordGenerating\glyphSorcery.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Glyph Sorcery
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Je länger dein Passwort ist, desto sicherer ist es. Mit Glyph Sourcery kannst du dir schnell und unkompliziert ein Passwort in deiner gewünschten Länge erstellen, die den Richtlinien für sichere Passwörter entsprechen.
      </p>
      <div>
        <Label htmlFor='glyphrange'>Passwortlänge:</Label>
        <RangeSlider  id='glyphrange' name='glyphrange'/>
        <div>
            <Label htmlFor="english">English</Label>
            <Radio id='english' name='language' value={'english'}/>
            <Label htmlFor="german">German</Label>
            <Radio  id='german' name='language' value={'german'}/>
        </div>
      </div>
      <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Password</Table.HeadCell>
          <Table.HeadCell>Dein Bild</Table.HeadCell>
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
      <Button>Los geht's</Button>
    </Card>

  )
}

export default GylphSorcery
