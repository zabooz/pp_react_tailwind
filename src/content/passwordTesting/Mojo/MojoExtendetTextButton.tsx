import { Button } from "flowbite-react";

interface Props {
  className?: string;
  handleCardGrow: (grow: boolean) => void;
  mojoGrow: boolean;
}

function MojoExtendetTextButton({
  className,
  handleCardGrow,
  mojoGrow,
}: Props) {
  return (
    <div className={className}>
      <p>
        Beide Modi helfen dir, die Stärke deines Passworts zu bewerten und
        potenzielle Schwachstellen aufzudecken
      </p>
      <p>
        Wähle den Modus, der am besten zu deinen Sicherheitsanforderungen passt,
        um deine Passwörter effektiv zu schützen.
      </p>

      <Button
        className="w-2/4 mx-auto mt-12"
        onClick={() => {
          handleCardGrow(!mojoGrow);
        }}
      >
        {mojoGrow ? "Verkleinern" : "Vergrössern"}
      </Button>
    </div>
  );
}

export default MojoExtendetTextButton;
