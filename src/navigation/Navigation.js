import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Gallery from "../pages/gallery/Gallery";
import Home from "../pages/home/Home";

function AppLayout({ children }) {
  const location = useLocation();

  // Liste des chemins où le Header ne doit pas s'afficher
  const hideHeaderPaths = ["/gallery"];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <main>{children}</main>
    </>
  );
}

function Navigation() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </AppLayout>
    </BrowserRouter>
  );
}

export default Navigation;