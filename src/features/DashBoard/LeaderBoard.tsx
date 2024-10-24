import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { dataKrakenGives } from "../../components/login.register/backend/dataKraken";
import { LeaderBoardData } from "../../interfaces/interfaces";
function LeaderBoard() {
  const [stat, setStat] = useState("visits");
  const [data, setData] = useState<LeaderBoardData[]>([]);

  useEffect(() => {
    (async () => {
      const response = await dataKrakenGives({ col: stat });
      if (response && Array.isArray(response.data)) {
        setData(response.data);
      }
    })();
  }, [stat]);

  const handleTableClick = (event: React.MouseEvent<HTMLTableElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "TH") {
      setStat(target.dataset.type!);
    }
  };
  const username = JSON.parse(sessionStorage.getItem("userStats")!);
  return (
    <div className="overflow-x-auto">
      <Table hoverable onClick={handleTableClick}>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell data-type="username">Benutzer </Table.HeadCell>
          <Table.HeadCell
            data-type="visits"
            className="cursor-pointer hover:text-green-400 hover:underline underline-offset-4"
          >
            Besuche
          </Table.HeadCell>
          <Table.HeadCell
            data-type="tested_passwords"
            className="cursor-pointer hover:text-green-400 hover:underline underline-offset-4"
          >
            Getestete Passwörter
          </Table.HeadCell>
          <Table.HeadCell
            data-type="generated_passwords"
            className="cursor-pointer hover:text-green-400 hover:underline underline-offset-4"
          >
            Generierte Passwörter
          </Table.HeadCell>
          <Table.HeadCell
            data-type="generated_usernames"
            className="cursor-pointer hover:text-green-400 hover:underline underline-offset-4"
          >
            Generierte Benuzternamen
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((user, index) => {
            let color;
            let bgColor;
            let fontWeight;
            let rank = index + 1;
            let avatar = user.avatar;
            if ("rank" in user) {
              rank = user.rank as number;
              user = user.user as LeaderBoardData;
              avatar = user.avatar as string;
              color = "text-red-400";
              bgColor = "bg-gray-200";
              fontWeight = "font-bold";
            } else {
              const match =
                username[0].username === user.username ? true : false;
              if (match) {
                color = "text-emerald-400";
                bgColor = "bg-gray-200";
                fontWeight = "font-bold";
              }
            }

            return (
              <Table.Row
                className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${color} ${bgColor} ${fontWeight}`}
                key={index}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {rank}
                </Table.Cell>
                <Table.Cell className="flex gap-2 items-center ">
                  <img src={avatar} className="w-8 rounded-full" />
                  {user.username}
                </Table.Cell>
                <Table.Cell>{user.visits}</Table.Cell>
                <Table.Cell>{user.tested_passwords}</Table.Cell>
                <Table.Cell>{user.generated_passwords}</Table.Cell>
                <Table.Cell>{user.generated_usernames}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default LeaderBoard;
