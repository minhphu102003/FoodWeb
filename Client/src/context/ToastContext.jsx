import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

import PropTypes from "prop-types";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const toastLoadingId = (message) => {
    return toast.loading(message, {
      position: "top-right",
      style: { top: "60px"  },
      closeOnClick: false,
      draggable: false,
    });
  };

  const toastUpdateLoadingId = (message, type, idLoading) => {
    toast.update(idLoading, {
      render: message,
      type: type === "success" ? "success" : "error",
      isLoading: false,
      autoClose: 3000,
      closeButton: true,
      draggable: true,
      theme: "colored",
      style: { top: "60px"},
    });
  };

  return (
    <ToastContext.Provider value={{ showToast, toastLoadingId, toastUpdateLoadingId }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastProvider;
