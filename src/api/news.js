import { get, origin } from '../utils/axios'

export default {
  async searchNews(keyword) {
    const res = await get('/news/search', {
      keyword,
    });
    const { code, data } = res;
    if (code === 1) {
      return data;
    }
    return [];
  },
  getCommentsGraphUrl(newsId) {
    return `${origin}/graph/comments?news_id=${newsId}`;
  },
  getNewsGraphUrl(keyword) {
    return `${origin}/graph/keyword?keyword=${keyword}`;
  },
  getCovidWeiboAttitudeGraphUrl() {
    return `${origin}/graph/attitude/covid`;
  },
  getCovidWeiboNumGraphUrl() {
    return `${origin}/graph/num/covid`;
  },
  getContentWordCloudUrl(newsId) {
    return `${origin}/graph/wordcloud?news_id=${newsId}`;
  },
}
