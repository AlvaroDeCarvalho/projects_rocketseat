import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table'

const OrderDetails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 213njh4b12hj3b21:</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  Pendente
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground"> Cliente:</TableCell>
              <TableCell className="flex justify-end">
                Alvaro De Carvalgo Segundo Neto
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Telefone:{' '}
              </TableCell>
              <TableCell className="flex justify-end">
                {'(11) 99999-9999'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Email: </TableCell>
              <TableCell className="flex justify-end">
                alvarodecarvalho30@gmail.com
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há:
              </TableCell>
              <TableCell className="flex justify-end">3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Quantidade</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-left">
                Pizza peperoni familia
              </TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 69,99</TableCell>
              <TableCell className="text-right">R$ 139,98</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                Pizza Musssarela grande
              </TableCell>
              <TableCell className="text-right">5</TableCell>
              <TableCell className="text-right">R$ 30,00</TableCell>
              <TableCell className="text-right">R$ 150,00</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}> Total do pedido</TableCell>
              <TableCell className="text-right font-medium">R$289,98</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}

export default OrderDetails
