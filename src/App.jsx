import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import AboutPage from "./Pages/AboutPage";
import DestinationPage from "./Pages/DestinationPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Addis from "./Pages/Addis";
import Addis1 from "./Pages/Addis1";
import AddisIT from "./Pages/AddisIT";
import ArbaMinch from "./Pages/ArbaMinch";
import Axum from "./Pages/Axum";
import { LanguageProvider } from "./context/LanguageContext";
import SEO from "./Components/SEO";
import MobileDrawer from "./Components/MobileDrawer";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import DrawerContent from "./Components/DrawerContent";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [window.location.pathname]);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <LanguageProvider>
      <SEO />
      <Router>
        <Navbar onMobileMenuOpen={handleDrawerOpen} />
        <MobileDrawer open={drawerOpen} onClose={handleDrawerClose}>
          <DrawerContent onClose={handleDrawerClose} />
        </MobileDrawer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/About" element={<AboutPage />} /> */}
          <Route path="/Destination" element={<DestinationPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Addis" element={<Addis />} />
          <Route path="/Addis1" element={<Addis1 />} />
          <Route path="/AddisIT" element={<AddisIT />} />
          <Route path="/Axum" element={<Axum />} />
          <Route path="/ArbaMinch" element={<ArbaMinch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
