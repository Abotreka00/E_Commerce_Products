import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const address = useSelector((state) => state.mangeAddress.address);
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const handleOrder = () => {
    toast.error("This Page not work just now!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Thank you for your order!
        </h1>
        <p className="text-gray-600">
          Your order has been placed successfully. You will receive an email
          confirmation shortly.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Order Summary
            </h2>
            <p className="text-sm text-gray-600">
              Order Number: {parseInt(Math.random() * 1000000).toFixed(0)}
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">
              Shipping Information
            </h3>
            <div className="text-gray-600">
              <p>Main Streen</p>
              <p>{address}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-2">Items Ordered</h3>
            <div className="space-y-4">{totalQuantity}</div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-medium text-gray-800">
              <span>Total Price:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-6">
        <button
          onClick={handleOrder}
          className="px-6 py-2 bg-emerald-600 text-white rounded-md font-medium 
              hover:bg-emerald-700 transition-colors duration-200 
              focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Track Order
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-red-600 text-white rounded-md font-medium 
              hover:bg-red-700 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
