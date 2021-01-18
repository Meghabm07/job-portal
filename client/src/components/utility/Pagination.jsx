import React from "react";

const Pagination = (props) => {

    // --------------------------------------User Defined Functions -----------------------------------------

    const changePage = (page) => {
        props.setPage(page);
    }

    // --------------------------------------Render Functions -----------------------------------------


    var liElement = [];

    for (let i = 1; i <= props.lastPage; i++) {
        liElement.push(
            <li
                key={i}
                className={
                    props.currentPage === i
                        ? "page-item active"
                        : "page-item"
                }
            >
                <div onClick={() => changePage(i)} className="page-link">
                    {i}
                </div>
            </li>
        );
    }

    return (
        <nav aria-label="...">
            <ul className="pagination mb-0">
                <li
                    className={
                        props.currentPage - 1 < 1
                            ? "page-item disabled"
                            : "page-item"
                    }
                >
                    <div
                        onClick={() =>
                            changePage(props.currentPage - 1)
                        }
                        className="page-link"
                        tabIndex="-1"
                    >
                        Previous
                        </div>
                </li>
                {liElement}
                <li
                    className={
                        props.currentPage + 1 > props.lastPage
                            ? "page-item disabled"
                            : "page-item "
                    }
                >
                    <div
                        onClick={() =>
                            changePage(props.currentPage + 1)
                        }
                        className="page-link"
                    >
                        Next
                        </div>
                </li>
            </ul>
        </nav>
    );
}


export default Pagination;