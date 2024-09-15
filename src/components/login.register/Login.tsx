
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react"
import { useState,useContext } from "react";
import { ModalContext,LoginContext } from "../../contexts/Contexts.ts";
import { loginData } from "../../interfaces/interfaces";
import {login} from "../../backend/login.ts"
interface Props {
  handleRegisterClick: () => void

}


function Login({handleRegisterClick}:Props) {

    const [userData, setUserData] = useState<loginData>({username: "", password: ""});
    const {setOpenModal} = useContext(ModalContext)
    const {setLoggedIn} = useContext(LoginContext)
  const handleLoginClick = async () => {
    

    try{
        const result =  await login(userData)
        if(result){
          setLoggedIn(true)
          setOpenModal(false)
          
        }
    }catch(error){
        console.log(error)
    }


  }



  return (
    <Modal.Body>
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Benutzername" />
          </div>
          <TextInput id="username" placeholder="KartoffelPolizist" required
          onChange={(e) => setUserData({...userData, username: e.target.value})}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Passwort" />
          </div>
          <TextInput id="password" type="password" required 
          onChange ={(e) => setUserData({...userData, password: e.target.value})}
          
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
            Lost Password?
          </a>
        </div>
        <div className="w-full">
          <Button onClick={handleLoginClick}>Log in to your account</Button>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?&nbsp;
          <span className="text-cyan-700 hover:underline dark:text-cyan-500"
            onClick={handleRegisterClick}
          >
            Create account
          </span>
        </div>
      </div>
    </Modal.Body>
  )
}

export default Login