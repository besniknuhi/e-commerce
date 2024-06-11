import CategoriesItems from "../Components/categories/CategoriesItems";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import Newsletter from "../Components/newsletter/Newsletter";
import styles from "./categories.module.css";

export default function Categories() {
  return (
    <>
      <Header />
      <CategoriesItems />
      <Newsletter />
      <Footer />
    </>
  );
}
