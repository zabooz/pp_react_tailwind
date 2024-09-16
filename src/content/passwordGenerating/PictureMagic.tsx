import { Card, Table, Button } from "flowbite-react";

function PictureMagic() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="PictureMAgic picture"
      imgSrc="src\assets\passwordGenerating\pictureMagic.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Picture Magic
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lade einfach ein Foto hoch, und unsere App verwandelt es in ein sicheres
        Passwort
      </p>
      <div className="relative border">
        <img
          src="src/assets/passwordGenerating/upload.jpeg"
          alt="uploadPicture"
          className="aspect-square w-4/5 mx-auto"
        />
        <p className="absolute bottom-0 w-4/5 border text-center">
          Foto Hochladen
        </p>
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
              <Table.Cell></Table.Cell>
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <Button>Los geht's</Button>
    </Card>
  );
}

export default PictureMagic;
