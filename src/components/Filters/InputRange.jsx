import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const useProductContext = () => useContext(ProductContext)

function InputRange() {
  const { handleApplyFilters, filters: { selectedPriceRange } } = useProductContext();

  const handlePriceRangeChange = (e) => {
    handleApplyFilters(e.target.name, e.target.value,)
  }
  return (
    <form>
      <label htmlFor="range">
        <input
          type="range"
          id="range"
          name="selectedPriceRange"
          min="0"
          max="500"
          step='1'
          className="w-full accent-[--primary-text-color] cursor-pointer"
          value={selectedPriceRange || ''}
          onChange={handlePriceRangeChange}
        />
        <article className="w-full flex justify-between p-0">
          <span>$ 0 </span>
          <span>$ 500</span>
        </article>
      </label>
    </form>
  );
}


export default InputRange;
