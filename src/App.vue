<template>
  <div>
    <common-header />
    <div class="body">
      <common-menu />
      <div class="router_part">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from './components/platform-header';
import commonMenu from './components/platform-menu';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  components: {
    commonHeader,
    commonMenu,
  },
})
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-x: hidden;
  color: #67757c;
  background: #f4f6f9;
  position: relative;
  font-family: "Montserrat",sans-serif;
  font-size: .9375rem;
  font-weight: 300;
  line-height: 1.5;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
.body {
  display: flex;
}
* {
  box-sizing: border-box;
}

.router_part {
  width: 100%;
  box-sizing: border-box;
  padding: 70px 0 0 240px;
}
</style>
