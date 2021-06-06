<template>
  <div class="patternPreview">
    <div class="patternPreview__header">
      <div class="patternPreview__header-badge patternPreview__header-badge--name">
        <div class="patternPreview__name">{{ pattern.name }}</div>
      </div>
      <div class="patternPreview__header-badge patternPreview__header-badge--buttons">
        <div class="patternPreview__buttons">
          <div class="patternPreview__button patternPreview__button--edit" @click="edit"></div>
          <div class="patternPreview__button patternPreview__button--remove" @click="remove"></div>
        </div>
      </div>
    </div>

    <div class="patternPreview__settings">
      <div class="patternPreview__setting-name">RegExp:</div>
      <div class="patternPreview__setting-value">{{ pattern.regexp }}</div>

      <div class="patternPreview__setting-name">Url:</div>
      <div class="patternPreview__setting-value">
        <highlighted-pattern :color-shift="index">{{ pattern.url }}</highlighted-pattern>
      </div>

      <div class="patternPreview__setting-name">Title:</div>
      <div class="patternPreview__setting-value">
        <highlighted-pattern :color-shift="index">{{ pattern.title }}</highlighted-pattern>
      </div>
    </div>
  </div>
</template>

<script>
import HighlightedPattern from "./HighlightedPattern.vue";
export default {
  components: { HighlightedPattern },
  name: "PatternPreview",
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
  position: relative;
  margin: 8px 8px 24px;
  padding: 32px 16px 8px;

  border: 1px solid #d3d3d3;
  border-radius: 8px;
}

.patternPreview__header {
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;

  display: grid;
}

.patternPreview__header::before {
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

.patternPreview:hover .patternPreview__header::before {
  background-color: #f0f0f0;
}

.patternPreview__header-badge {
  grid-column-start: 1;
  grid-row-start: 1;

  border: 1px solid #d3d3d3;
  border-radius: 8px;

  color: #3a3a3a;
  background-color: #ffffff;
}

.patternPreview__header-badge--name {
  justify-self: center;
}

.patternPreview__header-badge--buttons {
  justify-self: right;
  margin-right: 16px;
}

.patternPreview__name {
  padding: 4px 24px;
  font-size: 20px;
  font-weight: bold;

  max-width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.patternPreview__buttons {
  display: flex;
  padding: 4px;
  cursor: pointer;
}

.patternPreview__button {
  padding: 8px;
  width: 16px;
  height: 16px;

  user-select: none;
  border-radius: 8px;
  background: transparent no-repeat center center;

  opacity: 0.8;
  transition: 0.1s;
}

.patternPreview__button:hover {
  background-color: #f1f1f1;
  opacity: 1;
}

.patternPreview__button:active {
  transform: scale(0.9);
}

.patternPreview__button--edit {
  background-image: url(../images/pen.png);
}

.patternPreview__button--remove {
  background-image: url(../images/cross.png);
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

.patternPreview__setting-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>