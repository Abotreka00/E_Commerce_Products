import { FaTrash } from "react-icons/fa";
import { decreamentCount, increamentCount, removeItem } from "../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "../redux/changeAddress";
import { Flip, toast } from "react-toastify";
import { GiEmptyWoodBucketHandle } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const productInCart = useSelector((state) => state.cart.productInCart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const address = useSelector((state) => state.mangeAddress.address);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleIncreament = (id) => {
    dispatch(increamentCount(id));
  };

  const handleDecreament = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decreamentCount(id));
    } else {
      toast.warn("You can't remove the last item", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
      });
    }
  };

  const handleCheckout = () => {
    dispatch(toggleSwitch());
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">SHOPPING CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Cart Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 mb-4 font-semibold">
              <div className="col-span-6">PRODUCT</div>
              <div className="col-span-2">PRICE</div>
              <div className="col-span-2">QUANTITY</div>
              <div className="col-span-2">SUBTOTAL</div>
            </div>

            {/* Product Item */}
            {productInCart.length > 0 ? (
              productInCart.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 gap-4 items-center py-4 border-t"
                >
                  <div className="col-span-6 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <span>{product.title}</span>
                  </div>
                  <div className="col-span-2">${product.price}</div>
                  <div className="col-span-2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleDecreament(product.id, product.quantity)
                      }
                      className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => handleIncreament(product.id)}
                      className="px-3 py-1 border rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-2 flex items-center justify-between">
                    <span>${parseFloat(product.totalPrice).toFixed(2)}</span>
                    <button
                      onClick={() => handleRemoveItem(product.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center py-10">
                <GiEmptyWoodBucketHandle className="text-9xl text-redBisic" />
                <div className="text-center py-10 font-bold text-2xl text-redBisic">
                  Your cart is empty
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="font-bold mb-4">CART TOTALS</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>TOTAL ITEMS:</span>
                <span>{totalQuantity} items</span>
              </div>

              <div className="pt-4 border-t">
                <div className="mb-2">Shipping:</div>
                <div className="text-sm text-gray-600 mb-2">
                  shipping to{" "}
                  <span className="font-bold text-redBisic text-[16px]">
                    {address}
                  </span>
                </div>
                <button
                  onClick={() => handleCheckout()}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Change Address
                </button>
              </div>

              <div className="pt-4 border-t flex justify-between font-bold">
                <span>Total Price:</span>
                <span>${parseFloat(totalAmount).toFixed(2)}</span>
              </div>

              <button
                onClick={() => navigate("/checkOut")}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
                title="Complete your purchase"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
