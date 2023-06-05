import { Products } from "./component/Products/Products"
import { products } from "./mocks/products.json"
import { Header } from "./component/Header/Header"
import { useFilters } from "./component/hooks/useFilters.js"
import { CartProvider } from "./context/cart"
import { Cart } from "./component/Cart/Cart"


function App() {
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App
