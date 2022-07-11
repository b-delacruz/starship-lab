import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetails } from "../services/sw-api";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap'

const StarshipDetails = () => {
  const [starshipDetails, setStartshipDetails] = useState ({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getDetails(location.state.starship.url)
      setStartshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div className="App-header">
        <nav>Starship Details</nav>
      </div>
      {starshipDetails.name ?
        <Card style={{display: 'flex', justifyContent: 'center'}}>
         <div className='starship-display'>
          <Card.Body>
            <h2>NAME: {starshipDetails.name}</h2>
            <h2>MODEL: {starshipDetails.model}</h2>
            <Link 
            to='/'
            className="starship-link2"
            >Return
            </Link>
          </Card.Body>
        </div>
       </Card>
    :
    <>
      <h2>LOADING</h2>
    </>
    }
  </> 
  )
}

export default StarshipDetails
