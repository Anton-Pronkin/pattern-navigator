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
.top-message {
  display: flex;
  padding: 8px;
  border-radius: 8px;

  &--error {
    $error: & !global;
    background-color: #ffa6a654;
  }

  &--success {
    $success: & !global;
    background-color: #89e0a354;
  }

  &__text {
    flex-grow: 1;
    padding: 4px 8px;
    word-break: break-word;
  }

  &__close {
    flex-shrink: 0;
    padding: 8px;

    width: 16px;
    height: 16px;
    border-radius: 8px;

    cursor: pointer;
    transition: 0.1s;
    background: url(../images/cross.png) no-repeat center center;

    &:active {
      transform: scale(0.9);
    }
    
    #{$error} &:hover {
      background-color: #eea0a0;
    }

    #{$success} &:hover {
      background-color: #96d3aa;
    }
  }
}
</style>