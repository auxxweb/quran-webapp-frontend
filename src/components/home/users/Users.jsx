import React, { useEffect, useState } from "react";
import styles from "./users.module.css";
import SearchInput from "../../search-input/SearchInput";
import UserCard from "../user-card/UserCard";
import {useHttpRequests } from "../../../api/api";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [pageCount,setPageCount]=useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesToShow, setPagesToShow] = useState([]); 
  const [search, setSearch] = useState([]); 
  const { get} = useHttpRequests();
  const handleSearchInputChange = (value) => {
    fetchUser(value);
  };

  useEffect(() => {
    fetchUser(search);
  }, [currentPage]);

  const fetchUser = async (search) => {
    setSearch(search)
    const data = await get(
      `/judge/users?currentPage=${currentPage}&&search=${search}`
    );
    setUserData(data?.participants);
    setPageCount(data?.totalPages)
    updatePagination(currentPage, data?.totalPages);
  };


  const updatePagination = (current, total) => {
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (total <= maxPagesToShow) {
      startPage = 1;
      endPage = total;
    } else {
      if (current <= Math.floor(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (current + Math.floor(maxPagesToShow / 2) >= total) {
        startPage = total - maxPagesToShow + 1;
        endPage = total;
      } else {
        startPage = current - Math.floor(maxPagesToShow / 2);
        endPage = current + Math.floor(maxPagesToShow / 2);
      }
    }
    const newPagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    setPagesToShow(newPagesToShow);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
    }
  };


  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headContainer}>
          <h1 className={styles.headText}>Select Participant</h1>
          <SearchInput onSearchInputChange={handleSearchInputChange} />
        </div>
        <div className={styles.userContainer}>
          {userData?.map((user, index) => (
            <UserCard user={user} key={index} />
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-2 items-center mt-5">
        <div
          onClick={() => handlePageChange(currentPage - 1)}
          className={`bg-secondary p-1 px-2 flex items-center cursor-pointer ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img src="/images/leftIcon.png" className="h-5" alt="" />
        </div>

        {pagesToShow.map((page) => (
          <h1
            key={page}
            onClick={() => handlePageChange(page)}
            className={`cursor-pointer ${currentPage === page ? "font-bold text-xl" : ""}`}
          >
            {page}
          </h1>
        ))}

        <div
          onClick={() => handlePageChange(currentPage + 1)}
          className={`bg-secondary p-1 px-2 flex items-center cursor-pointer ${
            currentPage === pageCount ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <img src="/images/rightIcon.png" className="h-5" alt="" />
        </div>
      </div>

    </>
  );
};

export default Users;
