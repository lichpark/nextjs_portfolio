"use client";

import Link from "next/link";

const Pagination = (props) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(props.totalContents / props.contentsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    pageNumbers.push(i + 1);
  });

  return (
    <>
      <nav className="list_nav">
        <ul className="list_nav__ul">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`${
                props.currentPage === number
                  ? "list_nav__ul__li page_active"
                  : "list_nav__ul__li"
              }`}
            >
              <Link href="" className="" onClick={() => props.paginate(number)}>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
