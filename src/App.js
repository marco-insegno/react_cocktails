import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Cocktails from "./views/Cocktails";
import SingleCocktail from "./views/SingleCocktail";
import ErrorPage from "./views/ErrorPage";
import { useGlobalContext } from "./context";

function App() {

  return (
    <>
      <Router>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cocktails" element={<Cocktails/>}/>
          <Route path="/cocktail/:id" element={<SingleCocktail/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>

        <Footer />

      </Router>

    </>
  );
}

export default App;
