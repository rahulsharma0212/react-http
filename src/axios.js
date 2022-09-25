import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "Auth Token From Instance";

instance.interceptors.request.use((request) => {
  console.log(request);
  return request;
});

export default instance;
