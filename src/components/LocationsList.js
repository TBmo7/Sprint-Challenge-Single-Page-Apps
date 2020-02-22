import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"

export default function LocationsList(props) {

    const [locations, setLocations] = useState([]);
    useEffect(()=>{
        const getLocations = () => {
            axios.get(`https://rickandmortyapi.com/api/location`)
            .then(response=>{
                console.log("Response location data", response);
                //setLocations(response)
            })
            .catch(error=>console.log("location error", error));
        }
        getLocations();
    },[]);

    return(
        <div>
            Location list
        </div>
    )

}
