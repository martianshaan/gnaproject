import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { productReducer } from '../reducers/productReducer';

export const ProductContext = createContext();

const initialState = {
    filters: {
        categories: [],
        sortBy: "",
        langauges: [],
        duration: [],
        other: [],
        selectedPriceRange: "null"
    }
}
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const handleApplyFilters = (filterType, filterValue) => {
        dispatch({
            type: 'FILTERS',
            payload: { filterType, filterValue }
        })
    };

    const handleClearFilters = () => {
        dispatch({
            type: 'CLEAR_FILTER',
        });
    };

    return (
        <ProductContext.Provider value={{
            ...state,
            filters: state.filters,
            handleApplyFilters,
            handleClearFilters
        }}>
            {children}
        </ProductContext.Provider>
    )
}

ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductContextProvider