import routes from "../routes";
import MainPage from "./MainPage";

export default function HomePage() {
  return (
    <div className="content-wrapper">
      <MainPage />
       {routes.map((route) => {
         if (route.path === "/") {
           return null
          } else return <route.Component />
       })}
    </div>
  )
}