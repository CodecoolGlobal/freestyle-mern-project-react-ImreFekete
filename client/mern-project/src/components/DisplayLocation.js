import React from 'react';
import { useEffect, useState } from 'react';
import portalrick from '../portal-rick-and-morty.gif';

function DisplayLocation({ location }) {
  const [locationData, setLocationData] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(location.url);
      const data = await res.json();
      setLocationData(data);
      const promises = data.residents.map(async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      })
      Promise.all(promises).then((results) => setCharacters(results));
    }
    getData();
  }, [location.url])

  const searchBarElement = document.getElementById('searchBar');
  searchBarElement.style.display = "none";

  return (
    (locationData && characters) ?
      <div className="locationList">
        <div style={{ backgroundColor: "black" }}>
          <h2>Location: {locationData.name}</h2>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <h2>Dimension: {locationData.dimension}</h2>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <h2>Characters:</h2>
          {characters.map((char) => {
            return <h3 key={char.id}>{char.name}</h3>
          })}
        </div>
      </div>
      :
      <div className="loadingContainer">
        <img className='loading' alt='loading' src={portalrick}></img>
      </div>
  )
}
export default DisplayLocation;