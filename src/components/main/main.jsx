import React from 'react';
import CountUp from 'react-countup';
import styles from './main.module.css';

const Cards = ({ data: { cases, todayCases, deaths, recovered, active, totalTests } }) => {

    if (!cases) {
        return 'Loading...';
    }
    return (
        <div>
            <div className={styles.cards}>
                <p className={styles.mainCard}>
                    <br />
                    <span>Total number of cases:</span><br /><br />
                    <span><CountUp start={0} end={cases} duration={2.5} separator="," /></span><br /><br />
                    <span>Cases today:</span><br /><br />
                    <span><CountUp start={0} end={todayCases} duration={2.5} separator="," /></span><br /><br />
                    <span >Total tests:</span><br /><br />
                    <span><CountUp start={0} end={totalTests} duration={2.5} separator="," /></span><br /><br />
                </p>
                <p className={styles.subCard}>
                    <br />
                    <span className={styles.death}>Deaths:</span><br /><br />
                    <span><CountUp start={0} end={deaths} duration={2.5} separator="," /></span><br /><br />
                    <span className={styles.recovered}>Recovered:</span><br /><br />
                    <span><CountUp start={0} end={recovered} duration={2.5} separator="," /></span><br /><br />
                    <span>Active cases:</span><br /><br />
                    <span><CountUp start={0} end={active} duration={2.5} separator="," /></span><br /><br />
                </p>
            </div>
            <div className={styles.daily}>
            </div>
        </div>
    )


}

export const Daily = ({ daily }) => {
    const displayDailyDate = daily.map((x, index) =>

        <li key={index}>{new Date(x.Confirmed.Date).toLocaleDateString()}</li>);

    const displayDailyConfirmed = daily.map((x, index) =>
        <li key={index}><strong>{x.Confirmed.Cases}</strong></li>);

    const displayDailyDeaths = daily.map((x, index) =>
        <li key={index} className={styles.death}><strong>{x.Deaths}</strong></li>);

    const displayDailyRecovered = daily.map((x, index) =>
        <li key={index} className={styles.recovered}><strong>{x.Recovered}</strong></li>);


    function showDaily() {
        const x = document.getElementById("daily")
        x.style.display = "block"
    }

    function hideDaily() {
        const x = document.getElementById("daily")
        x.style.display = "none"
    }
    return (
        <div className={styles.dailylogs}>
            <button id="button" className="btn-info" onClick={showDaily}>Show Daily cases</button>
            <div className={styles.dailyContainer} id="daily">
                <div className={styles.daily}>
                    <div>
                        <h1>Date</h1>
                        {displayDailyDate}
                    </div>
                    <div>
                        <h1>Cases</h1>
                        {displayDailyConfirmed}
                    </div>
                    <div>
                        <h1>Deaths</h1>
                        {displayDailyDeaths}
                    </div>
                    <div>
                        <h1>Recovered</h1>
                        {displayDailyRecovered}
                    </div>
                </div>
                <a href="#nav"><button onClick={hideDaily} className="btn btn-info">Hide Daily cases</button></a>

            </div>
        </div>
    )

}
export default Cards;