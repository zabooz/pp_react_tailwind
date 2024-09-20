import { Card, Carousel, Radio, Label } from "flowbite-react";
import { useState,useEffect } from "react";
import { mindMaestro } from "./mindeMastroScript";
import { useSlideContext } from "../../../contexts/Contexts";
function MindMaestro() {
 
    const [username, setUsername] = useState<string>("");
    const handleRadioChange = () => {
      const choices: string[] = [];
      document.querySelectorAll("input[type='radio']:checked")
        .forEach((item) => {
          if (item instanceof HTMLInputElement) {
            choices.push(item.dataset.arr || '');
          }
        });
      const name =    mindMaestro({values:choices});

      setUsername(name);
     
    };

    useEffect(() => {
      setUsername("");
    }, [username]);

    const {startAnimation} = useSlideContext();
    return (
    <Card
      className={`max-w-lg mx-auto border-4 ${startAnimation ? 'animate-fade-out' : 'animate-scale-up'} `}
      imgAlt="MindMaestro Picture"
      imgSrc="src/assets/usernameGenerating/mindMaestro.jpeg"
    >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false} leftControl=" " rightControl=" ">
          <div className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <h5>Mind Maestro</h5>
            <p>
              Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei
              Gruppen von Eigenschaften und eine Gruppe von Begriffen auswählst
              oder lass den Generator eine zufällige Kombination für dich
              erstellen.
            </p>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 1: Was ist dir am wichtigsten?</h5>
              <div>
                <div>
                  <Radio name="question1" data-arr="temperatures" id="q1a1" defaultChecked />
                  <Label htmlFor="q1a1" >Eine angenehme Temperatur</Label>
                </div>

                <div>
                  <Radio name="question1" data-arr="qualities" id="q1a2" />
                  <Label htmlFor="q1a2" >Bequemlichkeit</Label>
                </div>

                <div>
                  <Radio name="question1" data-arr="colors" id="q1a3" />
                  <Label htmlFor="q1a3" >Farbfernsehen</Label>
                </div>

                <div>
                  <Radio name="question1" id="q1a4" data-arr="sizes" />
                  <Label htmlFor="q1a4" >Wahre Größe</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 2: Welche Aktivität magst du am meisten?</h5>
              <div>
                <div>
                  <Radio name="question2" id="q2a1" data-arr="vehicles"  defaultChecked/>
                  <Label htmlFor="q2a1">Im Kreis fahren</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a2" data-arr="tools"/>
                  <Label htmlFor="q2a2">Arbeiten mit den Händen</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a3" data-arr="fantasyCreatures"/>
                  <Label htmlFor="q2a3">Löffel verbiegen(durch Gedanken )</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a4" data-arr="instruments" />
                  <Label htmlFor="q2a4">Musik</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>
                Frage 3: Welche Lebensmittelgruppe spricht dich am meisten an?
              </h5>
              <div>
                <div>
                  <Radio name="question3" id="q3a1" data-arr="fruits" defaultChecked/>
                  <Label htmlFor="q3a1">Früchte & Gemüse</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a2" data-arr="beverages" />
                  <Label htmlFor="q3a2">Getränke</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a3" data-arr="desserts" />
                  <Label htmlFor="q3a3">Desserts</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a4" data-arr="food" />
                  <Label htmlFor="q3a4">Essen im Allgemeinen</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 4: Was bevorzugst du?</h5>
              <div>
                <div>
                  <Radio name="question4" id="q4a1" data-arr="ages" defaultChecked/>
                  <Label htmlFor="q4a1">Das Leben</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a2" data-arr="flowers" />
                  <Label htmlFor="q4a2">Blumen</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a3" data-arr="weatherTypes" />
                  <Label htmlFor="q4a3">den Klimawandel</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a4" data-arr="intensities" />
                  <Label htmlFor="q4a4">Egal, hauptsache was gespürt</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 5: Was spricht dich am meisten an?</h5>
              <div>
                <div>
                  <Radio name="question5" id="q5a1" data-arr="animals" />
                  <Label htmlFor="q5a1">Hunde und Katzen</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a2" data-arr="fantasyCreatures" />
                  <Label htmlFor="q5a2">Drachen und Einhörner</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a3"  />
                  <Label htmlFor="q5a3">Elfen und Zwerge</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a4" data-arr="fantasyRaces" defaultChecked/>
                  <Label htmlFor="q5a4">Nichts davon</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
            <div id="lastCaption">
                 { username  ?(<h1>{username}</h1>)  :(   
                  <>           
                <h5 >Vielen Dank für deine Teilnahme!</h5>
                <p >
                  Bitte klick auf den Button, um deine Antworten zu senden.
                </p>
                <button id="submitButton" onClick={handleRadioChange}>Antworten absenden</button>
                </>
              )}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Card>
  );
}

export default MindMaestro;
