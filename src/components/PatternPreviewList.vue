<template>
  <div class="pattern-list">
    <div v-for="(pattern, index) in patterns" :key="pattern.id">
      <pattern-preview :pattern="pattern" :index="index" @edit="editPattern" @remove="removePattern"></pattern-preview>
    </div>
  </div>
</template>

<script>
import PatternPreview from "./PatternPreview.vue";

export default {
  name: "PatternPreviewList",
  props: {
    patterns: {
      type: Array,
      require: true,
    },
  },
  methods: {
    editPattern(params) {
      this.$emit("edit-pattern", params);
    },

    removePattern(params) {
      this.$emit("remove-pattern", params);
    },
  },
  components: {
    PatternPreview,
  },
};
</script>

<style>
</style>