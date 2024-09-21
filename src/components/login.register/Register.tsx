import { Checkbox, Label, TextInput, Button, Modal } from "flowbite-react"
import {register} from "../../backend/register.ts"
import { useState } from "react";
import { registryData } from "../../interfaces/interfaces";
import { useModalContext, useLoginContext } from "../../contexts/Contexts.tsx";



function Register() {

    const [userData, setUserData] = useState<registryData>({username: "", password: "", email: "", visits: 1, generated_passwords: 0, tested_passwords: 0, generated_usernames: 0, avatar: "/assets/profilePics/default.jpeg"});

    const {setOpenModal } = useModalContext();
    const {setLoggedIn } = useLoginContext();

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
        <TextInput id="username" type="text" placeholder="KartoffelPolizist" required shadow autoFocus
        onChange={(e) => setUserData({...userData, username: e.target.value})}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Deine E-mail" />
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow 
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Dein Passwort" />
        </div>
        <TextInput id="password2" type="password" required shadow 
        onChange={(e) => setUserData({...userData, password: e.target.value})}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Und nochmal...Passwort?Email? Who knows.." />
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" checked />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Welcome to the Darkside of the Moon</Button>
    </form>
    </Modal.Body>
  )
}

export default Register
