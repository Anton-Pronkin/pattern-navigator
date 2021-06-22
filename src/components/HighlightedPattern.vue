<script>
export default {
  name: "HighlightedPattern",
  props: {
    colorShift: {
      type: Number,
      default: 0,
    },
  },
  render(createElement) {
    const pattern = /\$\d(?!\d)/g;
    const text = this.$slots.default[0].text;

    const parts = text.split(pattern);
    const patternMatches = text.match(pattern);

    let elements = [];
    for (let i = 0; i < parts.length; i++) {
      elements.push(parts[i]);

      if (i < patternMatches?.length) {
        const element = this.createPatternElement(patternMatches[i], createElement);
        elements.push(element);
      }
    }

    return createElement("span", elements);
  },
  methods: {
    createPatternElement(text, createElement) {
      const props = {
        class: "highlighted-pattern__pattern",
        attrs: {
          style: "color: " + this.getColor(text),
        },
      };

      return createElement("span", props, text);
    },

    getColor(text) {
      const level = +text[1];
      const colors = ["#6136e4", "#ff7c8e", "#1f9887", "#b97012", "#ed5050", "#0c7c44", "#738735", "#2eb1c7", "#74ec66", "#cb0432"];
      const defaultColor = "#484848";

      const index = (level + this.colorShift) % colors.length;
      return index >= 0 && index <= 9 ? colors[index] : defaultColor;
    },
  },
};
</script>

<style>
.highlighted-pattern__pattern {
  font-weight: bold;
}
</style>