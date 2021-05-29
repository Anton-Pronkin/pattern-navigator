<template>
  <div class="pattern-field">
    <span class="pattern-field__name">{{ name }}</span>
    <span class="pattern-field__value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "PatternField",
  props: {
    name: {
      type: String,
      require: true,
    },
    value: {
      type: String,
      require: true,
    },
  },
};
</script>

<style>
.pattern-field {
  font-size: 14px;
}

.pattern-field__name {
  font-weight: bold;
}

.pattern-field__name:after {
  content: ":";
}
</style>