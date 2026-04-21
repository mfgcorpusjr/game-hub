import axios from "axios"

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7209ef430f0e4742a66041f1d1bb3184",
  },
})

export default api
