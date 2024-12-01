import { api } from '@/lib/axios'

export interface registerRestaurantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function RegisterRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: registerRestaurantBody) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
