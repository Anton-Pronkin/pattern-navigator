<template>
  <div class="pattern-preview-settings">
    <div class="patternPreviewSetting__name">RegExp:</div>
    <div class="patternPreviewSetting__value">{{ pattern.regexp }}</div>

    <div class="patternPreviewSetting__name">Url:</div>
    <div class="patternPreviewSetting__value">
      <highlighted-pattern :color-shift="index">{{ pattern.url }}</highlighted-pattern>
    </div>

    <div class="patternPreviewSetting__name">Title:</div>
    <div class="patternPreviewSetting__value">
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

<style>
.pattern-preview-settings {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  font-size: 14px;
}

.patternPreviewSetting__name {
  font-weight: bold;
}

.patternPreviewSetting__value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>