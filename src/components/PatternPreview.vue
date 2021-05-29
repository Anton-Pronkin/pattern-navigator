<template>
  <div class="patternPreview">
    <pattern-field name="Name" :value="pattern.name"></pattern-field>
    <pattern-field name="RegExp" :value="pattern.regexp"></pattern-field>
    <pattern-field name="Title" :value="pattern.title"></pattern-field>
    <pattern-field name="Url" :value="pattern.url"></pattern-field>
    <button @click="edit">Edit</button>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
import PatternField from "./PatternField.vue";

export default {
  components: { PatternField },
  name: "PatternPreview",
  props: {
    pattern: {
      type: Object,
      required: true,
    },
  },
  methods: {
    edit: function () {
      this.$emit("edit", { id: this.pattern.id });
    },

    remove: function () {
      this.$emit("remove", { id: this.pattern.id });
    },
  },
};
</script>

<style>
.patternPreview {
  margin: 8px 0;
  padding: 4px 8px;

  border: 1px solid #d3d3d3;
  border-radius: 4px;
}
</style>