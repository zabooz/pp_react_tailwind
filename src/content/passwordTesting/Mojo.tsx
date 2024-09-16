import { Button, Card, Radio, Table, TextInput, Label } from "flowbite-react";
import {
  bruteForceAttackList,
  bruteForceAttackSimple,
} from "../../data/drawer/drawerData";

import { useState } from "react";
import { DrawerData } from "../../interfaces/interfaces";
import OffCanvas from "../../components/OffCanvas";
function Mojo() {
  const [drawer, setDrawerShow] = useState<boolean>(false);
  const [drawerContent, setDrawerContent] = useState<DrawerData>({
    title: "",
    paragraphs: [],
  });

  const handleClickDrawer = (content: DrawerData) => {
    setDrawerShow(!drawer);
    setDrawerContent(content);
  };
  const handleCloseDrawer = () => {
    setDrawerShow(!drawer);
  };

  return (
    <>
      <Card
        className="max-w-md"
        imgAlt="Mojo APP picture"
        imgSrc="src/assets/passwordTesting/mojo.png"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Mojo
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Wählen Sie einen Modus, um Ihr Passwort gegen Brute-Force-Angriffe zu
          testen. Im{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackSimple)}
            className="cursor-pointer font-bold"
          >
            einfachen Modus
          </span>{" "}
          werden alle möglichen Zeichenkombinationen durchprobiert. Der{" "}
          <span
            onClick={() => handleClickDrawer(bruteForceAttackList)}
            className="cursor-pointer font-bold"
          >
            Listen-Modus
          </span>{" "}
          prüft bekannte Passwörter
        </p>
        <div>
          <TextInput type="text" />
          <div>
            <Label htmlFor="simple">Einfach</Label>
            <Radio id="simple" name="bruteForce" value={"simple"} />
            <label htmlFor="list">Liste</label>
            <Radio id="list" name="bruteForce" value={"list"} />
          </div>
          <div className="flex">
            <Button>Los geht's</Button>
            <Button>Stop</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Passwort</Table.HeadCell>
              <Table.HeadCell>Versuche</Table.HeadCell>
              <Table.HeadCell>Modus</Table.HeadCell>
              <Table.HeadCell>Zeit</Table.HeadCell>
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
      </Card>
      <OffCanvas
        handleClose={handleCloseDrawer}
        show={drawer}
        data={drawerContent}
      />
    </>
  );
}

export default Mojo;
