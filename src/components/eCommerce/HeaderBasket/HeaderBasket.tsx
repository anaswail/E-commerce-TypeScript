import styles from "./styles.module.css";
import Cart from "@assets/images/shoppingCart.png";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <img src={Cart} alt="Hello" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
