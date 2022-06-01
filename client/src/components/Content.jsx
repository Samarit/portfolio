import { Route, Routes, useLocation } from "react-router-dom";
import routes from '../routes'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
export default function Content() {

  const location = useLocation()

  return (
    <div className="content-wrapper">
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="page" timeout={300}>

          <Routes location={location}>
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
    </div>
  )
}