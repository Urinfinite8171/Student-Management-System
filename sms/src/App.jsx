import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./InnovationS/SMS/Features/Home";
import Solutions from "./InnovationS/SMS/Features/Solutions";
import WhyChooseUs from "./InnovationS/SMS/Features/WhyChooseUs";
import Footer from "./InnovationS/SMS/Footer/Footer";
import Header from "./InnovationS/SMS/Header/Header";
import Pricing from "./InnovationS/SMS/Features/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
