import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// Create a Home component to contain the main page content
const Home = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Resume />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/nutri" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
