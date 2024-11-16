import { Accordion, CustomFlowbiteTheme, Flowbite, List } from 'flowbite-react';
import { ZxcvbnResult } from '@zxcvbn-ts/core';
import { stats } from '../scripts/zxcvbn';
import './excaliburModalStyle.css';

interface Props {
    nerdStats: ZxcvbnResult | null;
}

function ExcaliburNerdStats({ nerdStats }: Props) {
    const [baseStats, crackTime] = stats(nerdStats);

    const customTheme: CustomFlowbiteTheme = {
        accordion: {
            title: {
                flush: {
                    off: 'hover:bg-gray-100 dark:hover:bg-gray-800',
                },
            },
        },
    };

    return nerdStats ? (
        <Flowbite theme={{ theme: customTheme }}>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>Base Stats</Accordion.Title>
                    <Accordion.Content>
                        <List>
                            {baseStats.map((item, index) => {
                                if ('stat' in item)
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
                                if ('method' in item)
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
                                const keys = ['guesses', 'pattern', 'token'];
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
            </Accordion>
        </Flowbite>
    ) : (
        <p>No data</p>
    );
}

export default ExcaliburNerdStats;
