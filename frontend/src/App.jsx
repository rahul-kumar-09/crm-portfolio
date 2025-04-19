import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/project/Projects";
import Posts from "./pages/post/Post";
import AdminDashboard from "./pages/adminDashboard/AdminDashboard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/admin-login" element={<AdminDashboard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
