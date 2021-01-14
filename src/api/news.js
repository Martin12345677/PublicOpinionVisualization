import { get } from '../utils/axios'

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
}
