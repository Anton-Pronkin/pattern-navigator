<template>
  <div class="pattern-preview-remove">
    <span class="pattern-preview-remove__message">Do you want to remove the "{{ name }}" pattern?</span>
    <div class="pattern-preview-remove__buttons">
      <button @click="remove">Remove</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style>
.pattern-preview-remove {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pattern-preview-remove__message {
  text-align: center;
  font-size: 16px;
}
</style>