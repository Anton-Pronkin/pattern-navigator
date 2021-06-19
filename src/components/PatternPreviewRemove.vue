<template>
  <div class="pattern-preview-remove">
    <span class="pattern-preview-remove__message">Do you want to remove the "{{ name }}" pattern?</span>
    <div class="pattern-preview-remove__buttons">
      <text-button @click="remove">Remove</text-button>
      <text-button @click="cancel">Cancel</text-button>
    </div>
  </div>
</template>

<script>
import TextButton from "./TextButton.vue";

export default {
  name: "patternPreviewRemove",
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  methods: {
    remove() {
      this.$emit("remove");
    },

    cancel() {
      this.$emit("cancel");
    },
  },
  components: {
    TextButton,
  },
};
</script>

<style lang="scss">
.pattern-preview-remove {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px;

  &__message {
    text-align: center;
    font-size: 16px;
  }

  &__buttons {
    display: flex;
    gap: 8px;
  }
}
</style>