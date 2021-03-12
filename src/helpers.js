export const getListURL = ({
  page = 1, 
  total = 671, 
  limit = 10,
  type = 'character'
}) => {
  const lastPageCount = total % limit;
  const lastPage = getLastPage(total, limit);
  const arr = [];
  let firstElementNum;
  if (page === 1) {
    firstElementNum = 1
  } else if ( page === lastPage ) {
    firstElementNum = page * limit - limit + lastPageCount;
  } else {
    firstElementNum = (page - 1) * limit + 1
  }

  const lastElementNum = firstElementNum + limit;
  
  if(+page === +lastPage){
    for(let i = firstElementNum; i <= firstElementNum + lastPageCount; i++){
      arr.push(i);
    } 
  } else {
    for(let i = firstElementNum; i < lastElementNum; i++){
      arr.push(i);
    }
  }
  return `https://rickandmortyapi.com/api/${type}/${arr}?species='alien'`;
}


export const getLastPage = (total, limit) =>  Math.ceil(total/limit);

export const getFilteredURL = (filter) => {
  const {species, status, gender} = filter;
  const speciesValue = species === 'all' ? '' : species;
  const statusValue = status === 'all' ? '' : status;
  const genderValue = gender === 'all' ? '' : gender;
  const url = `https://rickandmortyapi.com/api/character/?species=${speciesValue}&gender=${genderValue}&status=${statusValue}`;
  return url;
}

export const getData = async (url) => {
  const res = await fetch(url)
  const data = await res.json();
  return data;
}

