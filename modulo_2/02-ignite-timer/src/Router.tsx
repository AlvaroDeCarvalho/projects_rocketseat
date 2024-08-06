import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Home } from './pages/Home'

export function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/exemplo" element={<h1>Exemplo</h1>} />
      </Route>
    </Routes>
  )
}
