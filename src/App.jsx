// react-router-dom
import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/layout/Layout.jsx";

// pages
import HomePage from "./components/pages/home/HomePage.jsx";
import NotFoundPage from "./components/pages/notFound/404.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
