/* eslint-disable react/prop-types */
//import { useProductContext } from '../../contexts/contextIndex';
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const useProductContext = () => useContext(ProductContext)
const Checkbox = ({ data }) => {
    const { name, number } = data;


    const { handleApplyFilters, filters: { categories } } = useProductContext();

    const checkboxHandler = (e) => {
        let categoryArray = categories;
        console.log(categoryArray);

        if (e.target.checked) {
            categoryArray.push(e.target.value);
        } else {
            categoryArray = categoryArray.filter((cat) => cat !== e.target.value);
        }

        handleApplyFilters(e.target.name, categoryArray);
    };

    return (
        <div className="flex  gap-20">
            <label className="capitalize flex-1 text-neutral-700 cursor-pointer flex  gap-1">
                <input
                    className="accent-[--primary-text-color] me-2 cursor-pointer"
                    type="checkbox"
                    name="categories"
                    value={name}
                    checked={categories.includes(name)}
                    onChange={checkboxHandler}
                />
                {name}
            </label>
            <p className="text-neutral-600">{number}</p>
        </div>
    );
};

export default Checkbox;
