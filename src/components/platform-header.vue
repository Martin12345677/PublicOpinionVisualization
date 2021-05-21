<template>
  <div class="header">
    <div class="left_header">
      <img src="image/logo.png" class="platform_icon" >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.header {
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 50;
  transition: .2s ease-in;
  box-shadow: 1px 0 7px rgb(0 0 0 / 5%);
  .left_header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 20px;
  }
  .platform_icon {
    height: 70px;
  }
}
</style>
