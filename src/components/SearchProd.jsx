import { FaStar } from "react-icons/fa";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Flip, toast } from "react-toastify";
import { productsAsyncThunk } from "../redux/productSlice";
import { useEffect, useMemo, useState } from "react";
import { addProduct } from "../redux/cart";
import { Link } from "react-router-dom";

function SearchProd() {
  const { searchProd } = useSelector((state) => state.products);
  const [addToCart, setAddToCart] = useState([]);
  const dispatch = useDispatch();

  console.log("product.rating.rate: ", searchProd);

  useEffect(() => {
    dispatch(productsAsyncThunk());
  }, []);

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

  const renderStarRating = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return (rate) => {
      const starCount = Math.floor(rate);
      return (
        <div className="flex flex-row items-center mt-2">
          {[...Array(starCount)].map((_, index) => (
            <FaStar key={index} className="text-lg text-yellow-700" />
          ))}
        </div>
      );
    };
  }, []);

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {searchProd.length > 0 ? (
          searchProd.map((product) => (
            <Link
              to={`/productdetils/${product.id}`}
              key={product.id}
              className="w-full h-fit shadow-lg rounded-lg p-3 cursor-pointer duration-300 hover:scale-110"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] p-5 md:h-[300px] md:p-10"
              />
              <div className="relative w-full h-[150px]">
                <h3 className="capitalize min-h-[150px] font-bold md:text-lg">
                  {product.title}
                </h3>
                <div className="absolute bottom-0 left-0 w-full flex flex-row my-2 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-bold">
                      ${product.price}
                    </span>
                    {renderStarRating(product.rating.rate)}
                  </div>
                  <button
                    onClick={() =>
                      handleAddToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        category: product.category,
                        image: product.image,
                      })
                    }
                    className="flex items-center justify-center transition-all duration-300 w-8 h-8 bg-redBisic group text-white text-sm rounded-full hover:w-32 hover:bg-hoverRedBisic cursor-pointer"
                  >
                    <span className="group-hover:hidden">+</span>
                    <span className="hidden group-hover:block">
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-5 mx-auto flex flex-col items-center space-y-10 mb-20">
            <VscWorkspaceUnknown size={200} color="red" />
            <span className="text-2xl font-bold text-red-600">
              Not found any products match your search
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchProd;
