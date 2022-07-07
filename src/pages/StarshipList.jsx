import { useState, useEffect } from 'react'
import { getStarshipList } from '../services/sw-api'
import { Link } from 'react-router-dom'


const StarshipList = () => {
  const [starshipsList, setStarshipsList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList ()
      setStarshipsList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return(
    <>
      <h2>Starship List</h2>
      {starshipsList.length ?
    <>
      {starshipsList.map(starship => 
        <Link key={starship.name} state={{starship}} to='/starships'>
          {starship.name}
        </Link>
    
      )}
    </>
    :
    <>
    <h2>No Starships</h2>
    </>
      }
  </>
  )
}

export default StarshipList