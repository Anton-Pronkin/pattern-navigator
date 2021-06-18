<template>
  <div class="patterns-preview">
    <pattern-preview-list :patterns="patterns" @edit-pattern="editPattern" @remove-pattern="removePattern"></pattern-preview-list>
    <button class="patterns-preview__create-pattern" @click="createPattern">Create a new pattern</button>
    <button class="patterns-preview__create-pattern" @click="exportConfig">Export configuration</button>
    <button class="patterns-preview__create-pattern" @click="importConfig">Import configuration</button>
  </div>
</template>

<script>
import PatternPreviewList from "./PatternPreviewList.vue";

export default {
  name: "PatternsPreview",
  props: {
    patterns: {
      type: Array,
      require: true,
    },
  },
  methods: {
    createPattern() {
      this.$emit("create-pattern");
    },

    editPattern(params) {
      this.$emit("edit-pattern", params);
    },

    removePattern(params) {
      this.$emit("remove-pattern", params);
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
  },
};
</script>

<style>
.patterns-preview {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}

.patterns-preview__create-pattern {
  align-self: flex-end;
  padding: 4px 12px;
}
</style>