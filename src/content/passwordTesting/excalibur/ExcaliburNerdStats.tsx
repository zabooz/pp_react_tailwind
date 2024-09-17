import { Accordion, List } from "flowbite-react";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { stats } from "./zxcvbn";
interface Props {
  nerdStats: ZxcvbnResult;
}

function ExcaliburNerdStats({ nerdStats }: Props) {
  const [baseStats, crackTime, feedback] = stats(nerdStats);

  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Base Stats</Accordion.Title>
        <Accordion.Content>
          <List id="base-stats">
            {baseStats.map((item, index) => (
              <List.Item key={index}>
                {item.stat}: <span>{item.value}</span>
              </List.Item>
            ))}
          </List>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Crack Time</Accordion.Title>
        <Accordion.Content>
          <List>
            {crackTime.map((item, index) => (
              <List.Item key={index}>
                {item.method}: <span>{item.time}</span>
              </List.Item>
            ))}
          </List>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Sequence</Accordion.Title>
        <Accordion.Content>
          {nerdStats.sequence.map((item, index) => {
             const keys = ["guesses", "pattern", "token"];
            for (const key in item) {
              if (keys.includes(key)) {
                return (
                  <List.Item key={index}>
                    {key}: <span>{item[key]}</span>
                  </List.Item>
                );
              }
            }
          })}
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Feedback</Accordion.Title>
        <Accordion.Content>
          {feedback.map((item, index) => {

            if (item.type === "suggestions") {
              return (
                <List>
                  {item.message.map((suggestion, index) => (
                    <List.Item key={index}>
                      {suggestion}
                    </List.Item>
                  ))}
                </List>
              );
            } else {
              return (
                <List.Item key={index}>
                  {item.type}: <span>{item.message}</span>
                </List.Item>
              );
            }

          })}



        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default ExcaliburNerdStats;
