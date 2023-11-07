/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";


const DurationCheckbox = ({ data }) => {
    const { name, number } = data;
    const useProductContext = () => useContext(ProductContext)

    const { handleApplyFilters, filters: { duration } } = useProductContext();

    // const checkboxHandler = (e) => {
    //     let categoryArray = duration;
    //     console.log('duration',categoryArray);

    //     if (e.target.checked) {
    //         categoryArray.push(e.target.value);
    //     } else {
    //         categoryArray = categoryArray.filter((cat) => cat !== e.target.value);
    //     }

    //     handleApplyFilters(e.target.name, categoryArray);
    // };
    const checkboxHandler = (e) => {
        const selectedValue = e.target.value;

        if (duration.includes(selectedValue)) {
            const updatedDuration = duration.filter((value) => value !== selectedValue);
            handleApplyFilters("duration", updatedDuration);
        } else {
            const updatedDuration = [...duration, selectedValue];
            handleApplyFilters("duration", updatedDuration);
        }
    };

    return (
        <div className="flex  gap-20">
            <label className="capitalize flex-1 text-neutral-700 cursor-pointer flex  gap-1">
                <input
                    className="accent-[--primary-text-color] me-2 cursor-pointer"
                    type="checkbox"
                    name="duration"
                    value={name}
                    checked={duration.includes(name)}
                    onChange={checkboxHandler}
                />
                {name}
            </label>
            <p className="text-neutral-600">{number}</p>
        </div>
    );
};

export default DurationCheckbox;
