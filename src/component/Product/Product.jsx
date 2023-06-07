import { useParams } from "react-router-dom"
import { getProduct } from "../../function/products"
import "./Product.css"

export function Product() {

  const params = useParams()

  const product =  getProduct(parseInt(params.productId))
  
  return (
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
    </section>
  )
}