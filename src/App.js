import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { CustomerComplaint } from "./context/forms";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
     <CustomerComplaint>
       <div className="container">
        <Header />
          <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="about" element={<About />} />
          </Routes>
        <Footer />
      </div>
      </CustomerComplaint >
    </BrowserRouter>
  );
}

export default App;
