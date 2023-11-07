import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';
import { tripsData } from '../db/tripData';

const filterByCheckbox = (selectedCategories, data) => {
    //console.log('selectedCategories', selectedCategories);
    //console.log('data', data);
    return selectedCategories.length > 0 ? data.filter((
        { category }) => (
        selectedCategories.includes(category)),
    ) : data;
};

const filterByDurationCheckbox = (selectedCategories, data) => {
    console.log('selectedCategories', selectedCategories);
    console.log('data', data);

    return selectedCategories.length > 0 ? data.filter(({ durationType }) => {
        console.log('durationType', durationType);
        return selectedCategories.includes(durationType);
    }) : data;
};

const filterByLanguages = (selectedCategories, data) => {
    return selectedCategories.length > 0 ? data.filter(({ language }) => {
        console.log('lang', language);
        return selectedCategories.includes(language);
    }) : data;
};
const filterByOther = (selectedCategories, data) => {
    return selectedCategories.length > 0 ? data.filter(({ other }) => {
        console.log('other', other);
        return selectedCategories.includes(other);
    }) : data;
};

// const filterByPriceRange = (selectedPriceRange, data) => {
//     if (!selectedPriceRange) {
//         console.log('notdd', data);
//         return data;
//     }
//     console.log('rangedata', data);

//     return data.filter(({ price }) => price <= selectedPriceRange);
// };

const filterByPriceRange = (selectedPriceRange, data) => {
    if (!selectedPriceRange) {
        console.log('not selectedPriceRange', data);
        return data;
    }

    console.log('selectedPriceRange', selectedPriceRange);

    const filteredData = data.filter(({ price }) => {
        console.log('newPrice', price);
        return price <= selectedPriceRange;
    });

    console.log('rangedata', filteredData);
    return filteredData;
};


const filterBySortBy = (selectedSortBy, data) => {
    if (selectedSortBy === "lowToHigh") {
        return data.slice().sort((a, b) => a.price - b.price);
    } else if (selectedSortBy === "highToLow") {
        return data.slice().sort((a, b) => b.price - a.price);
    } else {
        return data;
    }
};


const useFilter = () => {

    const useProductContext = useContext(ProductContext)
    const { filters } = useProductContext;
    let filteredData = filterByCheckbox(filters.categories, tripsData);
    filteredData = filterByDurationCheckbox(filters.duration, filteredData);
    filteredData = filterByPriceRange(filters.selectedPriceRange, filteredData);
    filteredData = filterByLanguages(filters.langauges, filteredData);
    filteredData = filterByOther(filters.other, filteredData);
    filteredData = filterBySortBy(filters.sortBy, filteredData);
    console.log('filteredData', filteredData);
    return filteredData
}

export { useFilter }