"use client";

import { Button, Card, Table } from "flowbite-react";
import { leetspeakTextShortened } from "../../data/drawer/drawerData";

import { DrawerData } from "../../interfaces/interfaces";
import { TextInput } from "flowbite-react";
interface Props {
  handleDrawerClick: (content: DrawerData) => void;
}

function RuneTranslator({ handleDrawerClick }: Props) {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Rune Translator Picture"
      imgSrc="src/assets/passwordGenerating/runeTranslator.jpeg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Rune Translator
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span
          className="font-bold cursor-pointer"
          onClick={() => handleDrawerClick(leetspeakTextShortened)}
        >
          Leetspeak
        </span>{" "}
        ersetzt die Buchstaben und Zeichen deine Passwortes mit anderen Zeichen,
        so dass du besser vor Angriffen geschützt bist. Probier aus, welche
        Variante - von einfach bis stark verändert - du bevorzugst.
      </p>

      <div className="flex flex-col">
        <TextInput type="text" />
        <span>*Maximal 12 Zeichen</span>
      </div>
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

export default RuneTranslator;
