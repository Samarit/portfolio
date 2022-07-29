import '../css/pages/WorksPage.sass'
import WorkCard from "../components/WorkCard"

export default function WorksPage( {id} ) {
  return (
    <div className="page works" id={id}>

      <h1 className="page-title">Works</h1>

      <ul className="works-container">
        <WorkCard id={'2x2club'} urlGit={'github.com/Samarit/2x2club-speedreading'}>
          {{
            title: 'Клуб говна',
            text: 'Который мы вроде сделали' 
          }}
        </WorkCard>

        <WorkCard id={'charty'} urlGit={'github.com/Samarit/chart-project'} url={'radiant-woodland-88467.herokuapp.com/'}>
          {{
            title: 'Charty',
            text: 'This is my first pet-project. It gets chart data from BinanceAPI with websocket and render it on chart.'
          }}
        </WorkCard>

        <WorkCard id={'shorten'} urlGit={'https://github.com/Samarit/mern-practice'} url={''}>
          {{
            title: 'Link-shorter',
            text: ' Web-application that takes any link and shorten it. App have auth and history. '
          }}
        </WorkCard>
      </ul>

    </div>
  )
}