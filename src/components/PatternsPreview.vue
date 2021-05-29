<template>
  <div class="patternsPreview">
    <pattern-preview-list :patterns="patterns" @edit-pattern="editPattern" @remove-pattern="removePattern"></pattern-preview-list>
    <button class="patternsPreview__createPattern" @click="createPattern">Create a new pattern</button>
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
    createPattern: function () {
      this.$emit("create-pattern");
    },

    editPattern: function (params) {
      this.$emit("edit-pattern", params);
    },

    removePattern: function (params) {
      this.$emit("remove-pattern", params);
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