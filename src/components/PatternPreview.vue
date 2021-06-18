<template>
  <div class="pattern-preview" @mouseover="hoverPreview = true" @mouseout="hoverPreview = false">
    <pattern-preview-header
      :title="pattern.name"
      :hover="hoverPreview"
      :showButtons="!isRemoving"
      @edit="edit"
      @remove="removingStarted"
    ></pattern-preview-header>

    <pattern-preview-settings v-if="!isRemoving" :pattern="pattern" :index="index"></pattern-preview-settings>
    <pattern-preview-remove v-else :name="pattern.name" @remove="removingConfirmed" @cancel="removingEnded"></pattern-preview-remove>
  </div>
</template>

<script>
import PatternPreviewHeader from "./PatternPreviewHeader.vue";
import PatternPreviewRemove from "./PatternPreviewRemove.vue";
import PatternPreviewSettings from "./PatternPreviewSettings.vue";

export default {
  components: {
    PatternPreviewHeader,
    PatternPreviewSettings,
    PatternPreviewRemove,
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
      isRemoving: false,
    };
  },
  methods: {
    edit() {
      this.$emit("edit", { id: this.pattern.id });
    },

    removingStarted() {
      this.isRemoving = true;
    },

    removingEnded() {
      this.isRemoving = false;
    },

    removingConfirmed() {
      this.$emit("remove", { id: this.pattern.id });
    },
  },
};
</script>

<style>
.pattern-preview {
  position: relative;
  padding: 32px 16px 8px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;
}
</style>