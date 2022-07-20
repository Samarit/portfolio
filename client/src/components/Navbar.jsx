import { useContext } from "react";
import { Link } from "react-router-dom"
import { NavbarExpand } from "../App"
import contacts from "../collections/contacts";
import routes from "../routes"
import IconLink from "./IconLink"

export default function Navbar() {

  const [isExpanded, setIsExpanded] = useContext(NavbarExpand)

  return (
    <div className="navbar-wrapper">
      <nav className={ isExpanded ? "navbar expanded" : "navbar"}>

        <div className="navbar-logo">
          <Link to={'/'} onClick={() => { setIsExpanded(false) }}>
            <div 
              id="logo" 
              style={{backgroundImage: `url(/icons/logo.svg)`}}>
            </div>
          </Link>
        </div>

        <div 
          className="navbar-toggle"
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}>
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

        <div className="contact-links">

            {contacts.map( (contact) => <IconLink id={contact.id} url={contact.url} key={contact.index} /> )}

        </div>

      </nav>
    </div>
  )
}