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
    const displayDaily = daily.map((x, index) =>
        <li key={index}>{new Date(x.Date).toLocaleDateString()} --<strong>{x.Cases}</strong></li>);

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
            <div id="daily" className={styles.daily}>
                {displayDaily}
               <a href="#nav"><button onClick={hideDaily} className="btn btn-info">Hide Daily cases</button></a>
            </div>
        </div>
    )

}
export default Cards;