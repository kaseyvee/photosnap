import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

function Router() {
  const pagesRoutes = pagesData.map(page => {
    return (
      <Route
        key={page.title}
        path={`${page.path}`}
        element={page.element}
      />
    )
  })

  return <Routes>{pagesRoutes}</Routes>;
}

export default Router;