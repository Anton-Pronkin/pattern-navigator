<template>
  <div class="patterns-actions">
    <div class="patterns-actions__action" @click="importConfig">
      <span class="patterns-actions__icon patterns-actions__icon--import"></span>
      <span class="patterns-actions__animated-action-name">Import configuration</span>
    </div>
    <div class="patterns-actions__action patterns-actions__action--create-pattern" @click="createPattern">
      <span class="patterns-actions__icon patterns-actions__icon--create"></span
      ><span class="patterns-actions__action-name">Create a new pattern</span>
    </div>
    <div class="patterns-actions__action" @click="exportConfig">
      <span class="patterns-actions__icon patterns-actions__icon--export"></span>
      <span class="patterns-actions__animated-action-name">Export configuration</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "patterns-actions",
  methods: {
    createPattern() {
      this.$emit("create-pattern");
    },

    exportConfig() {
      this.$emit("export-config");
    },

    importConfig() {
      this.$emit("import-config");
    },
  },
};
</script>

<style>
.patterns-actions {
  display: flex;
  gap: 4px;
}

.patterns-actions__action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;

  border: 1px dotted #dbdbdb;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.1s;
  user-select: none;
}

.patterns-actions__action:hover {
  background-color: #f5f5f5;
}

.patterns-actions__action:active {
  transform: scale(0.95);
}

.patterns-actions__action--create-pattern {
  flex-grow: 1;
}

.patterns-actions__icon {
  display: inline-block;
  width: 16px;
  height: 16px;

  background-repeat: no-repeat;
  background-position: center center;

  opacity: 0.1;
  transition: 0.1s;
}

.patterns-actions__action:hover .patterns-actions__icon {
  opacity: 0.6;
}

.patterns-actions__icon--create {
  background-image: url(../images/plus.png);
}

.patterns-actions__icon--import {
  background-image: url(../images/import.png);
}

.patterns-actions__icon--export {
  background-image: url(../images/export.png);
}

.patterns-actions__action-name {
  margin-left: 8px;
}

.patterns-actions__animated-action-name {
  max-width: 0;
  margin-left: 0;
  
  white-space: nowrap;
  overflow-x: hidden;
  transition: 0.2s;
}

.patterns-actions__action:hover .patterns-actions__animated-action-name {
  max-width: 150px;
  margin-left: 8px;
}
</style>