import './css/_reset.sass'
import './css/App.sass'
import './css/Pages.sass'
import './css/components/Navbar.sass'
import Navbar from "./components/Navbar"
import Content from "./pages/Content";
import { useState } from 'react'
import React from 'react'

// Context for mobile navbar expand state 
export const NavbarExpand = React.createContext()

function App() {

  // Mobile navbar expand state
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