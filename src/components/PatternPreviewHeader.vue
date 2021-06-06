<template>
  <div class="patternPreviewHeader" :class="{ 'patternPreviewHeader--hover': hover }">
    <div class="patternPreviewHeader__badge patternPreviewHeader__badge--title">
      <div class="patternPreviewHeader__title">{{ title }}</div>
    </div>
    <div class="patternPreviewHeader__badge patternPreviewHeader__badge--buttons">
      <div class="patternPreviewHeader__buttons">
        <div class="patternPreviewHeader__button patternPreviewHeader__button--edit" @click="edit"></div>
        <div class="patternPreviewHeader__button patternPreviewHeader__button--remove" @click="remove"></div>
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
  },
  methods: {
    edit: function () {
      this.$emit("edit");
    },

    remove: function () {
      this.$emit("remove");
    },
  },
};
</script>

<style>
.patternPreviewHeader {
  position: absolute;
  top: -12px;
  left: 0;
  right: 0;

  display: grid;
}

.patternPreviewHeader::before {
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

.patternPreviewHeader--hover::before {
  background-color: #f0f0f0;
}

.patternPreviewHeader__badge {
  grid-column-start: 1;
  grid-row-start: 1;

  border: 1px solid #d3d3d3;
  border-radius: 8px;

  color: #3a3a3a;
  background-color: #ffffff;
}

.patternPreviewHeader__badge--title {
  justify-self: center;
}

.patternPreviewHeader__badge--buttons {
  justify-self: right;
  margin-right: 16px;
}

.patternPreviewHeader__title {
  padding: 4px 24px;
  font-size: 20px;
  font-weight: bold;

  max-width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.patternPreviewHeader__buttons {
  display: flex;
  padding: 4px;
  cursor: pointer;
}

.patternPreviewHeader__button {
  padding: 8px;
  width: 16px;
  height: 16px;

  user-select: none;
  border-radius: 8px;
  background: transparent no-repeat center center;

  opacity: 0.8;
  transition: 0.1s;
}

.patternPreviewHeader__button:hover {
  background-color: #f1f1f1;
  opacity: 1;
}

.patternPreviewHeader__button:active {
  transform: scale(0.9);
}

.patternPreviewHeader__button--edit {
  background-image: url(../images/pen.png);
}

.patternPreviewHeader__button--remove {
  background-image: url(../images/cross.png);
}
</style>