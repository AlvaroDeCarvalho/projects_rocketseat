import { api } from '@/lib/axios'

interface ProfileInterface {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'user'
  createAt: Date | null
  updateAt: Date | null
}

export async function getProfile() {
  const response = await api.get<ProfileInterface>('/me')
  return response.data
}
