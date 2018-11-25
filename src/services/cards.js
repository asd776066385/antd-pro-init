import request from '../utils/request'

export async function queryCards(params) {
  return request('/service/queryCards.json', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
  }