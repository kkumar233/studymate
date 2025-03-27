import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home"; // Updated import
import Upload from "./pages/upload";
import Download from "./pages/download";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import Footer from "./components/footer";
import Modals from "./pages/modals";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Upload />
        <Download />
        <About />
        <Feedback />
        <Footer />
        <Modals /> {/* Updated component name */}
      </div>
    </Router>
  );
}

export default App;
