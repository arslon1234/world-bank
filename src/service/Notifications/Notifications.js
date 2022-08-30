import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
const ErrorNotification = (text) => {
     return setTimeout(() => {
       createToast(text.text, {
              type: "danger",
              position: "top-right",
              showIcon: true,
              timeout: 3000,
            });
     }, );  
}
export default ErrorNotification

   