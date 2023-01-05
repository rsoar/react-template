import { IBaseService } from "../interfaces/IBaseService";
import { IPost } from "../interfaces/IPost";
import { api, ApiService } from "./ApiService";

class PostService implements IBaseService<IPost> {
  constructor(private _api: ApiService<IPost>) {}

  async get() {
    const result: IPost[] = await this._api.read("posts");

    return result;
  }

  async create(body: IPost): Promise<any> {
    // logic

    await this._api.create("post", body);
  }
}

const postService = new PostService(api);
export { postService };
