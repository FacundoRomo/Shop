import "./Products.css"
import { Link } from "react-router-dom"

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map(product => {
          return (
            <Link to={`product/${product.id}`} key={product.id}>
              <li key={product.id}>
                <img className="imagen" src={product.thumbnail} alt={product.description} />
                <div className="description">
                  <p><strong>{product.title}</strong> - ${product.price}</p>
                </div>
              </li>
            </Link>
          )
        })}
      </ul>
    </main>
  )
}