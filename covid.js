import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {
    const [data, setData] = useState(null);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const jsonData = await res.json();
            setData(jsonData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section>
                <h1>🔴LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>
                <ul>
                    <li className="card total-recovered">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> RECOVERED</p>
                                <p className="card_total card_small">{data && data.recovered}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card total-confirmed">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                                <p className="card_total card_small">{data && data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card total-deaths">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> DEATHS</p>
                                <p className="card_total card_small">{data && data.deaths}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card total-active">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                                <p className="card_total card_small">{data && data.active}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card last-update">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>LAST</span> UPDATE</p>
                                <p className="card_total card_small">{data && data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                    <li className="card our-country">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>OUR</span> COUNTRY</p>
                                <p className="card_total card_small">INDIA</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid;
