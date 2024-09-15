import IdentityWizard from "./IdentityWizard"
import MindMaestro from "./MindMaestro"

function UsernameGenerating() {
  return (
    <main className="grid md:grid-cols-1 lg:grid-cols-2">
        <IdentityWizard/>
        <MindMaestro/>
    </main>
  )
}

export default UsernameGenerating
