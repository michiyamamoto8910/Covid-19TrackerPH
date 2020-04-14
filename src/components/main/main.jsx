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
        </div>
    )


}

export default Cards;