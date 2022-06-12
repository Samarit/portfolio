import { useContext } from "react"
import { NavbarExpand } from "../App"
import TagCloud from "../components/TagCloud"

export default function AboutPage() {

  const [isExpanded] = useContext(NavbarExpand)

  return (
    <div className="page">
      <h1>About</h1>
      <div className="cloud" style={{ display: isExpanded ? 'none' : 'block' }}>
        <TagCloud />
      </div>
    </div>
  )
}