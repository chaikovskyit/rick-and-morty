import React, { useState, useEffect } from 'react'
import { getData, getLastPage, getFilteredURL } from '../helpers'
import CardInfo from '../components/CardInfo'
import Pagination from '../components/Pagination'
import { CHARACTERS_MAIN_URL, CHARACTERS_LIMIT, FILTER_VALUES } from '../constants'
import PopUp from '../components/PopUp'
import CustomDropdown from '../components/CustomDropdown';
import { Button } from 'reactstrap';

const Characters = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  const [filter, setFilter] = useState({
    species: 'all',
    status: 'all',
    gender: 'all',
  });

  const handleFilter = (e, type) => {
    e.preventDefault();
    console.log('type', type)
    console.log(e.targer);
    setFilter({
      ...filter,
      [type]: e.target.value,
    })
  }
  
  const getFilteredData = async () => {
    const url = getFilteredURL(filter);
    console.log('URL: ', url);
    const data = await getData(url);
    setCharacters(data.results.slice(0, 10));
  }

  
  
  // const getCharacters = async () => {
  //   const charactersURL = getListURL(1, 671, 10)
  //   const res = await fetch(charactersURL);
  //   const data = await res.json();
  //   setCharacters(data);
  // }

  const getPageMainData = async () => {
    const res = await fetch(CHARACTERS_MAIN_URL);
    const data = await res.json();
    setCharacters(data.results.slice(0, CHARACTERS_LIMIT));
    setLastPage(getLastPage(data.info.count, CHARACTERS_LIMIT));
    setCurrentPage(1)
  }

  useEffect(() => {
    const getData = async () => {
      await getPageMainData();
    }
    getData();
  }, [])

  return(
    <div className='characters'>
      <h1>Characters page</h1>
      <div className="filter">
        <CustomDropdown 
          title="Species" 
          type="species" 
          handleChange={handleFilter}
          values={FILTER_VALUES.species}
          selected={filter.species}
        />
        <CustomDropdown 
          title="Status" 
          type="status" 
          handleChange={handleFilter}
          values={FILTER_VALUES.status}
          selected={filter.status}
        />
        <CustomDropdown 
          title="Gender" 
          type="gender" 
          handleChange={handleFilter}
          values={FILTER_VALUES.gender}
          selected={filter.gender}
        />
        <Button color="primary" onClick={getFilteredData} >
          Filter
        </Button>

      </div>
      
      <div className='characters__list row'>
        {characters.map(person => {
          const {name, image, id} = person
          return <CardInfo key={id} name={name} image={image} person={person}/>
        })}
        <Pagination  
          page={currentPage} 
          setPage={setCurrentPage} 
          changePageContent={setCharacters} 
          lastPage={lastPage}
          firstPage={getPageMainData}
          limit={CHARACTERS_LIMIT}
        />
      </div>
    </div>
  )
}

export default Characters