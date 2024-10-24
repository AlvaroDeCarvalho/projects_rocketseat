import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import {Toaster} from 'sonner'
function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | pizza.shop' />
      <Toaster richColors closeButton />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
