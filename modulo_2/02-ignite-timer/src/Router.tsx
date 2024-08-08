import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home/index'
import { History } from './pages/History'

export function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
