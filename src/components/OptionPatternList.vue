<template>
  <div class="option-pattern-list">
    <div v-for="pattern in patterns" :key="pattern.id">
      <option-pattern :pattern="pattern"></option-pattern>
    </div>
  </div>
</template>

<script>
import OptionPattern from "./OptionPattern.vue";

export default {
  name: "PatternList",
  props: {
    patterns: {
      type: Array,
      require: true,
    },
  },
  components: {
    OptionPattern,
  },
};
</script>

<style>
.option-pattern-list {
  padding: 0 4px;
}
</style>