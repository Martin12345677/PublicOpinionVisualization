<template>
  <div class="home_body">
    <div class="search_part">
      <el-autocomplete
        v-model="keyword"
        :fetch-suggestions="searchNews"
        placeholder="请输入关键词搜索新闻事件"
        :clearable="true"
        prefix-icon="el-icon-search"
        @select="showNews"
        size="medium"
      ></el-autocomplete>
    </div>
    <div class="news_part" v-if="curNews">
      <div class="news_title">
        {{ curNews.title }}
      </div>
      <div class="news_content">
        {{ curNews.content.split('http')[0] }}
      </div>
      <iframe
        class="comments_graph"
        :src="commentsGraphHtmlSrc"
        width="1000"
        height="550"
      ></iframe>
      <div class="content_word_cloud">
        <img
          class="content_word_cloud_img"
          :src="contentWordCloudSrc"
        >
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import api from '../api/news';

function useSearch() {
  const keyword = ref('');
  return {
    keyword,
    async searchNews(word, cb) {
      const news = await api.searchNews(word);
      news.forEach(n => n.value = n.title);
      cb(news);
    },
  }
}

function useNews() {
  const curNews = ref(null);
  const commentsGraphHtmlSrc = ref('');
  const contentWordCloudSrc = ref('');
  return {
    curNews,
    commentsGraphHtmlSrc,
    contentWordCloudSrc,
    async showNews(news) {
      curNews.value = news;
      commentsGraphHtmlSrc.value = await api.getCommentsGraphUrl(news.id);
      contentWordCloudSrc.value = await api.getContentWordCloudUrl(news.id);
    },
  }
}

export default defineComponent({
  setup() {
    return {
      ...useSearch(),
      ...useNews(),
    }
  }
});
</script>

<style lang="scss">
@import '../assets/scss/base.scss';

.home_body {
  text-align: center;
  width: 50%;
  min-width: 1000px;
  margin: auto;

  .search_part {
    margin: 200px 0 50px 0;
  }
  .el-autocomplete {
    width: 500px;
  }
  .news_part {
    .news_title {
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
      color: $titleColor;
    }
    .news_content {
      text-align: left;
      text-indent: 30px;
      line-height: 25px;
      color: $contentColor;
    }
  }
  iframe {
    margin-top: 30px;
    border: none;
  }
  .content_word_cloud {
    width: 500px;
    height: 300px;
    margin: auto;
    padding: 20px;
  }
  .content_word_cloud_img {
    width: 100%;
    height: 100%;
  }
}
</style>
