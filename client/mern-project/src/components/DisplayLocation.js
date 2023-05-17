import React from 'react';
import { useEffect, useState } from 'react';

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
  }, [])

  return locationData && characters ? <div>
    <div style={{ backgroundColor: "white" }}><p>{locationData.name}</p></div>
    <div style={{ backgroundColor: "white" }}><p>{locationData.dimension}</p></div>
    <div style={{ backgroundColor: "white" }}> {characters.map((char) => { return <p key={char.id}>{char.name}</p> })}</div>
  </div> : <p>loading...</p>
}
export default DisplayLocation;