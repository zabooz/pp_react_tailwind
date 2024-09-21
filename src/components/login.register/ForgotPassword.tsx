import { Modal,Button, TextInput, Label } from "flowbite-react"
import { useState } from "react"

interface Props {
  showPassword: boolean
  setShowPassword: (showPassword: boolean) => void

}

function ForgotPassword({ showPassword, setShowPassword  }: Props) {

    const [newPassword,setNewPassword] = useState<string>("")

    const handleClick = (newPassword : string) => {

      console.log(newPassword)

    }


  return (
    <Modal dismissible show={showPassword} onClose={() => setShowPassword(false)}>
    <Modal.Header>Passwort vergessen</Modal.Header>
    <Modal.Body>
      <Label htmlFor="password" value="Benutzername" />
      <TextInput
      onInput={(e) => setNewPassword(e.currentTarget.value)}
      ></TextInput>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => {
        setShowPassword(false)
        handleClick(newPassword)
        }}>Juheeee</Button>

    </Modal.Footer>
  </Modal>
  )
}
export default ForgotPassword