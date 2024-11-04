import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

import OrderDetails from './order-details'

/* interface OrderTableRowProps {
  orderId: string
  customerName: string
  orderDate: string
  orderTotal: number
} */

const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        asda8sdas0d-8a999
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell className="font-medium">
        Alvaro De Carvalho Segundo Neto
      </TableCell>
      <TableCell className="font-medium">R$120,00</TableCell>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          Pendente
        </div>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <ArrowRight className="mr-2 h-4 w-4" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default OrderTableRow
