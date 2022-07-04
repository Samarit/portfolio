import { useContext } from "react"
import { NavbarExpand } from "../App"
import TagCloud from "../components/TagCloud"
import '../css/pages/AboutPage.sass'

export default function AboutPage() {

  const [isExpanded] = useContext(NavbarExpand)

  return (
    <div className="page about">
      <h1 className="page-title">About</h1>
      <div className="page-body">
        <article>
          <h3>
            Some text about me
          </h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing 
          elit. Vero error sapiente ad laborum quisquam 
          ducimus minima placeat modi consequatur repellat 
          commodi tempora sed nam nesciunt, doloremque beatae? 
          Quis, enim ea.
        </article>

        <div className="cloud" style={{ display: isExpanded ? 'none' : 'block' }}>
          <h3>Uninteresting facts</h3>
          <TagCloud />
        </div>
      </div>
    </div>
  )
}