
import { userGenerator } from "../usernameGeneratingScript";
import { translator } from "./translator";
interface Props{
    userValues : string[]
}
function IdentityTable({userValues}:Props) {

  return (
    <div>
        <div>
          {translator(userValues).map((item) => <span key={Math.random()}> {item} </span>)}
        </div>
        <div>
           {userGenerator({ userValues })}
        </div>
    </div>
  );
}

export default IdentityTable
