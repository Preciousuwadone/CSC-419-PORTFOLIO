import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails"; // The new page we are adding
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Main Portfolio Page */}
      <Route path="/" element={<Index />} />
      
      {/* Dedicated Project Details Page (Dynamic ID) */}
      <Route path="/project/:id" element={<ProjectDetails />} />
      
      {/* 404 Page for any undefined routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;