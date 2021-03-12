import React, { useState, useEffect } from 'react'
import { InputGroup, Button, Input } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid'

const MyWatchList = () => {

  const [item, setItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const newItem = () => {
    if(item.trim() !== ''){
      const newItem = {
        id: uuidv4(),
        item: item,
      }
      setItems((items) => [...items, newItem])
      setItem('')
    } else {
      alert('You forgot enter episode...')
      setItem('')
    }
  }
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }


  return(
    <div className='myWatchList'>
      <InputGroup className='inputGroup'>
        <Input 
          value={item}
          className='input' 
          placeholder='Enter episode....'
          onChange={(e) => setItem(e.target.value)}
        />
        <Button 
          className='button' 
          color="secondary"
          onClick={newItem}
        >
          Enter
        </Button>
      </InputGroup>
      <h2>View later</h2>
      <ul className='watchList'>
        {
          items.map((item) => {
            return (
              <li>{item.item}
                <Button 
                  outline 
                  color="danger"
                  onClick={() => deleteItem(item.id)}
                >
                  delete
                </Button>
              </li>)
          })
        }
      </ul>
      
      
    </div>
  )
}

export default MyWatchList