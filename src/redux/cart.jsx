import { createSlice } from "@reduxjs/toolkit";

// Function to load the cart state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Could not load state from localStorage", error);
    return undefined;
  }
};

// Function to save the cart state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage", error);
  }
};

// Load the initial state
const initialState = loadStateFromLocalStorage() || {
  productInCart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const existingIds = new Set(state.productInCart.map((item) => item.id));

      const uniqueItems = action.payload
        .filter((newItem) => !existingIds.has(newItem.id))
        .map((item) => ({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        }));

      state.productInCart.push(...uniqueItems);

      uniqueItems.forEach((item) => {
        state.totalQuantity += item.quantity;
        state.totalAmount += item.price * item.quantity;
      });

      saveStateToLocalStorage(state);
    },

    increamentCount(state, action) {
      const id = action.payload;
      const item = state.productInCart.find((item) => item.id === id);

      if (item) {
        item.quantity += 1;
        item.totalPrice = item.quantity * item.price;

        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }

      saveStateToLocalStorage(state);
    },

    decreamentCount(state, action) {
      const id = action.payload;
      const item = state.productInCart.find((item) => item.id === id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;

        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }

      saveStateToLocalStorage(state);
    },

    removeItem(state, action) {
      const id = action.payload;
      const itemToRemove = state.productInCart.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.totalPrice;

        state.productInCart = state.productInCart.filter(
          (item) => item.id !== id
        );
      }

      saveStateToLocalStorage(state);
    },
  },
});

export const { addProduct, removeItem, increamentCount, decreamentCount } =
  cartSlice.actions;

export default cartSlice.reducer;
