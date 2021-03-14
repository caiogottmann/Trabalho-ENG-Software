<template>
  <b-row>
    <b-container fluid id="container">
      <div class="bodyOccupation0955" id="body">
        <b-row id="title" class="text-left">
          <b-col>
            <h1>Posts</h1>
          </b-col>
        </b-row>
        <b-row id="button" class="align-button">
          <blueButton
            link="/criaPost"
            buttonText="Adicionar"
            dash
            size="md"
            v-b-modal.modalOccupationArea
          />
        </b-row>
        <b-row>
          <b-col>
            <b-table
            id="tabelaPosts"
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
                      @click="changePost(data.item)"
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
      </div>
    </b-container>
    <modal-feedback
      @fecha="showSucess = false;"
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

#titulo {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1vh;
}

.dusasQuestoes {
  display: flex;
  margin-bottom: 10px;
  .question {
    margin-right: 10%;
  }
}
#umaQuestao {
  font-family: Lato-Bold;
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  margin-bottom: 10px;
  label {
    text-align: start;
  }
  textarea {
    border: 0;
    border-radius: 5px;
    width: 100%;
    background-color: #f1f1f1;
    padding-left: 5px;
    resize: none;
  }
  textarea:focus {
    outline: 1px solid #555;
    -moz-outline-radius: 5px;
  }
}

#divbut {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10%;
}
#botao {
  padding: 5px 19px;
  border: 0px solid #adadad;
  border-radius: 5px;
  background-color: #28a745;
  color: #f9f9f9;
  font-family: Lato;
}
</style>

<script>
import blueButton from "@/components/button";
import PostAPI from "@/services/api/criaPost";
import ModalFeedback from "@/components/modalFeedback.vue";
export default {
  components: { blueButton, ModalFeedback },

  data() {
    return {
      showSucess: false,
      showError: false,
      fields: [
        {
          label: "#",
          key: "_id",
        },
        { label: "Titulo", key: "titulo" },
        { label: "Texto", key: "texto" },
        { label: "Data", key: "data" },
        { label: "Tags", key: "tag" },
        { label: "", key: "actions" },
      ],
      items: [],
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      PostAPI.getPosts().then((res) => {
        res.data.map((a, index) => {
          var stringTags = "";
          a.tag.map((tags) => {
            stringTags += tags + ", ";
          });
          a.tag = stringTags.replace(/,\s*$/, "");
          a.data = this.dataAtualFormatada(
            a.data.substring(0, a.data.length - 1)
          );
          a._id = index + 1;

          // Formatar a data e o array de tags
          this.items.push(a);
        });
      });
    },
    deleteItem(data) {
      PostAPI.deletePost(data.id)
        .then(() => {
          this.showSucess = true;
          this.items.splice(data._id-1,1);
        })
        .catch(() => {
          this.showError = true;
        });
    },
    changePost(dado) {
      this.$router.push({ path: `/post/edit/${dado.id}` });
    },
    dataAtualFormatada(d) {
      var data = new Date(d);
      var dia = data
        .getDate()
        .toString()
        .padStart(2, "0");
      var mes = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
      var ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
  },
};
</script>
