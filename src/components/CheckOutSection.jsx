import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaCreditCard,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOutSection = () => {
  const productInCart = useSelector((state) => state.cart.productInCart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();

  const [openSections, setOpenSections] = useState({
    billing: true,
    shipping: false,
    payment: false,
  });
  const [formValue, setFormValue] = useState({
    fName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cashOrDebit: "",
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-4">
          {/* Billing Information  */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleSection("billing")}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
            >
              <h2 className="text-lg font-semibold">Billing Information</h2>
              {openSections.billing ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.billing && (
              <div className="p-4 space-y-4 border-t">
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="fName"
                    value={formValue.fName}
                    onChange={handleInputChange}
                    placeholder="Please enter your full name"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleInputChange}
                    placeholder="Please enter your email"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formValue.phone}
                    onChange={handleInputChange}
                    placeholder="Please enter your phone number"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Information  */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleSection("shipping")}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
            >
              <h2 className="text-lg font-semibold">Shipping Information</h2>
              {openSections.shipping ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.shipping && (
              <div className="p-4 space-y-4 border-t">
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={formValue.address}
                    onChange={handleInputChange}
                    placeholder="Please enter your address"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <FaCity className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    value={formValue.city}
                    onChange={handleInputChange}
                    placeholder="Please enter your city"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="zipCode"
                    value={formValue.zipCode}
                    onChange={handleInputChange}
                    placeholder="Please enter your ZIP code"
                    className="w-full pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method  */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleSection("payment")}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
            >
              <h2 className="text-lg font-semibold">Payment Method</h2>
              {openSections.payment ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {openSections.payment && (
              <div className="p-4 space-y-4 border-t">
                <div className="space-y-3">
                  <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md">
                    <input
                      type="radio"
                      name="cashOrDebit"
                      value="Cash"
                      onChange={handleInputChange}
                      checked={formValue.cashOrDebit === "Cash"}
                      className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Cash on Delivery</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-50 rounded-md">
                    <input
                      type="radio"
                      name="cashOrDebit"
                      value="Debit"
                      onChange={handleInputChange}
                      checked={formValue.cashOrDebit === "Debit"}
                      className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="flex items-center space-x-2">
                      <FaCreditCard className="text-gray-400" />
                      <span className="text-gray-700">Debit Card</span>
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-4">
              <div className="flex flex-col space-x-4">
                {productInCart.map((product) => (
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
                    <div className="col-span-3">
                      One Item Price : ${product.price}
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <span>quantity : {product.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Price Breakdown */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Items</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/orderconfirmpage")}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-4"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutSection;
// id
// title
// price
// description
// category
// image
// quantity
// totalPrice
// totalQuantity
// totalAmount
