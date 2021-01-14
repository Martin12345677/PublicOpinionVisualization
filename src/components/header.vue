<template>
  <div class="header_body">
    <div class="header_tabs">
      <div
        class="header_tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{current_tab: tab === curTab}"
        @click="changeTab(tab)"
      >
        {{ tab.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
// import { useRoute } from 'vue-router'

function useTab() {
  const tabs = ref([
    {
      name: '首页',
      path: '',
    },
  ]);
  // const route = useRoute();
  const curTab = ref(tabs.value[0]);
  return {
    tabs,
    curTab,
    changeTab(tab) {
      if (curTab.value !== tab) {
        curTab.value = tab;
        // route.value.push(tab.path);
      }
    }
  }
}

export default defineComponent({
  setup() {
    return {
      ...useTab(),
    }
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';

.header_body {
  height: $headerHeight;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $headerColor;
  line-height: $headerHeight;
  .header_tabs {
    margin-left: 50px;
    display: flex;
    color: $headerMainColor;
  }
  .header_tab {
    cursor: pointer;
    &:hover {
      color: $headerHoverColor;
    }
  }
  .current_tab {
    color: $headerHoverColor;
  }
}
</style>
