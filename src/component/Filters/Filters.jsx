import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
  const {filters, setFilters} = useFilters()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) =>{
    setFilters(prevState=> ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) =>{
    setFilters(prevState=> ({
      ...prevState,
      category: event.target.value
    }))
  }
    
  return (
    <section className="filters">
      <div className="range-container">
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          className="range"
          type="range"
          id="minPriceFilterId"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice} />
          <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>
          <select id="categoryFilterId" className="selector" onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Portatiles</option>
            <option value="smartphones">Celulares</option>
          </select>
        </label>
      </div>
    </section>
  )
}