<template>
  <div class="patterns-preview">
    <div v-if="!patterns.length" class="patterns-preview__empty-message">You currently have no patterns. Please create a new one or import the existing configuration.</div>

    <pattern-preview-list
      v-if="patterns.length"
      :patterns="patterns"
      @edit-pattern="editPattern"
      @remove-pattern="removePattern"
    ></pattern-preview-list>

    <patterns-actions @create-pattern="createPattern" @export-config="exportConfig" @import-config="importConfig"></patterns-actions>
  </div>
</template>

<script>
import PatternPreviewList from "./PatternPreviewList.vue";
import PatternsActions from "./PatternsActions.vue";

export default {
  name: "PatternsPreview",
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

    createPattern() {
      this.$emit("create-pattern");
    },

    exportConfig() {
      this.$emit("export-config");
    },

    importConfig() {
      this.$emit("import-config");
    },
  },
  components: {
    PatternPreviewList,
    PatternsActions,
  },
};
</script>

<style lang="scss">
.patterns-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 0;

  &__empty-message {
    text-align: center;
    font-size: 15px;
  }
  
  &__create-pattern {
    align-self: flex-end;
    padding: 4px 12px;
  }
}
</style>