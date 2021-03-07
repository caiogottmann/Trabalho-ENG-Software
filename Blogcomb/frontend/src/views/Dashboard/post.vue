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
              <template class="a" #cell(actions)="">
                <b-row align-h="end">
                  <span>
                    <b-icon icon="pencil-square" class="icon" scale="1.5">
                    </b-icon>
                  </span>
                  <span>
                    <b-icon icon="trash" class="icon" scale="1.5"> </b-icon>
                  </span>
                </b-row>
              </template>
            </b-table>
          </b-col>
        </b-row>
        <!-- <b-modal
          content-class="modalOcuppation103032"
          id="modalOccupationArea"
          centered
          @ok="handleOk"
          @hide="handleHide"
        >
          <template #modal-title="">
            <h5>Editar sessão</h5>
          </template>

          <template #default="">
            <p>Nome:</p>

            <b-row no-gutters :align-h="invalidTitle ? 'between' : 'end'">
              <b-form-input
                :state="stateInput($v.toBeTransform.titulo)"
                required
                @blur="changeInvalidTitle()"
                @input.native="invalidTitle = false"
                v-model="$v.toBeTransform.titulo.$model"
                placeholder="Nome da area de atuação"
              ></b-form-input>
              <b-row
                v-if="invalidTitle"
                align-v="center"
                class="invalidMessage"
              >
                <b-img
                  class="icon"
                  :src="
                    require('../../assets/dashboard/cadastro/icones/alert.svg')
                  "
                ></b-img>
                <p>{{ messageTitle }}</p>
              </b-row>
              <div
                :class="[
                  'input-group-addon',
                  { invalidCont: missingCharTitle < 0 },
                ]"
                v-text="missingCharTitle + '/50'"
              ></div>
            </b-row>

            <p>Texto:</p>

            <b-row no-gutters :align-h="invalidText ? 'between' : 'end'">
              <b-form-textarea
                :state="stateInput($v.toBeTransform.descricao)"
                required
                id="textarea"
                @blur="changeInvalidText()"
                @input.native="invalidText = false"
                v-model="$v.toBeTransform.descricao.$model"
                placeholder="Descrição da area de atuação"
                rows="3"
              ></b-form-textarea>

              <b-row v-if="invalidText" align-v="center" class="invalidMessage">
                <b-img
                  class="icon"
                  :src="
                    require('../../assets/dashboard/cadastro/icones/alert.svg')
                  "
                ></b-img>
                <p>{{ messageText }}</p>
              </b-row>
              <div
                :class="[
                  'input-group-addon',
                  { invalidCont: missingCharText < 0 },
                ]"
                v-text="missingCharText + '/580'"
              ></div>
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
        </b-modal> -->
      </div>
    </b-container>
  </b-row>
</template>

<style lang="scss" scoped>
@function min-max($min, $range) {
  @return calc(#{$min} + (#{$range}) * ((100vw - 750px) / (1920 - 750)));
}

.icon {
  margin-right: 10px;
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
import PostAPI from "@/services/api/criaPost";

export default {
  components: { blueButton },

  data() {
    return {
      fields: [
        {
          label: "#",
          key: "id",
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
        res.data.map((a) => {
          var stringTags = "";
          a.tag.map((tags) => {
            stringTags += tags + ", ";
          });
          a.tag = stringTags;
          a.data = this.dataAtualFormatada(a.data);

          // Formatar a data e o array de tags
          this.items.push(a);
        });
      });
    },
    dataAtualFormatada(d) {
      var data = new Date(d);
      var dia = data
        .getDate()
        .toString()
        .padStart(2, "0");
      dia++;
      var mes = (data.getMonth() + 1).toString().padStart(2, "0"); //+1 pois no getMonth Janeiro começa com zero.
      var ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    },
  },
};
</script>

<style scoped></style>
