import ReactDOM from 'react-dom/client'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RouterProvider } from "react-router-dom"
import { router } from './routers/router.jsx'
import { CartProvider } from './context/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </FiltersProvider>

)
