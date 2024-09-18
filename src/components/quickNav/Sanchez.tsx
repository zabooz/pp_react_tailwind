import { Button, Label, Textarea, Drawer } from "flowbite-react";
import { useState} from "react";
import { sanchezAi } from "./sanchezScript";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

function Sanchez({ isOpen, handleClose }: Props) {


  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleClick = () => {

    sanchezAi({question,setAnswer})
    
  }


  return (
    <Drawer open={isOpen} onClose={handleClose} className="pt-20" >
      <Drawer.Header titleIcon={() => <></>} />
      <div>
        <img
          src="src/assets/sanchez/_sanchez.jpeg"
          alt="sanchez"
          className="rounded-full mx-auto  w-24"
        />
        <h2 className="text-4xl font-bold text-[#9ca3af] text-center mt-5">
          Sanchez
        </h2>
      </div>
      <Drawer.Items>
          <div className="my-10">
            <Label htmlFor="message" className="mb-2 block">
              
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Hallo ich bin Sanchez und beantworte gerne deine Fragen über Internetsicherheit!"
              rows={4}
              onInput={(e) => {
                setQuestion((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-1/2 ms-auto"
            onClick={handleClick}>
              Send message
            </Button>
          </div>
          <p className="text-left p-3 text-[#9ca3af] text-lg">{answer}</p>
      </Drawer.Items>
    </Drawer>
  );
}

export default Sanchez;
