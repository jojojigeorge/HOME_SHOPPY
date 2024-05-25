import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route  path="cart" element={<Cart />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
