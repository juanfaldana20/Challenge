import React, { useState } from 'react'

export const ComponentApp=()=> {
  const [category, setCategory] = useState('Ej: Santo grial ft. Duki')
  const [categories, setCategories] = useState([])

  const addCategory = () => {
    setCategories(list=> [...list, category])
    setCategory('')
  }

  const setCategoria = (event) => {
    setCategory(event.target.value)
  }

  return (
    <div>
        <h1> Temas Favs del momento</h1>
      <input type="text" value={category} 
      onChange={(event)=> setCategoria(event)} />
      <button onClick={()=> addCategory()}>Add Temardo</button>
      <ol>
        {categories.map(
            (category, key) =>
            { 
                return <li key={key}>{category}</li>
            }
        )}
      </ol>
    </div>
  )
}

export default ComponentApp