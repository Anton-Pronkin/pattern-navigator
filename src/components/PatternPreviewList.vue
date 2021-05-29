<template>
  <div class="pattern-list">
    <div v-for="pattern in patterns" :key="pattern.id">
      <pattern-preview :pattern="pattern" @edit="editPattern" @remove="removePattern"></pattern-preview>
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
    editPattern: function (params) {
      this.$emit("edit-pattern", params);
    },

    removePattern: function (params) {
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