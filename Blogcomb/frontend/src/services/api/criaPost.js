import Api from "@/services/api/Api.js";

const criaPost = (dados) => {
  return Api().post("/Post", dados);
};

export default {
  criaPost
};
