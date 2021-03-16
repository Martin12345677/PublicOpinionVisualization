import useAxios from 'vue3-use-axios';

const { response, error, exec } = useAxios();

export const origin = 'http://127.0.0.1:5000';

export async function get(url, data) {
  const queryString = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
  await exec({
    url: `${origin}${url}?${queryString}`,
    method: 'get',
  });

  return await error.value || await response.value.data;
}
