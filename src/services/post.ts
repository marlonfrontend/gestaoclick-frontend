import { http } from './http'
import type { Post } from '@/types'

export const getPosts = () => {
  return http.get('/posts')
}

export const getPostById = (id: string): Promise<Post> => {
  return http.get(`/posts/${id}`)
}
