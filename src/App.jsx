
import Navbar from "./componenets/Navbar";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (

    <div>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>
    </div>
  )
};

export default App;
