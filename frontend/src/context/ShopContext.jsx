import { createContext, useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(true);
  const [cartItems,setCartItems] = useState({});
  const [token,setToken] =  useState('')
  const[products,setProducts] = useState([]);
  const navigate = useNavigate();
  const backendUrl= import.meta.env.VITE_BACKEND_URL;
  const[userID , setUSerID] = useState('');

  
  const addToCart = async(itemId,size)=>{

    if (!size) {
      toast.error("Select Product Size!");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
      
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { userId : userID , itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
    toast.success("Product added to cart!");

  }

  const getCartCount = () => {
    let totalcount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item];
          }
        } catch (error) {
          toast.error("Error while adding item to cart!");
        }
      }
    }
    return totalcount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          toast.error("Error while counting total amount in cart!");
        }
      }
    }
    return totalAmount;
  };

  // get product data
  const getProductsdata = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsdata();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  
    if (token) {
      try {
  
        console.log(userID)
  
        await axios.post(
          backendUrl + "/api/cart/update",
          {
            userId : userID, // Include the userId in the request
            itemId,
            size,
            quantity,
          },
          { headers: { token } }
        );
  
        toast.success("Cart updated!");
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to update cart");
      }
    } else {
      toast.error("User is not authenticated");
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        { userId : userID},
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,getCartCount,addToCart,cartItems,setCartItems,updateQuantity,getCartAmount,navigate,backendUrl,getProductsdata,token,setToken,getUserCart,setUSerID,userID
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};


export default ShopContextProvider;
