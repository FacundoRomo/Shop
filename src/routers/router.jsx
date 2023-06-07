import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Product } from "../component/Product/Product"

export  const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
        path:"product/:productId",
        element: <Product />

    }
])