import React, { useState } from "react";

export default function App() {

  const [data, setdata] = useState([]);
  const [country, setcountry] = useState('');

  const apiurl = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

  const handle = async () => {
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      console.log(data); 
      // console.log(data.coatOfArms.png)
      setdata(data);

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <>
         <div className="flex justify-center my-6">
        <input className="bg-gray-300 rounded-md border-solid border-2 border-gray-500 px-2" type="text"  placeholder="Enter country name " value={country} 
        onChange={(e)=>setcountry(e.target.value)} />
        <button className="bg-blue-200 rounded-md border-solid border-2 border-gray-500 items-center text-sm" onClick={handle}>show data</button>
      </div>

      {data.map((items) =>
        <div className="flex justify-center flex-col items-center text-red-700 bg-gray-400 my-10" key={items.capital}>
          <h1 className="bg-slate-500">capital= {items.capital}</h1>
          <h1 className="bg-slate-500"> {items.altSpellings.join(' ')}</h1>
          <img className="h-20 w-20 bg-slate-500" src={items.coatOfArms.svg} />
          {/* <h1>{items.coatOfArms}</h1> */}
          <h1 className="bg-slate-500"> {items.continents} </h1>
          <h1 className="bg-slate-500">{items.currencies.name} {items.currencies.symbol}</h1>
          <h1 className="bg-pink-200 text-lg">{items.name.common}</h1>
          <h1 className="bg-slate-500">
            Languages: <br />
            {Object.entries(items.languages).map(([key, value]) => (
              <span key={key}>
                {value}
                <br />
              </span>
            ))}
          </h1>
          <img className="h-20 w-20" src={items.flags.svg} />
          <a href={items.maps.googleMaps}>show map</a>

        </div>
      )}

    
    </>
  )
}