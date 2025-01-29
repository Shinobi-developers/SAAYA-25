import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
