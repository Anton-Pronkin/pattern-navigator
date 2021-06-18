<template>
  <div class="patterns-preview">
    <pattern-preview-list :patterns="patterns" @edit-pattern="editPattern" @remove-pattern="removePattern"></pattern-preview-list>
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

<style>
.patterns-preview {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
}

.patterns-preview__create-pattern {
  align-self: flex-end;
  padding: 4px 12px;
}
</style>