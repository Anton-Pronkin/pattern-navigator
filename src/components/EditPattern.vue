<template>
  <div class="edit-pattern">
    <div class="edit-pattern__fields">
      <label for="name">Name: </label>
      <input class="edit-pattern__input" v-model="name" ref="name" id="name" type="text" @input="inputText" />
      <div class="edit-pattern__note">The name is only used as a setting name and is not displayed anywhere else.</div>

      <label for="regexp">RegExp: </label>
      <input class="edit-pattern__input" v-model="regexp" ref="regexp" id="regexp" type="text" @input="inputText" />
      <div class="edit-pattern__note">A regular expression that will be used as a pattern for finding system identifiers on the pages.</div>

      <label for="Url">Url: </label>
      <input class="edit-pattern__input" v-model="url" ref="url" id="Url" type="text" @input="inputText"/>
      <div class="edit-pattern__note">
        The target URL for navigation when the pattern is matched. You can use <span class="edit-pattern__highlighted-note">$0</span> -
        <span class="edit-pattern__highlighted-note">$9</span> placeholders to put matched identifiers to URL. Use
        <span class="edit-pattern__highlighted-note">$0</span> if there is no any groups.
      </div>

      <label for="title">Title: </label>
      <input class="edit-pattern__input" v-model="title" ref="title" id="title" type="text" @input="inputText"/>
      <div class="edit-pattern__note">
        The text of context menu item for the matched pattern. You can use <span class="edit-pattern__highlighted-note">$0</span> -
        <span class="edit-pattern__highlighted-note">$9</span> placeholders to put matched identifiers to title. Use
        <span class="edit-pattern__highlighted-note">$0</span> if there is no any groups.
      </div>
    </div>

    <div class="edit-pattern__actions">
      <div class="edit-pattern__action" @click="save">Save</div>
      <div class="edit-pattern__action" @click="cancel">Cancel</div>
    </div>
  </div>
</template>

<script>
import PatternValidator from "../modules/patternValidator";

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
    cancel() {
      this.$emit("cancel");
    },

    save() {
      if (!PatternValidator.validateName(this.name)) {
        return this.markAsError(this.$refs.name);
      }

      if (!PatternValidator.validateRegExp(this.regexp)) {
        return this.markAsError(this.$refs.regexp);
      }

      if (!PatternValidator.validateUrl(this.url)) {
        return this.markAsError(this.$refs.url);
      }

      if (!PatternValidator.validateTitle(this.title)) {
        return this.markAsError(this.$refs.title);
      }

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

    markAsError(input) {
      input.classList.add("edit-pattern__error-field");
      input.focus();
    },

    inputText(event) {
      event.target.classList.remove("edit-pattern__error-field");
    },
  },
  mounted() {
    if (this.originalPattern) {
      this.name = this.originalPattern.name;
      this.regexp = this.originalPattern.regexp;
      this.title = this.originalPattern.title;
      this.url = this.originalPattern.url;
    }

    this.$refs.name.focus();
  },
};
</script>

<style>
.edit-pattern {
  padding: 4px 0 8px;
}

.edit-pattern__fields {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
}

.edit-pattern__note {
  grid-column: 2 / 3;
  margin-bottom: 8px;
  color: #5c5c5c;
}

.edit-pattern__input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #c5c5c5;
}

.edit-pattern__input:focus {
  outline: none;
  border-color: #8b8b8b;
}

.edit-pattern__highlighted-note {
  font-weight: bold;
  color: #434fb9;
}

.edit-pattern__error-field:focus {
  border-color: #c21010;
}

.edit-pattern__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.edit-pattern__action {
  padding: 4px 16px;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: 0.1s;
}

.edit-pattern__action:hover {
  background-color: #e9e9e9;
}

.edit-pattern__action:active {
  transform: scale(0.95);
}
</style>