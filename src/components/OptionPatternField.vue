<template>
  <div class="option-pattern-field">
    <span class="option-pattern-field__name">{{ name }}</span>
    <span class="option-pattern-field__value">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "OptionPatternField",
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
.option-pattern-field {
  font-size: 14px;
}

.option-pattern-field__name {
  font-weight: bold;
}

.option-pattern-field__name:after {
  content: ":";
}
</style>