import Api from "@/services/api/Api.js";

const criaPost = (dados) => {
  return Api().post("/Post", dados);
};
const getPosts = () => {
  return Api().get("/Post");
};

const getPost = (id) => {
  return Api().get(`/Post/${id}`);
};

const editPost = (dados) => {
  return Api().post("/Post/edit", dados);
};

const deletePost = (id) => {
  return Api().delete(`/Post/${id}`);
};

export default {
  criaPost,
  getPosts,
  getPost,
  editPost,
  deletePost,
};
