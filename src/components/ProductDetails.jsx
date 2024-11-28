import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { addProduct } from "../redux/cart";

function ProductDetails() {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [addToCart, setAddToCart] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const newitem = products.find((item) => item.id === parseInt(id));

      setProduct(newitem);
    }
  }, [id, products]);

  const handleAddToCart = (item) => {
    // Check if item is already in the cart
    const isItemInCart = addToCart.some((cartItem) => cartItem.id === item.id);

    if (!isItemInCart) {
      // Add item to the cart
      setAddToCart([...addToCart, item]);

      // Show success toast notification
      toast.success("Added To Cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    } else {
      // Show already in cart toast notification
      toast.error("Oh no! Product is already in the cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  };

  useEffect(() => {
    dispatch(addProduct(addToCart));
  }, [dispatch, addToCart]);

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-h-[400px]">
          <img src={product.image} alt={product.id} className="h-full w-full" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-700 text-lg mb-4">${product.price}</p>
          <p>{product.description}</p>
          <div className="flex items-center my-4">
            <button
              onClick={() => {
                handleAddToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  image: product.image,
                });
              }}
              className="flex items-center justify-center transition-all duration-300 w-8 h-8 bg-redBisic group text-white text-sm rounded-full hover:w-32 hover:bg-hoverRedBisic cursor-pointer"
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block">Add to Cart</span>
            </button>
          </div>
          <div className="flex items-center mb-2">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Delivery & Return
            </a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
