
import { useSlideContext } from "../../contexts/Contexts";
import IdentityWizard from "./identityWizard/IdentityWizard";
import MindMaestro from "./mindMaestro/MindMaestro";

function UsernameGenerating() {

  const {direction} = useSlideContext()
  console.log(direction)
  return (
    <main className={`grid md:grid-cols-1 lg:grid-cols-2 ${direction ? `animate-${direction}` : ''}`}>
      <IdentityWizard />
      <MindMaestro />
    </main>
  );
}

export default UsernameGenerating;
