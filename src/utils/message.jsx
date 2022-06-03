import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast = (message, status) => {
    switch (status) {
        case "success":
            return toast.success(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "error":
            return toast.error(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
        case "warning":
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });

        default:
            return toast.warning(message, {
                theme: "dark",
                position: toast.POSITION.TOP_RIGHT,
                icon: true,
            });
    }
};
