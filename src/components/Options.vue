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
    createPattern: function () {
      this.startEditing(null);
    },

    editPattern: async function ({ id }) {
      const pattern = await this.storage.getPattern(id);
      this.startEditing(pattern);
    },

    removePattern: async function ({ id }) {
      this.patterns = await this.storage.removePattern(id);
    },

    savePattern: async function (pattern) {
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
  width: 600px;
  font: 14px "Titillium Web";
}
</style>