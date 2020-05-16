import React, { useState } from 'react';
import CountUp from 'react-countup';
import styles from './main.module.css';

const Cards = ({ data: { cases, todayCases, deaths, recovered, active, totalTests } }) => {

    return (
        cases ?
            <div>
                <div className={styles.cards}>
                    <p className={styles.mainCard}>
                        <br />
                        <span>Total number of cases:</span><br /><br />
                        <span ><CountUp start={0} end={cases} duration={2.5} separator="," /></span><br /><br />
                        <span> Cases today:</span><br /><br />
                        <span><CountUp start={0} end={todayCases} duration={2.5} separator="," /></span><br /><br />
                        <span>Total tests:</span><br /><br />
                        <span><CountUp start={0} end={totalTests} duration={2.5} separator="," /></span><br /><br />
                    </p>
                    <p className={styles.subCard}>
                        <br />
                        <span className={styles.death} id="total">Deaths:</span><br /><br />
                        <span><CountUp start={0} end={deaths} duration={2.5} separator="," /></span><br /><br />
                        <span className={styles.recovered} id="total">Recovered:</span><br /><br />
                        <span><CountUp start={0} end={recovered} duration={2.5} separator="," /></span><br /><br />
                        <span>Active cases:</span><br /><br />
                        <span><CountUp start={0} end={active} duration={2.5} separator="," /></span><br /><br />
                    </p>
                </div>
                <div className={styles.daily}>
                </div>
            </div>
            :
            '...Loading'
    )
}

export const Daily = ({ daily }) => {
    const [visibility, setVisibility] = useState(false);

    let computed = 0
    let holder = 0
    let deathHolder = 0
    let recoveredHolder = 0
    const displayDailyDate = daily.map((x, index) =>
        <li key={index}>{new Date(x.Confirmed.Date).toLocaleDateString()}</li>);

    const displayDailyConfirmed = daily.map((x, index) => {
     computed = Math.abs(holder - x.Confirmed.Cases)
     holder = x.Confirmed.Cases;
        return (
            <li key={index}><strong>{x.Confirmed.Cases}</strong><span> (+{computed})</span></li>)
    })

    const displayDailyDeaths = daily.map((x, index) => {
        let computed = Math.abs(deathHolder - x.Deaths)
        deathHolder = x.Deaths;
        return (
            <li key={index} className={styles.death}><strong>{x.Deaths}</strong><span> (+{computed})</span></li>);
    })

    const displayDailyRecovered = daily.map((x, index) => {
        let computed = Math.abs(recoveredHolder - x.Recovered)
        recoveredHolder = x.Recovered;
        return (
            <li key={index} className={styles.recovered}><strong>{x.Recovered}</strong><span> (+{computed})</span></li>);
    })


    function showDaily() {
        const btn = document.getElementById("button")
        const x = document.getElementById("daily")
        x.style.display = "block"
        btn.style.display = "none"
    }

    function hideDaily() {
        const btn = document.getElementById("button")
        const x = document.getElementById("daily")
        x.style.display = "none"
        btn.style.display = "block"

    }
    setTimeout(() => {
        setVisibility(true)
    }, 2000)


    return (
        visibility?
        <div className={styles.dailylogs}>
            <button id="button" className="btn btn-info" onClick={showDaily}>Show Daily cases</button>
            <div className={styles.dailyContainer} id="daily">
                <button onClick={hideDaily} className="btn btn-info" id="hidebutton">Hide Daily cases</button>

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
                <a href="#nav"><button onClick={hideDaily} className="btn btn-info" id="hidebutton">Hide Daily cases</button></a>

            </div>
        </div>:
        <React.Fragment/>
    )

}


export default Cards;