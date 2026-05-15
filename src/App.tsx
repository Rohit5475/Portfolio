import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Layout from "./Layout"
import ScrollToTop from "./components/ScrollToTop";
import PageTitle from "./components/PageTitle";

export default function App() {
  return (
    <>
      <PageTitle />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
