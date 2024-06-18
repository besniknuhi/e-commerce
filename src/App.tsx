import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/product/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
