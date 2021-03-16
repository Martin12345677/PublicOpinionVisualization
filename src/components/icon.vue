<template>
  <svg
    v-show="visible"
    :class="svgClass"
    :width="sizeWidth"
    :height="sizeHeight"
    :viewBox="viewBox"
  >
    <use :xlink:href="symbolName" />
  </svg>
</template>

<script>
export default {
  name: 'Svgicon',
  props: {
    // 使用icon的图标文件名
    name: {
      type: String,
      required: true,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    width: {
      type: [Number, String],
      default: null,
    },
  },
  data() {
    return {
      visible: false,
      sizeWidth: null,
      sizeHeight: null,
      viewBox: '0 0 20 20',
    };
  },
  computed: {
    symbolName() {
      return `#svg_${this.name}`;
    },
    svgClass() {
      if (this.name) {
        return `svg_icon svg_${this.name}`;
      }
      return 'svg_icon';
    },
  },
  async created() {
    if (!this.name) {
      return;
    }
    setTimeout(() => {
      this.xml = document.getElementById(`svg_${this.name}`);
      this.getSize();
      this.getViewBox();
      this.visible = true;
    });
  },
  methods: {
    getSize() {
      if (this.width || this.height) {
        this.sizeWidth = this.width || 10;
        this.sizeHeight = this.height || 10;
        return false;
      }
      if (!this.xml) {
        this.sizeWidth = 10;
        this.sizeHeight = 10;
        return false;
      }
      const viewBox = this.xml?.getAttribute('viewBox')?.split(' ');
      if (viewBox && viewBox.length === 4) {
        this.sizeWidth = viewBox[2] || 10;
        this.sizeHeight = viewBox[3] || 10;
      }
      return false;
    },
    getViewBox() {
      const viewBox = this.xml?.getAttribute('viewBox')?.split(' ');
      if (viewBox && viewBox.length === 4) {
        this.viewBox = viewBox.join(' ');
      } else {
        this.viewBox = `0 0 ${this.sizeWidth} ${this.sizeHeight}`;
      }
    },
  },
};
</script>
