import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDetails } from "../services/sw-api";
import { Link } from "react-router-dom";

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
      <h2>Starship Details</h2>
        {starshipDetails.name ?
      <>
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <Link to='/'>Return</Link>
      </>
    :
    <>
      <h2>LOADING</h2>
    </>
    }
  </> 
  )
}

export default StarshipDetails
