import Home from "./_home";
import Stories from "./_stories";
import Features from "./_features";
import Pricing from "./_pricing";
import NotFound from "./_notFound";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "/stories",
    element: <Stories />,
    title: "stories",
  },
  {
    path: "/features",
    element: <Features />,
    title: "features",
  },
  {
    path: "/pricing",
    element: <Pricing />,
    title: "pricing",
  },
  {
    path: "/*",
    element: <NotFound />,
    title: "notFound",
  }
];

export default pagesData;