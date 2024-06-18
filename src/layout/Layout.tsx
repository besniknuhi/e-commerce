import { Outlet } from "react-router-dom";
import Header from "../Components/header/Header";
import Newsletter from "../Components/newsletter/Newsletter";
import Footer from "../Components/footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
