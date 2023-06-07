import { useParams } from "react-router-dom"
import { getProduct } from "../../function/products"
import "./Product.css"
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "../icons"
import { Cart } from "../Cart/Cart"

export function Product() {

  const { addToCart, cart, removeFromCart } = useCart()

  const params = useParams()
  const product = getProduct(parseInt(params.productId))

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  const isProductInCart = checkProductInCart(product)


  return (
    <main className="container">
    <Cart />
    <section className="product-container">
      <img
        className="image"
        src={product.thumbnail}
        alt={product.title}
      />
      <aside className="info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        ${product.price}

      </aside>
      <button
        className={isProductInCart ? "button buttonAdd" : "button buttonRemove"}
        onClick={() => {
          isProductInCart
            ? removeFromCart(product)
            : addToCart(product)
        }}
      >
        {
          isProductInCart
            ? <RemoveFromCartIcon />
            : <AddToCartIcon />
        }
      </button>
    </section>
    </main>
  )
}