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

<style>
body {
  margin: 0 0 0 12px;
  padding: 0 8px;
  width: 612px;
  font: 14px "Titillium Web";
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-button {
  background: transparent;
}

::-webkit-scrollbar-track-piece {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #ebebeb;
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background: #dfdfdf;
}
</style>