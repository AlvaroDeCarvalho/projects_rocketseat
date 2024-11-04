import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthOrdersCanceledCard } from './month-canceled-amount-card'
import { MonthOrderAmountCard } from './month-order-amount'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-produtcs-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrdersAmountCard />
          <MonthOrdersCanceledCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
