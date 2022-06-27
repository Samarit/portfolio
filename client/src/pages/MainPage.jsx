import { Link } from "react-router-dom"
import '../css/MainPage.sass'

export default function MainPage() {
  
  return (
        <div className="page">
          <h1>HELLO!</h1>
          <h2>I'm Aleksey, web-developer</h2>
          <Link to={'/contacts'} id='mainButton'>Contact me!</Link>
        </div>
  )
}