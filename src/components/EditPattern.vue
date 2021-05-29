<template>
  <div class="edit-pattern">
    <div class="edit-pattern__fields">
      <label for="name">Name: </label>
      <input v-model="name" id="name" type="text" />

      <label for="regexp">RegExp: </label>
      <input v-model="regexp" id="regexp" type="text" />

      <label for="title">Title: </label>
      <input v-model="title" id="title" type="text" />

      <label for="Url">Url: </label>
      <input v-model="url" id="Url" type="text" />
    </div>

    <div class="edit-pattern__actions">
      <button @click="save">Save</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPattern",
  props: {
    originalPattern: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      name: "",
      regexp: "",
      title: "",
      url: "",
    };
  },
  methods: {
    cancel: function () {
      this.$emit("cancel");
    },

    save: function () {
      const pattern = {
        name: this.name,
        regexp: this.regexp,
        title: this.title,
        url: this.url,
      };

      if (this.originalPattern) {
        pattern.id = this.originalPattern.id;
      }

      this.$emit("save", pattern);
    },
  },
  mounted() {
    if (this.originalPattern) {
      this.name = this.originalPattern.name;
      this.regexp = this.originalPattern.regexp;
      this.title = this.originalPattern.title;
      this.url = this.originalPattern.url;
    }
  },
};
</script>

<style>
.edit-pattern {
  margin: 8px;
}

.edit-pattern__fields {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
}

.edit-pattern__actions {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}
</style>