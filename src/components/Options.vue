<template>
  <div class="options">
    <patterns-preview
      v-if="!isEditing"
      :patterns="patterns"
      @create-pattern="createPattern"
      @edit-pattern="editPattern"
      @remove-pattern="removePattern"
    ></patterns-preview>
    <edit-pattern v-else @cancel="stopEditing" @save="savePattern" :originalPattern="currentPattern"></edit-pattern>
  </div>
</template>

<script>
import PatternsPreview from "./PatternsPreview.vue";
import EditPattern from "./EditPattern.vue";
import "@fontsource/titillium-web";

export default {
  name: "Options",
  props: {
    storage: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      currentPattern: null,
      patterns: [],
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
  },
  async mounted() {
    this.patterns = await this.storage.getPatterns();
  },
  components: {
    EditPattern,
    PatternsPreview,
  },
};
</script>

<style>
body {
  margin: 0;
  width: 612px;
  margin-left: 12px;
  font: 14px "Titillium Web";
  overflow-y: scroll;
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