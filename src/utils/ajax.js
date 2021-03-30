import axios from "axios";

class Ajax {
  static async callServer(endpoint, method, data = null) {
    try {
      return await axios({
        method,
        url: `/api/v1/${endpoint}`,
        data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async getBlogPostList() {
    return await this.callServer("blog/posts", "get");
  }

  static async getPost(id) {
    return await this.callServer(`blog/posts/${id}`, "get");
  }

  static async createBlogPost(data) {
    return await this.callServer("blog/posts", "post", data);
  }

  static async queryWithString(string) {
    return await this.callServer(`blog/posts/query/${string}`, "get");
  }
}

export default Ajax;
