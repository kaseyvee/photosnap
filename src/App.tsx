import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Router from "./pages/router";

function App() {
  return (
    <BrowserRouter basename="/photosnap">
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App;