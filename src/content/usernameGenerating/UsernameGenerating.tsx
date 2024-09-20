

import IdentityWizard from "./identityWizard/IdentityWizard";
import MindMaestro from "./mindMaestro/MindMaestro";

function UsernameGenerating() {



  return (
    <main className={`grid md:grid-cols-1 lg:grid-cols-2  w-full overflow-hidden h-[90vh] content-center`    }>
      <IdentityWizard />
      <MindMaestro />
    </main>
  );
}

export default UsernameGenerating;
