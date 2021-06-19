<template>
  <div class="text-button" @click="click"><slot></slot></div>
</template>

<script>
export default {
  name: "TextButton",
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss">
@import "./styles/buttons/text-button";

.text-button {
  @include text-button;
}
</style>