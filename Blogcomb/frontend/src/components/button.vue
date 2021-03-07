<template>
  <a :href="link">
    <button
      @click="click()"
      :style="customStyle"
      :class="[{ dashButton: dash }, 'button', size, { dashInvert: invert }]"
    >
      {{ buttonText }}
    </button>
  </a>
</template>

<script>
/*
    PROPS:
        -> buttonText: String, não obrigatorio. Recebe o texto que ficará no botao, por padrão "CONTATE-NOS"
        -> customStyle: Object, não obrigatorio. Recebe um objeto com atributos css caso necessário
        -> dash: Boolean. Indica quando usar o css da dash
        -> size: String. Indica tamanho entre lg(EDITAR), md(ADICIONAR EQUIPE), sm(SALVAR modal) e smCancel(CANCELAR modal)
*/

export default {
  name: "contactButton",
  props: {
    customStyle: {
      type: Object,
    },
    buttonText: {
      type: String,
      default: "CONTATE-NOS",
    },
    dash: {
      type: Boolean,
    },
    invert: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    link:{
      type: String,
      required: true, 
    }
  },
  methods: {
    click() {
      this.$emit("click");
      if (this.buttonText == "CONTATE-NOS") {
        var element = document.getElementById("linkContato");
        var top = element.offsetTop;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@function min-max($min, $range) {
  @return calc(#{$min} + (#{$range}) * ((100vw - 750px) / (1920 - 750)));
}

@function min-maxMob($min, $range) {
  @return calc(#{$min} + (#{$range}) * ((100vw - 320px) / (750 - 320)));
}

.button {
  padding: 16px 31px;

  font-family: Lato-bold;
  font-style: normal;
  font-weight: bold;
  font-size: min-max(12px, 10);
  line-height: min-max(16px, 12);

  color: #fafbff;
  background-color: #d7ab56;

  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

  border-width: 0;
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  outline: none;
}

.dashButton {
  color: #ffffff;
  background-color: #1B3458;
  box-shadow: unset;
  letter-spacing: 1px;
}

.dashInvert {
  color: #304e8c;
  background-color: transparent;
  border: 1px solid #1B3458;
  box-sizing: border-box;
  border-radius: 3px;
}

.lg {
  padding: min-max(10, 13) min-max(20px, 27);
}

.md {
  padding: min-max(6px, 5) min-max(18px, 12);
}

.sm {
  min-width: 128px;
  padding: 8px 20px;

  font-size: 16px;
  line-height: 21px;
  font-weight: normal;
  letter-spacing: 0px;
}

.smCancel {
  padding: 8px 12px;

  font-size: 16px;
  line-height: 21px;
  font-weight: normal;

  color: #373a3c;
  background-color: transparent;
  border: 1px solid #cccccc;
  letter-spacing: 0px;
}

@media only screen and (max-width: 480px) {
  .button {
    padding: 12px 25px;

    font-size: min-maxMob(12px, 7);
    line-height: min-maxMob(14px, 10);

    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
    border-radius: 2px;

    border-width: 0;
    transition: background-color 0.5s ease, box-shadow 0.5s ease;
    outline: none;
  }

  .dashButton {
    font-size: min-maxMob(12px, 3);
    line-height: min-maxMob(14px, 4);
    box-shadow: unset;
  }

  .lg {
    min-width: 160px;
    padding: min-maxMob(10px, 4) min-maxMob(10px, 15);
  }

  .md {
    min-width: 160px;
    padding: min-maxMob(10px, 2) min-maxMob(12px, 7);
  }

  .sm {
    min-width: 74px;
    padding: 4px 12px;

    font-size: 9px;
    line-height: 12px;
  }

  .smCancel {
    padding: 4px 7px;

    font-size: 9px;
    line-height: 12px;

    color: #373a3c;
    background-color: transparent;
    border: 1px solid #cccccc;
    border-radius: 3px;
  }

  .dashInvert {
    border: 1px solid #1e438b;
    box-sizing: border-box;
    border-radius: 3px;
  }
}

.button:hover {
  -webkit-box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
  -moz-box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
  box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
}

.button:focus {
  -webkit-box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
  -moz-box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
  box-shadow: 0px 0px 25px -3px rgba(215, 171, 86, 1);
}

.dashButton:hover {
  background-color: #063ead;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}

.dashButton:focus {
  background-color: #033db1;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}

.dashInvert:hover {
  background-color: transparent;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}

.dashInvert:focus {
  background-color: transparent;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}

.smCancel:hover {
  background-color: #e9eef5;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}

.smCancel:focus {
  background-color: #e9eef5;
  -webkit-box-shadow: unset;
  -moz-box-shadow: unset;
  box-shadow: unset;
}
</style>
