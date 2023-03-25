import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useTrips = () => {

    const [isTripsEmpty , setIsTripsEmpty] = useState(true)
    const [requestData, setRequestData] = useState([]);
    let encodedToken = localStorage.getItem("userToken");
  
    async function getRequest() {
      axios
        .get(`http://localhost:3000/v1/trips/viewtravelertrips`, {
          headers: { Authorization: `Bearer ${encodedToken}` },
        })
        .then((response) => {
          if (response.data.trips) {
            console.log("ay 7aga", response.data.trips);
            setRequestData(response.data.trips);
            setIsTripsEmpty(false)
          } else {
            console.log("no Trips");
            setIsTripsEmpty(true)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    async function handleDelete(id) {
      await axios.delete(`http://localhost:3000/v1/trips/delete/${id}`, {
        headers: { Authorization: `Bearer ${encodedToken}` },
      })
      .then(
        ()=>{
          setRequestData((data) => data.filter((req) => req.id !== id))
      getRequest();
        }
      )
  
    }
  
    useEffect(() => {
      getRequest();
    }, [requestData]);







    return {
        isTripsEmpty,
        requestData,
        handleDelete,
        
    }
  
}

export default useTrips
