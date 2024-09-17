import { Accordion, List } from "flowbite-react";
import { ZxcvbnResult } from "@zxcvbn-ts/core";
import { stats } from "../zxcvbn";
interface Props {
  nerdStats: ZxcvbnResult | null;
}

function ExcaliburNerdStats({ nerdStats }: Props) {
  const [baseStats, crackTime, feedback] = stats(nerdStats);

  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>Base Stats</Accordion.Title>
        <Accordion.Content>
          <List>
            {baseStats.map((item, index) => {
              if ("stat" in item)
                return (
                  <List.Item key={`${index}-base`}>
                    {item.stat}: <span>{item.value}</span>
                  </List.Item>
                );
            })}
          </List>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Crack Time</Accordion.Title>
        <Accordion.Content>
          <List>
            {crackTime.map((item, index) => {
              if ("method" in item)
                return (
                  <List.Item key={`${index}-crack`}>
                    {item.method}: <span>{item.time}</span>
                  </List.Item>
                );
            })}
          </List>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Sequence</Accordion.Title>
        <Accordion.Content>
          <List>
            {nerdStats!.sequence.map((item, index) => {
              const keys = ["guesses", "pattern", "token"];
              return keys.map((key) => {
                if (key in item) {
                  return (
                    <List.Item key={`${index}-${key}`}>
                      {key}: <span>{item[key]}</span>
                    </List.Item>
                  );
                }
              });
            })}
          </List>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>Feedback</Accordion.Title>
        <Accordion.Content>
          <List>
            {feedback.map((item, index) => {
              if("message" in item)
              return item.message && Array.isArray(item.message) ? (
                <List key={`${index}-feedback-list`}>
                  {item.message.map((suggestion: string, idx: number) => (
                    <List.Item key={`${index}-${idx}-feedback`}>
                      {suggestion}
                    </List.Item>
                  ))}
                </List>
              ) : (
                <List.Item key={`${index}-feedback`}>
                  {item.type}: <span>{item.message}</span>
                </List.Item>
              );
            })}
          </List>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default ExcaliburNerdStats;
