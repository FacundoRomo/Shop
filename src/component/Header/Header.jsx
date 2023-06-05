import { Cart } from "../Cart/Cart"
import { Filters } from "../Filters/Filters"
import "./Header.css"

export function Header() {
  return (
    <header>
      <h1>TODO ES POCO</h1>
      <Filters />
      <Cart />
    </header>
  )
}