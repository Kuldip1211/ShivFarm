import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { PuffLoader } from "react-spinners"; // Import the loader

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const { navigate, backendUrl, token, setToken,setUserID } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Loader state

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setUserID(response.data.id);
          toast.success("Welcome to Forever!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Welcome to Forever!");
          navigate("/");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 rounded"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 rounded"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here!
          </p>
        )}
      </div>

      {loading ? ( // Show loader if loading is true
        <div className="flex justify-center mt-4">
          <PuffLoader color="#000000" size={50} />
        </div>
      ) : (
        <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      )}
    </form>
  );
};

export default Login;