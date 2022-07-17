import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import countryData from './../countries.json';

const CountryDetails = () => {
  const [foundCountry, setFoundCountry] = useState(null);

  const { countryId } = useParams();

  useEffect(() => {
    const country = countryData.find((countryObj) => {
      return countryObj.alpha3Code === countryId;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [countryId]);

  return (
    <div className="col-7">
      {foundCountry ? (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
          />
          <h1>{foundCountry.name.official}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((border) => {
                      return (
                        <li>
                          <Link to={`/${border}`}>{border}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        'Hola'
      )}
    </div>
  );
};

export default CountryDetails;
