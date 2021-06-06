<template>
  <div class="patternPreviewRemove">
    <span class="patternPreviewRemove__message">Do you want to remove the "{{ name }}" pattern?</span>
    <div class="patternPreviewRemove__buttons">
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
    }
  }
};
</script>

<style>
.patternPreviewRemove {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.patternPreviewRemove__message {
  text-align: center;
  font-size: 16px;
}

</style>