<template>
  <div class="pattern-preview-remove">
    <span class="pattern-preview-remove__message">Do you want to remove the "{{ name }}" pattern?</span>
    <div class="pattern-preview-remove__buttons">
      <div class="pattern-preview-remove__button" @click="remove">Remove</div>
      <div class="pattern-preview-remove__button" @click="cancel">Cancel</div>
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

  &__button {
    padding: 4px 16px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    cursor: pointer;
    transition: 0.1s;
    user-select: none;

    &:hover {
      background-color: #ececec;
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>