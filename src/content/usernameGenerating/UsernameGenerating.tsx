
import IdentityWizard from "./identityWizard/IdentityWizard";
import MindMaestro from "./mindMaestro/MindMaestro";

function UsernameGenerating() {
  return (
    <main className="grid md:grid-cols-1 lg:grid-cols-2">
      <IdentityWizard />
      <MindMaestro />
    </main>
  );
}

export default UsernameGenerating;
