/* eslint-disable react/prop-types */
import { useState } from "react"
import countries from '../data/countrys.json' //Traigo los paises desde un archivo json


export default function SelectCountry({ name }) {

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <select
            className="w-2/3 my-2 px-3 py-2 text-slate-400 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              lg:w-1/2 lg:my-4"
            id="countrySelect"
            onChange={handleCountryChange}
            value={selectedCountry}

            ref={name}

        >
            <option value="" className="text-slate-400">Country</option>
            {countries.map((country, index) => (
                <option key={index} value={country.name}>
                    {country.name}
                </option>
            ))}
        </select>
    );
}