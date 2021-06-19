<template>
  <options :storage="storage" :configurationManager="configurationManager"></options>
</template>

<script>
import "@fontsource/titillium-web";
import Options from "./Options.vue";

export default {
  name: "OptionsPage",
  props: {
    storage: {
      type: Object,
      required: true,
    },
    configurationManager: {
      type: Object,
      required: true,
    },
  },
  components: {
    Options,
  },
};
</script>

<style lang="scss">
body {
  margin: 0 0 0 12px;
  padding: 0 8px;
  width: 612px;
  font: 14px "Titillium Web";
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 12px;

  &-button {
    background: transparent;
  }

  &-track-piece {
    background: transparent;
  }

  &-thumb {
    border-radius: 6px;
    background: #ebebeb;
    cursor: pointer;

    &:hover {
      background: #dfdfdf;
    }
  }
}
</style>