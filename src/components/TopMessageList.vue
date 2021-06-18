<template>
  <div class="top-message-list">
    <top-message v-for="message of messages" :key="message.text" :message="message" @close="close"></top-message>
  </div>
</template>

<script>
import TopMessage from "./TopMessage.vue";

export default {
  name: "TopMessageList",
  props: {
    messages: {
      type: Array,
      require: true,
    },
  },
  methods: {
    close(props) {
      this.$emit("close", props);
    },
  },
  components: { TopMessage },
};
</script>

<style>
.top-message-list {
  display: flex;
  flex-direction: column;
  gap: 8px 0;
}
</style>