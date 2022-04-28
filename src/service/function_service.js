import axios from "axios";

const baseURL = "http://localhost:8080";
// const baseURL = "http://3.39.104.213:8080";
const opt = { withCredentials: true, headers: { "Content-Type": `application/json` } };
class FunctionService {
  async love(postId) {
    const url = `${baseURL}/love`;
    const body = {
      postId,
    };
    await axios.post(url, body, opt);
  }

  async addSeries(name) {
    const url = `${baseURL}/addSeries`;
    const body = {
      name,
    };
    await axios.post(url, body, opt);
  }

  async getSeriesList() {
    const url = `${baseURL}/getSeriesList`;
    const data = await axios.get(url, opt);
    return data.data;
  }

  async deleteSeries(id) {
    const url = `${baseURL}/deleteSeries?id=${id}`;  // ?id=${id}
    const body = {
      id,
    };
    await axios.post(url, body, opt);
  }
}

export default FunctionService;
