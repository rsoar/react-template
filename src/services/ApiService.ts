import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/"; // IMPROVE: add to protected environments

class ApiService<T> {
  private _instance;

  constructor() {
    this._instance = axios.create({
      baseURL: baseUrl,
      headers: { "Content-Type": "application/json" }, // IMPROVE: make dynamic
    });
  }

  async read(endpoint: string) {
    const { data } = await this._instance.get(endpoint);

    return data;
  }

  async create(endpoint: string, body: T) {
    const { data } = await this._instance.post(endpoint, body);

    return data;
  }

  async put(endpoint: string, body: T) {
    const { data } = await this._instance.put(endpoint, body);

    return data;
  }

  async patch(endpoint: string, body: T) {
    const { data } = await this._instance.patch(endpoint, body);

    return data;
  }

  async delete(endpoint: string, id: number) {
    const { data } = await this._instance.delete(endpoint + "/" + id);

    return data;
  }
}

const api = new ApiService();
export { api, ApiService };
