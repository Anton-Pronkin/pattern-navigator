<template>
  <div class="patternPreview" @mouseover="hoverPreview = true" @mouseout="hoverPreview = false">
    <pattern-preview-header :title="pattern.name" :hover="hoverPreview" @edit="edit" @remove="remove"></pattern-preview-header>
    <pattern-preview-settings :pattern="pattern" :index="index"></pattern-preview-settings>
  </div>
</template>

<script>
import PatternPreviewHeader from "./PatternPreviewHeader.vue";
import PatternPreviewSettings from "./PatternPreviewSettings.vue";

export default {
  components: {
    PatternPreviewHeader,
    PatternPreviewSettings,
  },
  name: "PatternPreview",
  props: {
    pattern: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      hoverPreview: false,
    };
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
  position: relative;
  margin: 8px 8px 24px;
  padding: 32px 16px 8px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;
}
</style>