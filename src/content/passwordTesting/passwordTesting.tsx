import Mojo from "./mojo/Mojo.tsx";
import Excalibur from "./excalibur/Excalibur.tsx";
import { useSlideContext } from "../../contexts/Contexts.tsx";
function passwordTesting() {



  const {direction} = useSlideContext()

  console.log(direction)
  return (
    <>
        <main className={`grid sm:grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 w-full ${direction ? `animate-${direction}` : ''}`} >
        <Mojo />
        <Excalibur />
      </main>
    </>
  );
}

export default passwordTesting;
