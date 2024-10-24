import { Label, RangeSlider, Radio } from "flowbite-react";

interface Props {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
    setLanguage: (value: string) => void;
}

function GlyphControl({ passwordLength, setPasswordLength,setLanguage }: Props) {
  const handleLanguageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT" && target.type === "radio") {
      setLanguage(target.value);
    }
  };

  return (
    <div className="h-full">
      <Label htmlFor="glyphrange">
        Passwortlänge: {passwordLength ? passwordLength : 6}
      </Label>
      <RangeSlider
        id="glyphrange"
        name="glyphrange"
        min={2}
        max={14}
        defaultValue={6}
        onChange={(e) =>
          setPasswordLength(Number((e.target as HTMLInputElement).value))
        }
      />
      <div
        onClick={(e) => handleLanguageClick(e)}
        className="w-full flex justify-evenly mt-3"
      >
        <div>
          <Label htmlFor="english">English</Label>
          <Radio
            id="english"
            name="language"
            value={"english"}
            defaultChecked
            className="ms-3"
          />
        </div>
        <div>
          <Label htmlFor="german">German</Label>
          <Radio
            id="german"
            name="language"
            value={"german"}
            className="ms-3"
          />
        </div>
      </div>
    </div>
  );
}

export default GlyphControl;
