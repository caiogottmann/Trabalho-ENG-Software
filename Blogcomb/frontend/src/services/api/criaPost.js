import Api from "@/services/api/Api.js";

const criaPost = (dados) => {
  return Api().post("/Post", dados);
};
const getPosts = () => {
  return Api().get("/Post");
};

export default {
  criaPost,
  getPosts,
};
