<template>
  <common-header></common-header>
  <router-view />
</template>

<script>
import commonHeader from './components/header';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
  components: {
    commonHeader,
  },
})
</script>

<style lang="scss">
body {
  background-image: url('./assets/image/home_bg.png');
}
</style>
