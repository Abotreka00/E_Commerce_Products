import ChangeAddress from "../components/ChangeAddress";
import ShoppingCart from "../components/ShoppingCart";

function Cart() {
  return (
    <div className="w-full relative">
      <ShoppingCart />
      <ChangeAddress />
    </div>
  );
}

export default Cart;
