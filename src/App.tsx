import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Router from "./pages/router";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  )
}

export default App;