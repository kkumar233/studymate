import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header"; 
import Home from "./pages/home"; 
import Upload from "./pages/upload";
import Download from "./pages/download";
import About from "./pages/about";
import Feedback from "./pages/feedback";
import Footer from "./pages/footer";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Upload />
      <Download />
      <About />
      <Feedback />
      <Footer />
      <AdminPanel />
    </Router>
  );
}

export default App;
