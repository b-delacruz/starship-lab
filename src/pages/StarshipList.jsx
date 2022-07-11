import { useState, useEffect } from 'react'
import { getStarshipList } from '../services/sw-api'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


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
      <div className="App-header">
        <nav>Starship List</nav>
      </div>
        {starshipsList.length ?
          <div className='starship-container'>
            <Card>
          {starshipsList.map(starship => 
            <div className='starship-card'>
              <Card.Body>
                <Link key={starship.name} state={{starship}} to='/starships'>
                  {starship.name}
                </Link>
            </Card.Body>
          </div>
          )}
          </Card>
        </div>
    :
    <>
    <h2>No Starships</h2>
    </>
      }
  </>
  )
}

export default StarshipList