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

<style>
.top-message {
  display: flex;
  padding: 8px;
  border-radius: 8px;
}

.top-message--error {
  background-color: #ffa6a654;
}

.top-message--success {
  background-color: #89e0a354;
}

.top-message__text {
  flex-grow: 1;
  padding: 4px 8px;
  word-break: break-word;
}

.top-message__close {
  flex-shrink: 0;
  padding: 8px;

  width: 16px;
  height: 16px;
  border-radius: 8px;

  background: url(../images/cross.png) no-repeat center center;
}

.top-message--error .top-message__close:hover {
  background-color: #eea0a0;
}

.top-message--success .top-message__close:hover {
  background-color: #96d3aa;
}

.top-message__close:active {
  transform: scale(0.9);
}
</style>