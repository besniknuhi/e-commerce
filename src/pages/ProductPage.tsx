import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./productpage.module.css";
import Trending from "../Components/trending/Trending";
import { items } from "../assets/AllData";

export default function ProductPage() {
  const { id } = useParams<{ id: any }>();
  const item = items.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState<number>(1);
  const [image, setImage] = useState(item[0].img);

  const changeImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setImage(e.currentTarget.src);
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.container}>
        <div className={styles.productDiv}>
          <div className={styles.left}>
            <div className={styles.mainImg}>
              <img src={image} alt="product image" />
            </div>
            <div className={styles.otherImg}>
              <img
                onMouseOver={changeImage}
                src={item[0].img}
                alt="product image"
              />
              <img
                onMouseOver={changeImage}
                src={item[0].otherImgs[0]}
                alt="product image"
              />
              <img
                onMouseOver={changeImage}
                src={item[0].otherImgs[1]}
                alt="product image"
              />
            </div>
          </div>
          <div className={styles.right}>
            <h3>{item[0].description}</h3>
            <p>{item[0].specs}</p>
            <div className={styles.quantity}>
              <p>Quantity</p>
              <div className={styles.productButtons}>
                <button onClick={decrease}>-</button>
                <p>{quantity}</p>
                <button onClick={increase}>+</button>
              </div>
              <p>${item[0].price * quantity}.00</p>
            </div>
            <div className={styles.buy}>
              <button>Add to cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
        <div className={styles.specifications}>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Texture:</p>
            <p className={styles.specDesc}>{item[0].texture}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Weight:</p>
            <p className={styles.specDesc}>{item[0].weight}</p>
          </div>
          <div className={styles.spec}>
            <p className={styles.specTitle}>Size:</p>
            <p className={styles.specDesc}>{item[0].size}</p>
          </div>
        </div>
      </div>
      <Trending />
    </div>
  );
}
