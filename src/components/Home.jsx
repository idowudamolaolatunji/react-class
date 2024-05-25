import React, { useState, useEffect } from 'react';

function Home() {
    // const [number, setNumber] = useState(0);
    const [country, setCountry] = useState(null);
    const [countryInput, setCountryInput] = useState('')

    async function handleFetchCountry() {
        if(!countryInput) return;

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
        const data = await response.json();
        setCountry(data[0]);
        console.log(data[0])
    }

    function formatNum (amount) {
        return Number(amount).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    return (
        <>
            <main className="countries-container">
                {country && (
                    <article className="country">
                        <img className="country__img" src={country.flags.png} />
                        <div className="country__data">
                            <h3 className="country__name">{country.name.common}</h3>
                            <h4 className="country__region">{country.region}</h4>
                            <p className="country__row"><span>👫</span>{formatNum(country.population)} people</p>
                            <p className="country__row"><span>🗣</span>LANG</p>
                            <p className="country__row"><span>💰</span>CUR</p>
                        </div>
                    </article>
                )}
            </main>
.
            {!country && (
                <div className="input-container">
                    {/* controlled input */}
                    <input type="text" className='input-country' placeholder='Enter a country' value={countryInput} onChange={(e) => setCountryInput(e.target.value)}  />
                    <button onClick={handleFetchCountry} className='btn-country'>Fetch Country</button>
                </div>
            )}
        </>

    )
}

export default Home;
