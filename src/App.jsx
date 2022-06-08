import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  background-image: url("assets/subtle-prism.svg");
  min-height: 100vh;
  overflow: hidden;
`;

export default App;
