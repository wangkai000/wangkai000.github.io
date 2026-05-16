import axios from 'axios'
import { apiBase } from '~/config/param'

const apiClient = axios.create({
  baseURL: apiBase,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const likeApi = {
  // 获取当前用户点赞状态和总数
  getStatus(fingerprint: string) {
    return apiClient.get('/like/status', { params: { fingerprint } })
  },

  // 点赞
  like(fingerprint: string) {
    return apiClient.post('/like', { fingerprint })
  },

  // 取消点赞
  unlike(fingerprint: string) {
    return apiClient.delete('/like', { data: { fingerprint } })
  },
}

export default apiClient
