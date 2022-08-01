import '../css/pages/WorksPage.sass'
import WorkCard from "../components/WorkCard"
import works from '../data/works.js'

export default function WorksPage( {id} ) {
  return (
    <div className={`page ${id}`} id={id}>

      <h1 className="page-title">Works</h1>

      <ul className="works-container">
        {works.map((work, i) => <WorkCard work={work} key={i} />)}
      </ul>

    </div>
  )
}