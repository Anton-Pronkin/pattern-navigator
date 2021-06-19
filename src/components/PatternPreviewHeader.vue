<template>
  <div class="pattern-preview-header" :class="{ 'pattern-preview-header--hover': hover }">
    <div class="pattern-preview-header__badge pattern-preview-header__badge--title">
      <div class="pattern-preview-header__title">{{ title }}</div>
    </div>
    <div v-if="showButtons" class="pattern-preview-header__badge pattern-preview-header__badge--buttons">
      <div class="pattern-preview-header__buttons">
        <div class="pattern-preview-header__button pattern-preview-header__button--edit" @click="edit"></div>
        <div class="pattern-preview-header__button pattern-preview-header__button--remove" @click="remove"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatternPreviewHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    showButtons: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    edit() {
      this.$emit("edit");
    },

    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style lang="scss">
@import "./styles/buttons/icon-button";

.pattern-preview-header {
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;

  display: grid;

  &::before {
    content: "";
    display: block;

    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    height: 16px;

    border-bottom: 1px solid #d3d3d3;
    background-color: #fafafa;
    z-index: -1;
    transition: 0.2s;
  }

  &--hover::before {
    background-color: #f0f0f0;
  }

  &__badge {
    grid-column-start: 1;
    grid-row-start: 1;

    border: 1px solid #d3d3d3;
    border-radius: 8px;

    color: #3a3a3a;
    background-color: #ffffff;

    &--title {
      justify-self: center;
    }

    &--buttons {
      justify-self: right;
      margin-right: 16px;
    }
  }

  &__title {
    padding: 4px 24px;
    font-size: 20px;
    font-weight: bold;

    max-width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__buttons {
    display: flex;
    padding: 4px;
  }

  &__button {
    &--edit {
      @include icon-button(url(../images/pen.png));
    }

    &--remove {
      @include icon-button(url(../images/cross.png));
    }
  }
}
</style>