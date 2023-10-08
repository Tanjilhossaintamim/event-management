import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className={`font-opensans bg-color-background`}>
      <Navbar />
      <Outlet />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
