// import { Sort } from "iconoir-react"
// import { useFilter } from "../hooks/useFilter";
// import { ProductContext } from '../context/ProductContext';
// import { useContext } from "react";
// import Pagination from "../components/Pagination";



// const Listing = () => {
//   const tripsList = useFilter();

//   const { handleApplyFilters } = useContext(ProductContext);

//   const handleSortByLowToHigh = () => {
//     handleApplyFilters('sortBy', 'lowToHigh');
//   };
//   const itemsPerPage = 5;
//   return (
//     <div>
//       <div className="flex justify-between items-center mt-12 mb-8 px-2">
//         <p> <span className="font-bold">3269 properties</span> in Europe</p>
//         <button onClick={handleSortByLowToHigh} className="btn-primary flex gap-2 bg-slate-100 rounded-full">
//           <Sort className="text-slate-500" />
//           <p className="text-slate-600">Sort</p>
//         </button>
//       </div>
//       <hr className="my-1 text-gray-900 " />
//           <Pagination data={tripsList} itemsPerPage={itemsPerPage} />
//     </div>
//   )
// }

// export default Listing

import { Sort } from "iconoir-react";
import { useFilter } from "../hooks/useFilter";
import { ProductContext } from '../context/ProductContext';
import { useContext, useState } from "react";
import Pagination from "../components/Pagination";

const Listing = () => {
  const tripsList = useFilter();

  const { handleApplyFilters } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSortByLowToHigh = () => {
    handleApplyFilters('sortBy', 'lowToHigh');
  };

  const itemsPerPage = 5;

  return (
    <div>
      <div className="flex justify-between items-center mt-12 mb-8 px-2">
        <p> <span className="font-bold">3269 properties</span> in Europe</p>
        <button onClick={handleSortByLowToHigh} className="btn-primary flex gap-2 bg-slate-100 rounded-full">
          <Sort className="text-slate-500" />
          <p className="text-slate-600">Sort</p>
        </button>
      </div>
      <hr className="my-1 text-gray-900" />

      <Pagination
        data={tripsList}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Listing;
