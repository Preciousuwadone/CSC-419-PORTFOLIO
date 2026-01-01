import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound"; // Import your cleaned 404 page

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Main Portfolio Page */}
      <Route path="/" element={<Index />} />
      
      {/* 404 Page for any undefined routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;