export const productReducer = (state, action) => {
    switch (action.type) {

        case 'FILTERS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.filterType]: action.payload.filterValue
                }
            };

        case 'CLEAR_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    categories: [],
                    sortBy: "'",
                    lanugauges: [],
                    duration: [],
                    other: [],
                    selectedPriceRange: state.maxRange,
                },
            };


        default:
            return state;
    }
};
