<template>
  <div class="option-pattern">
    <option-pattern-field name="Name" :value="pattern.name"></option-pattern-field>
    <option-pattern-field name="RegExp" :value="pattern.regexp"></option-pattern-field>
    <option-pattern-field name="Title" :value="pattern.title"></option-pattern-field>
    <option-pattern-field name="Url" :value="pattern.url"></option-pattern-field>
  </div>
</template>

<script>
import OptionPatternField from "./OptionPatternField.vue";
export default {
  components: { OptionPatternField },
  name: "OptionPattern",
  props: {
    pattern: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.option-pattern {
  margin: 8px 4px;
  padding: 4px 8px;

  border: 1px solid #d3d3d3;
  border-radius: 4px;
}
</style>