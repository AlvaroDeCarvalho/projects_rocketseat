import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { getManagerRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/getProfile'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
  })

  const { data: managerRestaurant } = useQuery({
    queryKey: ['manager-restaurant'],
    queryFn: () => getManagerRestaurant(),
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>
            {managerRestaurant?.name ? managerRestaurant.name : 'carregando...'}
          </span>
          <span className="text-normal text-xs text-muted-foreground">
            {profile?.email ? profile.email : 'carregando...'}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
