import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-opensans bg-color-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
