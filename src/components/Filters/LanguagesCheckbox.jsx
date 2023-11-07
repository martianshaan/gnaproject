//languages

/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const useProductContext = () => useContext(ProductContext)
const LangaugesCheckbox = ({ data }) => {
    const { name, number } = data;


    const { handleApplyFilters, filters: { langauges} } = useProductContext();

    const checkboxHandler = (e) => {
        let categoryArray =  langauges;
        console.log('duration',categoryArray);

        if (e.target.checked) {
            categoryArray.push(e.target.value);
        } else {
            categoryArray = categoryArray.filter((cat) => cat !== e.target.value);
        }

        handleApplyFilters(e.target.name, categoryArray);
    };
    // const checkboxHandler = (e) => {
    //     const selectedValue = e.target.value;

    //     if (langauges.includes(selectedValue)) {
    //         const updatedDuration = langauges.filter((value) => value !== selectedValue);
    //         handleApplyFilters("duration", updatedDuration);
    //     } else {
    //         const updatedDuration = [...langauges, selectedValue];
    //         handleApplyFilters("duration", updatedDuration);
    //     }
    // };

    return (
        <div className="flex  gap-20">
            <label className="capitalize flex-1 text-neutral-700 cursor-pointer flex  gap-1">
                <input
                    className="accent-[--primary-text-color] me-2 cursor-pointer"
                    type="checkbox"
                    name="langauges"
                    value={name}
                    checked={ langauges.includes(name)}
                    onChange={checkboxHandler}
                />
                {name}
            </label>
            <p className="text-neutral-600">{number}</p>
        </div>
    );
};

export default LangaugesCheckbox;
