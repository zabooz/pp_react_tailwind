import Mojo from "./mojo/Mojo.tsx";
import Excalibur from "./excalibur/Excalibur.tsx";


function PasswordTesting() {


  return (
    <>
      <main
        className={` grid sm:grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 w-full overflow-hidden h-[90vh] content-center
        }`}
      >
        <Mojo />
        <Excalibur />
      </main>
    </>
  );
}

export default PasswordTesting;
