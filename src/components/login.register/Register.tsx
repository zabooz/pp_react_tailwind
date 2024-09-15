import { Checkbox, Label, TextInput, Button, Modal } from "flowbite-react"
import {register} from "../../backend/register.ts"
import { useState,useContext } from "react";
import { registryData } from "../../interfaces/interfaces";
import { ModalContext,LoginContext } from "../../contexts/Contexts.ts";



function Register() {

    const [userData, setUserData] = useState<registryData>({username: "", password: "", email: "", visits: 1, generated_passwords: 0, tested_passwords: 0, generated_usernames: 0, avatar: "src/assets/profilePics/default.jpeg"});

    const {setOpenModal } = useContext(ModalContext);
    const {setLoggedIn } = useContext(LoginContext);

  const handleRegistry = async(e:any) => {
    e.preventDefault()
    const response = await register(userData)
    if(response){
        setLoggedIn(true)
        setOpenModal(false)
    }

    setOpenModal(false)
    setLoggedIn(true)
  }

  return (
    <Modal.Body>
    <form className="flex max-w-md flex-col gap-4" onSubmit={(e) => handleRegistry(e)}>
    <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Dein Username" />
        </div>
        <TextInput id="username" type="text" placeholder="KartoffelPolizist" required shadow 
        onChange={(e) => setUserData({...userData, username: e.target.value})}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow 
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" required shadow 
        onChange={(e) => setUserData({...userData, password: e.target.value})}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
    </Modal.Body>
  )
}

export default Register
