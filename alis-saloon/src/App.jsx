import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Components/Services";
import Booking from "./Pages/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;