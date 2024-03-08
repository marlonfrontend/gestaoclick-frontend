import { http } from './http'
import type { User } from '@/types'

export const getUserById = (id: string): Promise<User> => {
  return http.get(`/users/${id}`)
}
