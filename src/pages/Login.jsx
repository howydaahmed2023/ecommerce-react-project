import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../Redux/userDummyApi";
import { ToastContainer, toast } from 'react-toastify';



const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [loginUser] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    loginUser(user);
      toast.success("log in", {
                        position: "top-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    
                        });
  };
  return (
    <div className="container-fluid ">
    
      <div className="row text-center">
        <motion.div
          className="col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mt-5">Login</h1>
        </motion.div>
      </div>

      <motion.div
        className="row justify-content-center mt-5 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="col-4 bg-dark rounded p-2 mb-5">
        <ToastContainer/>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
              <label for="userName" class="form-label">
                User Name
              </label>
              <input
                type="text"
                class="form-control"
                id="userName"
                required
                placeholder="user name"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 mt-3">
              <label for="pwd" class="form-label">
                Password:
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                required
                placeholder="*********"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 mt-3">
              <button className="btn btn-outline-info w-100" type="submit">
                Log in
              </button>
            </div>
          </form>
          <div className="mt-3 mb-3 text-center">
            <p>
              {" "}
              Not A member ? {""}{" "}
              <Link to={"/signup"} className="text-light">
                {" "}
                signup Now
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
