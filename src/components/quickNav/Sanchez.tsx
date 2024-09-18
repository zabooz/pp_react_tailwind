import { Button, Label, Textarea, Drawer } from "flowbite-react";
import { useRef } from "react";


interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

function Sanchez({ isOpen, handleClose }: Props) {

  const answerRef = useRef(null)

  return (
    <Drawer open={isOpen} onClose={handleClose} className="pt-20">
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
            />
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-1/2 ms-auto">
              Send message
            </Button>
          </div>
          <p ref={answerRef} />
      </Drawer.Items>
    </Drawer>
  );
}

export default Sanchez;
