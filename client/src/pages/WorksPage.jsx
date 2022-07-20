import '../css/pages/WorksPage.sass'
import WorkCard from "../components/WorkCard";

export default function WorksPage() {
  return (
    <div className="page works">
      <h1 className="page-title">Works</h1>

      <ul className="works-container">
        <WorkCard id={'2x2club'} urlGit={'github.com/Samarit/2x2club-speedreading'} />
        <WorkCard id={'charty'} urlGit={'github.com/Samarit/chart-project'} url={'radiant-woodland-88467.herokuapp.com/'}/>
      </ul>
    </div>
  )
}