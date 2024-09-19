import Mojo from "./Mojo/Mojo.tsx";
import Excalibur from "./excalibur/Excalibur.tsx";

function passwordTesting() {
  return (
    <>
      <main className="grid sm:grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10 w-full">
        <Mojo />
        <Excalibur />
      </main>
    </>
  );
}

export default passwordTesting;
