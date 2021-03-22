<template>
  <div>
    <div id="tudo"></div>
    <navbar />
    <div id="bloco">
      <h3>Entrar</h3>
      <b-form @submit="signIn">
        <b-form-input
          type="email"
          v-model="credentials.email"
          placeholder="E-mail"
          required
        ></b-form-input>
        <b-form-input
          type="password"
          v-model="credentials.password"
          placeholder="Senha"
          required
        ></b-form-input>
        <b-button type="submit" id="submit">Entrar</b-button>
      </b-form>
    </div>
    <modal-feedback
      @fecha="showError = false"
      :certo="false"
      mensagem="Erro no Loginn"
      :ativado="showError"
    />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import { AuthLogin } from "@/services/api/Auth.js";
import { SetCookie } from "../utils/CookieUtil.js";
import ModalFeedback from "@/components/modalFeedback.vue";

export default {
  components: { navbar, ModalFeedback },
  data() {
    return { credentials: { email: "", password: "" }, showError: false };
  },
  methods: {
    signIn(evt) {
      evt.preventDefault();
      AuthLogin(this.credentials)
        .then((res) => {
          SetCookie("token", res.data.token, {
            expires: Number.parseInt(res.data.tokenExpiration),
          });
          this.$router.push("/admin");
        })
        .catch(() => {
          this.showError = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#tudo {
  background-color: #f0f0f0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
#bloco {
  padding-top: 20px;
  font-family: Lato-Bold;
  width: 30vw;
  margin-left: 35vw;
  margin-top: 15vh;
  padding-bottom: 10vh;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3{
  	margin-top: 5vh;
  	margin-bottom: 5vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;

    input {
      border: 2px solid #1b3458;
      border-radius: 5px;
      padding: 12px;
      margin-bottom: 9%;
      width: 100%;
    }
    #submit {
      padding: 5px;
      width: 100px;
      background-color: #1b3458;
      color: #f0f0f0;
    }
  }
}

@media (max-width: 750px) {
  #bloco {
    margin-left: 10vw;
    width: 80vw;
    height: 60vh;
  }
}
</style>
