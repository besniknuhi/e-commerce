import "./App.css";
import Banner from "./Components/banners/Banner";
import LowerBanner from "./Components/banners/LowerBanner";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Newsletter from "./Components/newsletter/Newsletter";
import Products from "./Components/products/Products";
import Trending from "./Components/trending/Trending";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Products />
        <Banner />
        <Trending />
        <LowerBanner />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
