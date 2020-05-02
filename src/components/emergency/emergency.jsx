import React from 'react'
import styles from './emergency.module.css';
import doh from '../../images/doh.PNG';
import redcross from '../../images/redcross.jpg';
import flag from '../../images/flag.png';

export const Emergency = () => {
    return (
        <div id="emergency" className={styles.emergency}>
            <div>
                <header><h1 className="display-4">EMERGENCY HOTLINES</h1></header>
            </div>
            <div className={styles.container}>
                <div className={styles.emergencySection}>
                    <div>
                        <a href="https://www.doh.gov.ph/" target="_blank" rel="noopener noreferrer"><img src={doh} alt="covid19dohlogo" /></a><br />
                        <p>DOH emergency Hotline for COVID: <strong>(02-894-26843)</strong></p>
                    </div>
                    <div>
                        <a href="https://redcross.org.ph/" target="_blank" rel="noopener noreferrer"><img src={redcross} alt="covid19redcross" /></a><br />
                        <p>Philippine Red Cross: <strong>143 or (02) 527-8385 to 95</strong></p>
                    </div>
                    <div>
                        <img src={flag} id={styles.empty} alt="covid19flag" /><br />
                        <p>National Emergency Hotline: <strong>911</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Emergency;
