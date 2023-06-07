import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { Product } from "../component/Product/Product"

export  const router = createBrowserRouter([
    {
        path:"/Shop",
        element: <App />,
        errorElement:<h1>nose</h1>
    },
    {
        path:"/Shop/product/:productId",
        element: <Product /> 

    }
])