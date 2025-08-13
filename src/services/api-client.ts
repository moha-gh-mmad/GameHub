import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "136284e0f7254aee8f1cbbf33207f09b" },
});
