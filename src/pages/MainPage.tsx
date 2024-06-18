import Banner from "../Components/banners/Banner";
import LowerBanner from "../Components/banners/LowerBanner";
import Home from "../Components/home/Home";
import Products from "../Components/products/Products";
import Trending from "../Components/trending/Trending";

export default function MainPage() {
  return (
    <>
      <Home />
      <Products />
      <Banner />
      <Trending />
      <LowerBanner />
    </>
  );
}
