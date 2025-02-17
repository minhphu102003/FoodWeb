import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {

  const toastStyles = {
    success: { backgroundColor: "#ebeced", color: "#28a745", fontWeight: "300" },
    error: { backgroundColor: "#ebeced", color: "#dc3545", fontWeight: "300" },
    warn: { backgroundColor: "#ebeced", color: "#ffc107", fontWeight: "300" },
    info: { backgroundColor: "#ebeced", color: "#17a2b8", fontWeight: "300" },
  };
  const progressStyles = {
    success: { backgroundColor: "#28a745", opacity: 1 },
    error: { backgroundColor: "#dc3555", opacity: 1 },
    warn: { backgroundColor: "#ffc107", opacity: 1 },
    info: { backgroundColor: "#17a2b8", opacity: 1 },
  };
  
  const showToast = (message, type = "success") => {
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false, 
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: { top: "60px", ...toastStyles[type] },
      progressStyle: progressStyles[type], 
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
      style: { top: "60px", ...toastStyles[type] },
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
