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
import { useRouter } from 'vue-router';

function useTab() {
  const tabs = ref([
    {
      name: '舆情案例',
      path: '/',
    },
    {
      name: '检索',
      path: '/search',
    },
    {
      name: '新冠肺炎案例可视化', 
      path: '/covid',
    }
  ]);
  const router = useRouter();
  const curTab = ref({});
  return {
    tabs,
    curTab,
    changeTab(tab) {
      if (curTab.value !== tab) {
        curTab.value = tab;
        router.push(tab.path);
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
    margin-right: 40px;
    &:hover {
      color: $headerHoverColor;
    }
  }
  .current_tab {
    color: $headerHoverColor;
  }
}
</style>
