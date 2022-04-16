import axios from "axios";

const baseURL = "http://localhost:8080";
class FunctionService {
  async love(postId) {
    const url = `${baseURL}/love`;
    const body = {
      postId,
    };
    await axios.post(url, body);
  }

  async addSeries(name) {
    const url = `${baseURL}/addSeries`;
    const body = {
      name,
    };
    await axios.post(url, body);
  }
  async deleteSeries(id) {
    const url = `${baseURL}/deleteSeries`;
    const body = {
      id,
    };
    await axios.post(url, body);
  }
}

export default FunctionService;
