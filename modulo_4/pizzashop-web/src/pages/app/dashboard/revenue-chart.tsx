import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function RevenueChart() {
  const data = [
    {
      date: '10/10',
      revenue: 12000,
    },
    {
      date: '11/10',
      revenue: 12000,
    },
    {
      date: '12/10',
      revenue: 200,
    },
    {
      date: '10/13',
      revenue: 900,
    },
    {
      date: '10/14',
      revenue: 5000,
    },
    {
      date: '10/15',
      revenue: 54545,
    },
    {
      date: '10/16',
      revenue: 4445,
    },
    {
      date: '10/17',
      revenue: 777,
    },
  ]
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle>
            <CardTitle className="text-base font-medium">
              Receita no periodo
            </CardTitle>
            <CardDescription>Receita do diaria no periodo</CardDescription>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={88}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              stroke={colors.violet[500]}
              dataKey={'revenue'}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
