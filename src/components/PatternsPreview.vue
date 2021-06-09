<template>
  <div class="patternsPreview">
    <pattern-preview-list :patterns="patterns" @edit-pattern="editPattern" @remove-pattern="removePattern"></pattern-preview-list>
    <button class="patternsPreview__createPattern" @click="createPattern">Create a new pattern</button>
    <button class="patternsPreview__createPattern" @click="exportConfig">Export configuration</button>
    <button class="patternsPreview__createPattern" @click="importConfig">Import configuration</button>
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
.patternsPreview {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.patternsPreview__createPattern {
  align-self: flex-end;
  padding: 4px 12px;
}
</style>