import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="navbar-wrapper">
      <nav className={ isExpanded ? "navbar expanded" : "navbar"}>

        <div 
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
          className="navbar-toggle"
          >
            <div 
              id="hamburger"
              className={ isExpanded ? "open" : undefined }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <ul className="navbar-menu">

          {routes.map( ({path, name}) => (
            <li key={name} onClick={() => { setIsExpanded(false)} }>
              <Link to={path}>{name}</Link>
            </li>
          ))}

        </ul>

      </nav>
    </div>
  )
}