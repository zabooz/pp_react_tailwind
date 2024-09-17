import { Card, Carousel, Radio, Label } from "flowbite-react";

function MindMaestro() {
  return (
    <Card
      className="max-w-xl"
      imgAlt="MindMaestro Picture"
      imgSrc="src/assets/usernameGenerating/mindMaestro.jpeg"
    >
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
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
                  <Radio name="question1" id="q1a1" />
                  <Label htmlFor="q1a1">Eine angenehme Temperatur</Label>
                </div>

                <div>
                  <Radio name="question1" id="q1a2" />
                  <Label htmlFor="q1a2">Bequemlichkeit</Label>
                </div>

                <div>
                  <Radio name="question1" id="q1a3" />
                  <Label htmlFor="q1a3">Selbstkenntnis</Label>
                </div>

                <div>
                  <Radio name="question1" id="q1a4" />
                  <Label htmlFor="q1a4">Zeit</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 2: Welche Aktivität magst du am meisten?</h5>
              <div>
                <div>
                  <Radio name="question2" id="q2a1" />
                  <Label htmlFor="q2a1">Zeichnen</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a2" />
                  <Label htmlFor="q2a2">Arbeiten mit den Händen</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a3" />
                  <Label htmlFor="q2a3">Schauspielern</Label>
                </div>
                <div>
                  <Radio name="question2" id="q2a4" />
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
                  <Radio name="question3" id="q3a1" />
                  <Label htmlFor="q3a1">Früchte & Gemüse</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a2" />
                  <Label htmlFor="q3a2">Getränke</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a3" />
                  <Label htmlFor="q3a3">Desserts</Label>
                </div>
                <div>
                  <Radio name="question3" id="q3a4" />
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
                  <Radio name="question4" id="q4a1" />
                  <Label htmlFor="q4a1">Instrumente</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a2" />
                  <Label htmlFor="q4a2">Blumen</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a3" />
                  <Label htmlFor="q4a3">Fahrzeuge</Label>
                </div>
                <div>
                  <Radio name="question4" id="q4a4" />
                  <Label htmlFor="q4a4">Werkzeuge</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <h5>Frage 5: Was spricht dich am meisten an?</h5>
              <div>
                <div>
                  <Radio name="question5" id="q5a1" />
                  <Label htmlFor="q5a1">Hunde und Katzen</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a2" />
                  <Label htmlFor="q5a2">Drachen und Einhörner</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a3" />
                  <Label htmlFor="q5a3">Elfen und Zwerge</Label>
                </div>
                <div>
                  <Radio name="question5" id="q5a4" />
                  <Label htmlFor="q5a4">Nichts davon</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <div id="lastCaption">
                <h5 id="captionH">Vielen Dank für deine Teilnahme!</h5>
                <p id="captionPUsername">
                  Bitte klick auf den Button, um deine Antworten zu senden.
                </p>
                <button id="submitButton">Antworten absenden</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </Card>
  );
}

export default MindMaestro;
