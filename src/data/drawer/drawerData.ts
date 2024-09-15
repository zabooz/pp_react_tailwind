const paragraphLeet1 =  "Leetspeak, auch '1337 speak' genannt, ersetzt Buchstaben durch Zahlen und Symbole. Ursprünglich war es eine Geheimsprache für Hacker, um sich vor automatisierten Systemen zu verstecken. Nutzer sahen darin eine kreative Ausdrucksform und nutzten es, um Nachrichten zu verschlüsseln."

const paragraphLeet2 = "Leetspeak ersetzt Buchstaben durch ähnlich aussehende Zeichen. Zum Beispiel wird 'A' durch '4', 'E' durch '3' und 'I' durch '1' ersetzt. Wörter wie 'Leet' werden zu 'L33t', was der Kommunikation eine kreative Note verleiht."

const paragraphLeet3= "Leetspeak kann die Passwortsicherheit erhöhen, da es schwieriger wird, Passwörter zu erraten. Die Verwendung von Zahlen statt Buchstaben macht Passwörter weniger vorhersehbar, was angesichts zunehmender Cyberbedrohungen an Bedeutung gewonnen hat."

const paragraphLeet4 = "Trotz der Vorteile ist Leetspeak nicht unfehlbar. Vorhersehbare Muster erleichtern Angreifern das Erraten von Buchstaben. Außerdem kann die Lesbarkeit eingeschränkt sein, was in manchen Kontexten problematisch ist. Dennoch bleibt es ein Ausdruck von Kreativität in Online-Communities."

const paragraphLeet5= "Dumbledore stirbt."



export const leetspeakTextShortened = {

    title: "Leetspeak: Bedeutung und Anwendung",

    paragraphs : [
        paragraphLeet1,
        paragraphLeet2,
        paragraphLeet3,
        paragraphLeet4,
        paragraphLeet5
    ]
};



const paragraphSimple1 = "Bei einem einfachen Bruteforce-Angriff versucht ein Angreifer systematisch, ein Passwort oder einen geheimen Schlüssel zu erraten, indem er alle möglichen Kombinationen nacheinander ausprobiert. Der Angreifer beginnt in der Regel mit den einfachsten Kombinationen, wie '0000' oder '1234', und arbeitet sich dann durch alle möglichen Kombinationen, bis er die richtige gefunden hat.";

const paragraphSimple2 = "Zielsetzung: Der Angreifer hat ein spezifisches Ziel, wie z.B. den Zugriff auf ein Benutzerkonto, eine verschlüsselte Datei oder ein geschütztes System.";

const paragraphSimple3 = "Kombinationsauswahl: Der Angreifer generiert alle möglichen Kombinationen aus Zeichen, die für das Passwort verwendet werden können. Bei einem vierstelligen numerischen Passwort wären dies z.B. alle Kombinationen von '0000' bis '9999'.";

export const bruteForceAttackSimple = {
  title: "Simpler Brute-Force-Angriff",
  paragraphs: [paragraphSimple1, paragraphSimple2, paragraphSimple3]
};
const paragraphList1 = "Bei einem einfachen Bruteforce-Angriff versucht ein Angreifer systematisch, ein Passwort oder einen geheimen Schlüssel zu erraten, indem er alle möglichen Kombinationen nacheinander ausprobiert. Der Angreifer beginnt in der Regel mit den einfachsten Kombinationen, wie '0000' oder '1234', und arbeitet sich dann durch alle möglichen Kombinationen, bis er die richtige gefunden hat.";

const paragraphList2 = "Zielsetzung: Der Angreifer hat ein spezifisches Ziel, wie z.B. den Zugriff auf ein Benutzerkonto, eine verschlüsselte Datei oder ein geschütztes System.";

const paragraphList3 = "Kombinationsauswahl: Der Angreifer generiert alle möglichen Kombinationen aus Zeichen, die für das Passwort verwendet werden können. Bei einem vierstelligen numerischen Passwort wären dies z.B. alle Kombinationen von '0000' bis '9999'.";

const paragraphList4 = "Ausprobieren: Der Angreifer probiert jede Kombination aus, bis er die richtige findet und Zugang erhält. Je nachdem, wie lang das Passwort ist und welchen Zeichensatz es verwendet, kann dieser Prozess schnell abgeschlossen sein oder sehr lange dauern.";

export const bruteForceAttackList = {
  title: "Listenangriff",
  paragraphs: [paragraphList1, paragraphList2, paragraphList3, paragraphList4]
};