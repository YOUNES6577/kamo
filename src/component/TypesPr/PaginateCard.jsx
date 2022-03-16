import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";

var data=[{title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},
            {title:"",description:"",img:""},]
export default function Paginate(){
    const [users, setUsers] = useState(JsonData.slice(0, 10));
    const [pageNumber, setPageNumber] = useState(0);
  
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;
  
    const displayUsers = users
      .slice(pagesVisited, pagesVisited + usersPerPage)
      .map((user) => {
        return (
          <div className="user">
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <h3>{user.email}</h3>
          </div>
        );
      });
  
    const pageCount = Math.ceil(users.length / usersPerPage);
  
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  
    return (
      <div className="App">
        {displayUsers}
        {/* <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          
        /> */}
      </div>
    );
}