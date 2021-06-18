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

<style>
.pattern-preview-remove {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 4px;
}

.pattern-preview-remove__message {
  text-align: center;
  font-size: 16px;
}

.pattern-preview-remove__buttons {
  display: flex;
  gap: 8px;
}

.pattern-preview-remove__button {
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  transition: 0.1s;
  user-select: none;
}

.pattern-preview-remove__button:hover {
  background-color: #ececec;
}

.pattern-preview-remove__button:active {
  transform: scale(0.95);
}
</style>