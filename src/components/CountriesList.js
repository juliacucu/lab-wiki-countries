import React, { useState, useEffect } from 'react';
import CountryDetails from './CountryDetails'

import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((country) => {
            return (
            //   <div className="list-group" key={country.alpha3Code}>
                <Link
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                  key={country.alpha3Code}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  />
                  <br></br>
                  {country.name.official}
                </Link>
            //   </div>
            );
          })}
        </div>
        <CountryDetails />
      </div>
    </div>
  );
};

export default CountriesList;
