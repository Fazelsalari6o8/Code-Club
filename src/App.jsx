// react-router-dom
import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/layout/Layout.jsx";

// pages
import HomePage from "./components/pages/home/HomePage.jsx";
import NotFoundPage from "./components/pages/notFound/404.jsx";
import AboutUs from "./components/pages/aboutUs/AboutUs.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
