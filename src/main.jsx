import ReactDOM from 'react-dom/client'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'
import { RouterProvider} from "react-router-dom"
import { router } from './routers/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <RouterProvider router={router} />
  </FiltersProvider>  
    
)
