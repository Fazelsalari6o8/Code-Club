// components
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
