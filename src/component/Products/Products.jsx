import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "../icons"
import { useCart } from "../hooks/useCart.js"
import { Link } from "react-router-dom"

export function Products({ products }) {

  const { addToCart, cart, removeFromCart } = useCart()


  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <Link to={`product/${product.id}`} key={product.id}>
              <li key={product.id}>
                <img className="imagen" src={product.thumbnail} alt={product.description} />
                <div className="description">
                  <p><strong>{product.title}</strong> - ${product.price}</p>
                </div>

                <div>
                  <button
                    style={{ backgroundColor: isProductInCart ? "red" : "green" }}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                  >
                    {isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}