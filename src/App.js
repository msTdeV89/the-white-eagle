import { Routes, Route } from "react-router-dom";

import Layout from "./router/Layout";
import Home from "./components/home/Home";
import Events from "./components/events/Events";
import Hire from "./components/hire/Hire";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Missing from "./components/Missing";

function App() {
  return (
    <div className="overflow-hidden mt-16">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="hire" element={<Hire />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
