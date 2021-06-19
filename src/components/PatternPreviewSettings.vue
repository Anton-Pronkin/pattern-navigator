<template>
  <div class="pattern-preview-settings">
    <div class="pattern-preview-settings__name">RegExp:</div>
    <div class="pattern-preview-settings__value">{{ pattern.regexp }}</div>

    <div class="pattern-preview-settings__name">Url:</div>
    <div class="pattern-preview-settings__value">
      <highlighted-pattern :color-shift="index">{{ pattern.url }}</highlighted-pattern>
    </div>

    <div class="pattern-preview-settings__name">Title:</div>
    <div class="pattern-preview-settings__value">
      <highlighted-pattern :color-shift="index">{{ pattern.title }}</highlighted-pattern>
    </div>
  </div>
</template>

<script>
import HighlightedPattern from "./HighlightedPattern.vue";

export default {
  components: {
    HighlightedPattern,
  },
  name: "PatternPreviewSettings",
  props: {
    pattern: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss">
.pattern-preview-settings {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  font-size: 14px;

  &__name {
    font-weight: bold;
  }

  &__value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>