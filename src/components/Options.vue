<template>
  <div class="options">
    <option-pattern-list :patterns="patterns"></option-pattern-list>
  </div>
</template>

<script>
import OptionPatternList from "./OptionPatternList.vue";

export default {
  name: "Options",
  props: {
    storage: {
      type: Object,
      required: true,
    },
  },
  components: {
    OptionPatternList,
  },
  mounted() {
    console.log(this.patterns);
  },
};
</script>

<style>
body {
  margin: 0;
}

.options {
  padding: 4px;
}
</style>