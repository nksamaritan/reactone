import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Headers";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Service from "./components/Service";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaQuery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
