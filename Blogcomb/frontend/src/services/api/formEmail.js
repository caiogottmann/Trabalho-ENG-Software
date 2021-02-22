import Api from "@/services/api/Api.js";

const formEmail = dados => {
  return Api().post("/Email", dados);
};

export default {
  formEmail
};
