import routes from "../routes";
import TitlePage from "./TitlePage";

// Page

export default function HomePage() {
  return (
    <div className="content-wrapper">

      <TitlePage />

      {routes.map((route) => {
        if (route.path === "/") {
          return null
         } else return <route.Component key={route.path}/>
      })}
      
    </div>
  )
}