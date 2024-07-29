import { toast } from "react-toastify";

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};

export const handleSucces = (msg) => {
  toast.success(msg, {
    position: "top-right",
  });
};