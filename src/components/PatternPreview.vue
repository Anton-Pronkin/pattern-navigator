<template>
  <div class="patternPreview">
    <div class="patternPreview__name">{{ pattern.name }}</div>

    <div class="patternPreview__settings">
        <div class="patternPreview__setting-name">RegExp:</div>
        <div class="patternPreview__setting-value">{{pattern.regexp}}</div>

        <div class="patternPreview__setting-name">Title:</div>
        <div class="patternPreview__setting-value">{{pattern.title}}</div>

        <div class="patternPreview__setting-name">Url:</div>
        <div class="patternPreview__setting-value">{{pattern.url}}</div>
    </div>
   
    <button @click="edit">Edit</button>
    <button @click="remove">Remove</button>
  </div>
</template>

<script>
export default {
  name: "PatternPreview",
  props: {
    pattern: {
      type: Object,
      required: true,
    },
  },
  methods: {
    edit: function () {
      this.$emit("edit", { id: this.pattern.id });
    },

    remove: function () {
      this.$emit("remove", { id: this.pattern.id });
    },
  },
};
</script>

<style>
.patternPreview {
  margin: 8px;
  padding: 8px 16px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;
}

.patternPreview__name {
  font-size: 26px;
  font-weight: bold;
  color: #3a3a3a;
  margin-bottom: 8px;
}

.patternPreview__settings {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  font-size: 14px;
}

.patternPreview__setting-name {
  font-weight: bold;
}
</style>