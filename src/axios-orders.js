import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-orders-c2b1b-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
