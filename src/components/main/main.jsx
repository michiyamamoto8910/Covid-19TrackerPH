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

    const displayDailyDeaths = daily.map((x, index) =>{
        let computed = Math.abs(deathHolder - x.Deaths)
        deathHolder = x.Deaths;
        return(
        <li key={index} className={styles.death}><strong>{x.Deaths}</strong><span> (+{computed})</span></li>);
    })

    const displayDailyRecovered = daily.map((x, index) => {
        let computed = Math.abs(recoveredHolder - x.Recovered)
        recoveredHolder = x.Recovered;
        return(
        <li key={index} className={styles.recovered}><strong>{x.Recovered}</strong><span> (+{computed})</span></li>);
    })


    function showDaily() {
        const x = document.getElementById("daily")
        x.style.display = "block"
        const btn = document.getElementById("button")
        btn.style.display = "none"
    }

    function hideDaily() {
        const x = document.getElementById("daily")
        x.style.display = "none"
        const btn = document.getElementById("button")
        btn.style.display = "block"
        
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