/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import SingleTour from "../components/SingleTour";

const Pagination = ({ data, itemsPerPage, currentPage, setCurrentPage }) => {
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
  }, [data, itemsPerPage, currentPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePreviousClick = () => {
    if (canGoPrevious) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (canGoNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {currentItems.map((tripData, index) => (
        <SingleTour tripData={tripData} key={index} />
      ))}

      <div className='my-3'>
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              onClick={handlePreviousClick}
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight  text-white bg-blue-700 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-...dark:hover:text-white ${
                !canGoPrevious ? 'cursor-not-allowed text-gray-300' : ''
              }`}
            >
              Previous
            </a>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => setCurrentPage(index + 1)}
                className={`flex  items-center justify-center px-3 h-8 leading-tight text-white
                 bg-blue-700 border border-gray-300 hover:bg-gray-100 hover:text-gray-700
                  ${
                  index + 1 === currentPage
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700  dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                    : ''
                }`}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={handleNextClick}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-white bg-blue-700 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover:text-white ${
                !canGoNext ? 'cursor-not-allowed text-gray-300' : ''
              }`}
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;

