<template>
  <div class="options">
    <top-message-list v-if="messages.length" :messages="messages" @close="closeMessage"></top-message-list>

    <patterns-preview
      v-if="!isEditing"
      :patterns="patterns"
      @create-pattern="createPattern"
      @edit-pattern="editPattern"
      @remove-pattern="removePattern"
      @export-config="exportConfig"
      @import-config="importConfig"
    ></patterns-preview>

    <edit-pattern v-else @cancel="stopEditing" @save="savePattern" :original-pattern="currentPattern"></edit-pattern>
  </div>
</template>

<script>
import PatternsPreview from "./PatternsPreview.vue";
import EditPattern from "./EditPattern.vue";
import TopMessageType from "./enums/TopMessageType";
import "@fontsource/titillium-web";
import TopMessageList from "./TopMessageList.vue";

export default {
  name: "Options",
  props: {
    storage: {
      type: Object,
      required: true,
    },
    configurationManager: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      currentPattern: null,
      patterns: [],
      messages: [],
    };
  },
  methods: {
    createPattern() {
      this.startEditing(null);
    },

    async editPattern({ id }) {
      const pattern = await this.storage.getPattern(id);
      this.startEditing(pattern);
    },

    async removePattern({ id }) {
      this.patterns = await this.storage.removePattern(id);
    },

    async savePattern(pattern) {
      this.patterns = await this.storage.addOrUpdatePattern(pattern);
      this.stopEditing();
    },

    startEditing(pattern) {
      this.currentPattern = pattern;
      this.isEditing = true;
    },

    stopEditing() {
      this.currentPattern = null;
      this.isEditing = false;
    },

    closeMessage(index) {
      this.messages.splice(index, 1);
    },

    async exportConfig() {
      await this.configurationManager.export();
    },

    async importConfig() {
      try {
        this.patterns = await this.configurationManager.import();
        this.messages.push({
          type: TopMessageType.success,
          text: "The configuration is imported.",
        });
      } catch (errorMessage) {
        this.messages.push({
          type: TopMessageType.error,
          text: errorMessage,
        });
      }
    },
  },
  async mounted() {
    this.patterns = await this.storage.getPatterns();
  },
  components: {
    EditPattern,
    PatternsPreview,
    TopMessageList,
  },
};
</script>

<style>
body {
  margin: 0 0 0 12px;
  padding: 0 8px;
  width: 612px;
  font: 14px "Titillium Web";
  overflow-y: scroll;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-button {
  background: transparent;
}

::-webkit-scrollbar-track-piece {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #ebebeb;
  cursor: pointer;
}

::-webkit-scrollbar-thumb:hover {
  background: #dfdfdf;
}
</style>