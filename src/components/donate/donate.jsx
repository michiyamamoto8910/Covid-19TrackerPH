import React from 'react';
import styles from './donate.module.css';
import caritas from '../../images/caritas.jpg';
import globalgiving from '../../images/globalgiving.jpg';
import up from '../../images/up.png';
import unicef from '../../images/unicef.png';


export const Donate = () => {
    return (
        <aside>
            
            <div>
            <div >
            <header><h1 className="display-4">DONATE</h1></header>
            </div>
                <div className={styles.caritas}>
                    <a href="https://give2asia.org/caritasmanila/"><img src={caritas} alt="caritascovid19"/></a>
                </div>
                <blockquote cite="https://caritasmanila.org.ph/about-us/">"CARITAS MANILA is a non-profit organization that serves as the lead social service and development ministry of
                the Catholic Church in the Philippines. With over 60 years of experience, its core competencies are geared
                towards total human development and poverty alleviation and
                advocates creating a Christian community with a strong social conscience"</blockquote>
            </div>

            <div>
                <div className={styles.globalgiving}>
                    <a href="https://www.globalgiving.org/projects/covid-19-relief-response/"> <img src={globalgiving} atl="globalgivingcovid19" />
                    </a>
                </div>
                <blockquote cite="https://www.globalgiving.org/">"GlobalGiving connects nonprofits, donors, and companies in nearly every country around the world. We help local 
                nonprofits access the funding, tools, training, and support they need to become more effective."</blockquote>

            </div>
            <div>
                <div className={styles.up}>
                    <a href="https://www.up.edu.ph/tag/call-for-donations/"><img src={up} atl="upcovid19"/></a>
                </div>
                <blockquote cite="https://en.wikipedia.org/wiki/University_of_the_Philippines">"The University of the Philippines is
                 a state university system in the Philippines, and is the country's national university."</blockquote>
            </div>
            <div>
                <div className={styles.unicef}>
                    <a href="https://donate.unicef.ph/campaign/covid19"><img src={unicef} alt="unicefcovid19"/></a>
                </div>
                <blockquote cite="https://caritasmanila.org.ph/about-us/">"UNICEF was established in the aftermath of World War II to provide emergency relief to
                children affected by the war, no matter what country they were from.Today, UNICEF continues to work in the world’s toughest places to reach the most disadvantaged children and adolescents—and to protect the rights of every child, everywhere. Across 190 countries and territories, including the Philippines, we do whatever it takes to help children 
                survive, thrive and fulfill their potential, from early childhood through adolescence."</blockquote>
            </div>
        </aside>
    )
}
export default Donate