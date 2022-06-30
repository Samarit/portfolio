import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import SkillsPage from "./pages/SkillsPage"
import WorksPage from "./pages/WorksPage"

const routes = [
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/skills', name: 'Skills', Component: SkillsPage },
  { path: '/works', name: 'Works', Component: WorksPage },
  { path: '/contacts', name: 'Contacts', Component: ContactsPage }
]

export default routes