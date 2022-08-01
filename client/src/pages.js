import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import SkillsPage from "./pages/SkillsPage"
import WorksPage from "./pages/WorksPage"

const pages = [
  { id: 'about', name: 'About', Component: AboutPage },
  { id: 'skills', name: 'Skills', Component: SkillsPage },
  { id: 'works', name: 'Works', Component: WorksPage },
  { id: 'contacts', name: 'Contacts', Component: ContactsPage }
]

export default pages