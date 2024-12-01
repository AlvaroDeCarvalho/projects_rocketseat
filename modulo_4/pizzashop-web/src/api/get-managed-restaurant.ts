import { api } from '@/lib/axios'

interface GetManagerRestaurantInterface {
  id: string
  name: string
  description: string
  createAt: Date | null
  updateAt: Date | null
  managerId: string
}

export async function getManagerRestaurant() {
  const response = await api.get<GetManagerRestaurantInterface>(
    '/managed-restaurant',
  )
  return response.data
}
