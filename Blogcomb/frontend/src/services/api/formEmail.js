import Api from "@/services/api/Api.js";

const formEmail = (dados) => {
  return Api().post("/Email", dados);
};

const editEmail = (dados) => {
  return Api().post("/Email/edit", dados);
};

const deleteEmail = (id) => {
  return Api().delete(`/Email/${id}`);
};

const getEmails = () => {
  return Api().get("/Email");
};

export default {
  formEmail,
  getEmails,
  editEmail,
  deleteEmail,
};
