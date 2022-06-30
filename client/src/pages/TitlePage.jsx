import { Link } from "react-router-dom"
import '../css/TitlePage.sass'

export default function TitlePage() {
  
  return (
        <div className="page titlepage">
          <h1>HELLO!</h1>
          <h2>I'm Aleksey, <br/>web-developer</h2>
          <Link to={'/contacts'} id='mainButton'>Contact me!</Link>
        </div>
  )
}