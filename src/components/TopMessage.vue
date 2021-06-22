<template>
  <div class="top-message" :class="{ 'top-message--error': isError, 'top-message--success': isSuccess }">
    <span class="top-message__text">{{ message.text }}</span>
    <div class="top-message__close" @click="close"></div>
  </div>
</template>

<script>
import TopMessageType from "./enums/TopMessageType";

export default {
  name: "TopMessage",
  props: {
    message: {
      type: Object,
      require: true,
    },
  },
  methods: {
    close() {
      this.$emit("close", this.index);
    },
  },
  computed: {
    isError() {
      return this.message.type == TopMessageType.error;
    },
    isSuccess() {
      return this.message.type == TopMessageType.success;
    },
  },
};
</script>

<style lang="scss">
@import "./styles/buttons/icon-button";

$error-selector: null;
$success-selector: null;

.top-message {
  display: flex;
  padding: 8px;
  border-radius: 8px;

  &--error {
    $error-selector: & !global;
    background-color: #ffa6a654;
  }

  &--success {
    $success-selector: & !global;
    background-color: #89e0a354;
  }

  &__text {
    flex-grow: 1;
    padding: 4px 8px;
    word-break: break-word;
  }

  &__close {
    flex-shrink: 0;
    @include icon-button(url(../images/cross.png));

    #{$error-selector} &:hover {
      background-color: #eea0a0;
    }

    #{$success-selector} &:hover {
      background-color: #96d3aa;
    }
  }
}
</style>