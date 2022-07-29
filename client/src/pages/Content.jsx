import pages from '../pages'
import TitlePage from './TitlePage'

export default function Content() {

  return (<>
            <TitlePage />

            { pages.map( ({id, Component}) => <Component id={id}/>)}
              </>
  )
}