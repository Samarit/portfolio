import pages from '../pages'
import TitlePage from './TitlePage'

export default function Content() {

  return (
    <>
      <TitlePage />

      { pages.map( ({id, Component}, i) => <Component id={id} key={i} />)}
    </>
  )
}