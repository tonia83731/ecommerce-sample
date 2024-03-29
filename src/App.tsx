import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/collections" element={<ProductPage />} />
          <Route path="/men" element={<ProductPage />} />
          <Route path="/women" element={<ProductPage />} />
          <Route path="/about" element={<ProductPage />} />
          <Route path="/contact" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
