import Api from "./Api";

const AuthLogin = (crendentials) => {
  return Api().post("/Auth/login", crendentials);
};

export { AuthLogin };
