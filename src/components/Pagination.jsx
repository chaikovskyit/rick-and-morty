import React from 'react'
import { getListURL, getData } from '../helpers'

const Pagination = ({ 
  total, limit, page, changePageContent, type, setPage,
  lastPage, firstPage
}) => {
  const handleNextPage = async() => {
    setPage(page + 1);
    const nextPageURL = getListURL({
      page: +page + 1, total, limit, type
    });
    const nextPageData = await getData(nextPageURL);
    changePageContent(nextPageData);
  }

  const handlePrevPage = async() => {
    setPage(page - 1);
    const nextPageURL = getListURL({
      page: +page - 1, total, limit, type
    });
    const prevPageData = await getData(nextPageURL);
    changePageContent(prevPageData);
    console.log(nextPageURL);
  }

  const handleLastPage = async () => {
    setPage(lastPage);
    const lastPageUrl = getListURL({
      page: lastPage, total, limit, type
    });
    const characters = await getData(lastPageUrl);
    changePageContent(characters)
  }

  const handleFirstPage = async () => {
    firstPage()
  }



  return (
    <div className="pagination">
      <button disabled={page <= 1} onClick={handleFirstPage}>{`<<`}</button>
      <button disabled={page <= 1} onClick={handlePrevPage}>{`<`}</button>
      <span>{page}</span>
      <button disabled={ +page === +lastPage } onClick={handleNextPage}>{`>`}</button>
      <button disabled={ +page === +lastPage } onClick={handleLastPage}>{`>>`}</button>
    </div>
  )
}

export default Pagination
