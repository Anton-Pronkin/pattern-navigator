<template>
  <div class="pattern-preview-list">
    <pattern-preview
      v-for="(pattern, index) in patterns"
      :key="pattern.id"
      :pattern="pattern"
      :index="index"
      @edit="editPattern"
      @remove="removePattern"
    ></pattern-preview>
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
.pattern-preview-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>