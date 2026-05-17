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

export const visitorApi = {
  // 记录一次访问
  record() {
    return apiClient.get('/visitor/record')
  },

  // 获取访问统计
  stats() {
    return apiClient.get('/visitor/stats')
  },

  // 获取最近访客
  recent() {
    return apiClient.get('/visitor/recent')
  },
}

export default apiClient
