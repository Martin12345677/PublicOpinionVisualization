<template>
  <div class="search_body">
    <div class="search_part">
      <el-input
        v-model="keyword"
        placeholder="请输入关键词"
        :clearable="true"
        prefix-icon="el-icon-search"
        size="medium"
        @keydown.enter="getGraph"
      ></el-input>
    </div>
    <div class="graph_part">
      <iframe
        class="news_graph"
        :src="newsGraphHtmlSrc"
        width="1000"
        height="550"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import api from '../api/news'

function useSearch() {
  const keyword = ref('');
  const newsGraphHtmlSrc = ref('');
  return {
    keyword,
    newsGraphHtmlSrc,
    async getGraph() {
      newsGraphHtmlSrc.value = await api.getNewsGraphUrl(keyword.value);
    },
  }
}

export default defineComponent({
  setup() {
    return {
      ...useSearch(),
    }
  }
});
</script>

<style lang="scss">
@import '../assets/scss/base.scss';

.search_body {
  text-align: center;
  width: 50%;
  min-width: 1000px;
  margin: auto;

  .search_part {
    margin: 200px 0 50px;
  }
  .el-input {
    width: 500px;
  }
  iframe {
    margin-top: 70px;
    border: none;
  }
}
</style>
