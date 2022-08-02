import '../css/pages/WorksPage.sass'
import WorkCard from "../components/WorkCard"
import works from '../data/works.js'
import Page from '../components/Page'

export default function WorksPage( {id} ) {
  return (
    <Page id={id}>

      <ul className="works-container">
        {works.map((work, i) => <WorkCard work={work} key={i} />)}
      </ul>
    </Page>
  )
}