<template>
  <div>
    <div class="covid_model">
    </div>
    <div class="covid_show">
      <el-menu
        @select="changeGraph"
        :default-active="curGraphIndex"
        class="covid_graph_menu"
      >
        <el-menu-item
          :index = "0"
          class="covid_graph_menu_item"
        >
          新冠舆情热度分析
        </el-menu-item>
        <el-menu-item
          :index = "1"
          class="covid_graph_menu_item"
        >
          新冠舆情情感分析
        </el-menu-item>
        <el-date-picker
          v-model="month"
          class="covid_graph_menu_subitem"
          type="month"
          placeholder="选择时间"
          format="YYYY-MM"
        ></el-date-picker>
      </el-menu>
      <div class="covid_graph">
        <iframe
          class="show_graph"
          :src="graphSrc"
          width="1000"
          height="550"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from 'vue';
import api from '../api/news';

function useGraph () {
  const curGraphIndex = ref(0);
  const month = ref('');
  const graphSrc = computed(() => {
    const mv = month.value;
    const query = mv ? `?month=${mv.getFullYear()}-${mv.getMonth() > 8 ? mv.getMonth() + 1 : `0${mv.getMonth() + 1}`}` : '';
    return curGraphIndex.value === 0 ?
      api.getCovidWeiboNumGraphUrl() :
      `${api.getCovidWeiboAttitudeGraphUrl()}${query}`;
  });

  watch(month, () => {
    console.log(typeof month.value);
    curGraphIndex.value = 1;
  });
  return {
    curGraphIndex,
    graphSrc,
    month,
    changeGraph(index) {
      curGraphIndex.value = index;
    },
  };
}

export default defineComponent({
  setup () {
    return {
      ...useGraph(),
    };
  },
});

</script>

<style lang="scss">
@import '../assets/scss/base.scss';
.covid_show {
  margin-top: 200px;
  display: flex;
  justify-content: center;
  .covid_graph_menu {
    max-width: 300px;
    background-color: transparent;
    border: none;
  }
  .covid_graph_menu_item {
    color: $hintColor;
    &:hover {
      background-color: transparent;
      color: $contentColor;
    }
  }
  .is-active {
    color: $contentColor !important;
    background-color: transparent !important;
  }
  iframe {
    border: none;
  }
}
</style>
