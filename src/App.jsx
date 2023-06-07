import { Products } from "./component/Products/Products"
import { Header } from "./component/Header/Header"
import { useFilters } from "./component/hooks/useFilters.js"
import { CartProvider } from "./context/cart"
import { Cart } from "./component/Cart/Cart"
import { getAll } from "./function/products"

function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(getAll())

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
