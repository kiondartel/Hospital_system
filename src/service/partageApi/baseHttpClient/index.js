import axios from "axios";

class BaseHttpClient {
  constructor(headers) {
    const baseURL = process.env.REACT_APP_API_BASE_URL || "";

    this.instance = axios.create({
      baseURL,
      headers,
    });
  }

  get(url, params, config) {
    return this.instance.get(url, {
      params,
      ...config,
    });
  }

  post(url, data) {
    return this.instance.post(url, data);
  }

  put(url, data) {
    return this.instance.put(url, data);
  }
}

const partageApi = new BaseHttpClient();
export default partageApi;
