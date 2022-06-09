import { Route, Routes, useLocation } from "react-router-dom";
import routes from '../routes'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import HomePage from "../pages/HomePage";

export default function Content() {

  const location = useLocation()

  return (
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="page" timeout={300}>

          <Routes location={location}>

            <Route path="/" element={<HomePage />}></Route>

            { routes.map( ({path, Component}) => (
                <Route 
                  path={path} 
                  key={path} 
                  element={<Component />}>
                </Route>
              ))}
          </Routes>
          
        </CSSTransition>
      </SwitchTransition>
  )
}