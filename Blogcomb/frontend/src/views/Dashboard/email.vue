<template>
  <b-row>
    <b-container fluid id="container">
      <div class="bodyOccupation0955" id="body">
        <b-row id="title" class="text-left">
          <b-col>
            <h1>Emails Automaticos</h1>
          </b-col>
        </b-row>
        <b-row id="button" class="align-button">
          <blueButton
            buttonText="Adicionar"
            dash
            size="md"
            @click="$router.push('cadastrarEmail')"
          />
        </b-row>
        <b-row>
          <b-col>
            <b-table
              striped
              responsive="lg"
              borderless
              hover
              :items="items"
              :fields="fields"
              thead-class="tableHeader"
              tbody-class="tableBody"
              tbody-tr-class="tableBodyTr"
              show-empty
              empty-text="Nenhum Post"
            >
              <template class="a" #cell(actions)="data">
                <b-row align-h="end">
                  <span>
                    <b-icon
                      @click="changeActualId(data.item)"
                      v-b-modal.modalOccupationArea
                      icon="pencil-square"
                      class="icon"
                      scale="1.5"
                    >
                    </b-icon>
                  </span>
                  <span>
                    <b-icon
                      @click="deleteItem(data.item)"
                      icon="trash"
                      class="icon"
                      scale="1.5"
                    >
                    </b-icon>
                  </span>
                </b-row>
              </template>
            </b-table>
          </b-col>
        </b-row>
        <b-modal
          content-class="modalOcuppation103032"
          id="modalOccupationArea"
          centered
          @ok="handleOk"
          @hide="handleHide"
        >
          <template #modal-title="">
            <h5>Editar email</h5>
          </template>

          <template #default="">
            <p>Nome:</p>

            <b-row no-gutters>
              <b-form-input v-model="change.nome" required></b-form-input>
            </b-row>
            <p>Email:</p>

            <b-row no-gutters>
              <b-form-input v-model="change.email" required></b-form-input>
            </b-row>
          </template>

          <template #modal-footer="{ ok, cancel }">
            <blueButton
              buttonText="Cancelar"
              dash
              size="smCancel"
              @click="cancel"
            />
            <blueButton buttonText="Salvar" dash size="sm" @click="ok()" />
          </template>
        </b-modal>
      </div>
    </b-container>
    <modal-feedback
      @fecha="showSucess = false"
      :certo="true"
      mensagem="Operacao efetuada com sucesso!"
      :ativado="showSucess"
    />
    <modal-feedback
      @fecha="showError = false"
      :certo="false"
      mensagem="Erro"
      :ativado="showError"
    />
  </b-row>
</template>

<style lang="scss" scoped>
@function min-max($min, $range) {
  @return calc(#{$min} + (#{$range}) * ((100vw - 750px) / (1920 - 750)));
}

.icon {
  margin-right: 10px;
  cursor: pointer;
}
#container {
  padding: min-max(20px, 36) min-max(24px, 64) 0;
  padding-right: min-max(38px, 64);
  margin: 0 auto;
  max-width: 1325px;
}

.bodyOccupation0955 {
  max-width: 1325px;

  .text-left {
    color: #15213c;
  }

  .row {
    .col {
      padding: unset;
      h1 {
        font-weight: bold;
        font-size: min-max(20px, 28);
        line-height: min-max(25px, 25);
        letter-spacing: 0.03em;
        margin-bottom: min-max(20px, 26);
      }
    }
    .button {
      margin-bottom: 9px;
    }
  }

  .align-pagination {
    justify-content: flex-end;
  }

  .align-button {
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 1015px) {
  .bodyOccupation0955 {
    padding: 20px 24px 0;

    .row {
      .col {
        h1 {
          font-size: 1.4rem;
          line-height: 1.8rem;
          margin-bottom: 38px;
        }
      }
    }
    .align-pagination {
      justify-content: center;
    }

    .align-button {
      justify-content: flex-start;
    }
  }
}
</style>

<script>
import blueButton from "@/components/button";
import emailAPI from "@/services/api/formEmail.js";
import ModalFeedback from "@/components/modalFeedback.vue";

export default {
  components: { blueButton, ModalFeedback },

  data() {
    return {
      showError: false,
      showSucess: false,
      change: {
        nome: "",
        email: "",
      },
      fields: [
        {
          label: "#",
          key: "id",
        },
        { label: "Nome", key: "nome" },
        { label: "Email", key: "email" },
        { label: "", key: "actions" },
      ],
      items: [],
    };
  },
  created() {
    this.updateAll();
  },
  methods: {
    updateAll() {
      emailAPI.getEmails().then((res) => {
        this.items = res.data;
      });
    },

    changeActualId(data) {
      this.change.nome = data.nome;
      this.change.email = data.email;
    },
    handleOk() {
      emailAPI
        .editEmail(this.change)
        .then(() => {
          this.showSucess = true;
          this.updateAll();
        })
        .catch(() => {
          this.showError = true;
        });
    },
    deleteItem(data) {
      emailAPI
        .deleteEmail(data.id)
        .then(() => {
          this.showSucess = true;
          this.updateAll();
        })
        .catch(() => {
          this.showError = true;
        });
    },
  },
};
</script>

<style scoped></style>
