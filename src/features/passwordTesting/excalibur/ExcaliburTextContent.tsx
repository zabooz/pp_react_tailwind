function ExcaliburTextContent() {
  return (
    <div className="font-normal text-gray-700 dark:text-gray-400 ">
      <p >
        Excalibur ist ein Tool, dass die Stärke deines Passworts überprüft. Es
        bewertet dabei Faktoren wie Länge, Komplexität und Vorhersehbarkeit und
        gibt dir eine umfassende Bewertung deiner Passwortsicherheit.
      </p>
      <div className="hidden lg:block mb-7">
        <p className="my-2">
          Excalibur hilft dir dabei, Schwachstellen in deinem Passwort
          aufzudecken und schlägt Verbesserungen vor. 
        </p>
        <p>
        Mit diesem Tool kannst du
          sicherstellen, dass dein Passwort gegen Brute-Force-Angriffe und
          gängige Passwortlisten gut geschützt ist.
        </p>
      </div>
    </div>
  );
}

export default ExcaliburTextContent;
