import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ tasksPerPage, totalTasks, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ReactPaginate
            onPageChange={({ selected }) => paginate(selected + 1)}
            pageCount={pageNumbers.length}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            containerClassName="pagination"
            activeClassName="active"
        />
    );
};

export default Pagination;
