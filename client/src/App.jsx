import './css/_reset.sass'
import './css/App.sass'
import './css/Pages.sass'
import './css/Navbar.sass'
import Navbar from "./components/Navbar"
import Content from "./components/Content";
import { useState } from 'react'
import React from 'react'

export const NavbarExpand = React.createContext()

function App() {

  const [ isExpanded, setIsExpanded ] = useState(false)

  return (
    <div className="App">
      <NavbarExpand.Provider value={ [isExpanded, setIsExpanded] }>
          <Navbar />

          <Content />
      </NavbarExpand.Provider>
    </div>
  );
}

export default App