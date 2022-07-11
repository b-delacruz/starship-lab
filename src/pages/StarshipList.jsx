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
            <Card style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          {starshipsList.map(starship => 
            <div className='starship-card'>
              <Card.Body>
                <Link 
                key={starship.name} 
                state={{starship}} 
                to='/starships'
                className="starship-link"
                >
                  {starship.name}
                </Link>
            </Card.Body>
          </div>
          )}
          </Card>
    :
    <>
    <h2>No Starships</h2>
    </>
      }
  </>
  )
}

export default StarshipList