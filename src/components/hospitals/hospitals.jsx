import React from 'react';
import styles from './hospitals.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import warning from '../../images/warning.png';



export const hospitals = () => {
    return (
        <div>
            <div  id="hospital">
                <header><h1 className="display-4">Hospitals that accepts covid patient and PUIs</h1></header>
            </div>
            <div>
                <img src={warning} alt="covid19warning" />
                <strong>Hospital's availability may have changed by the time of your viewing</strong>
            </div>
            <br />
            <div className={styles.container}>
                <div>
                    <p>Mandaluyong</p>
                    <ul>
                        <li><a href="https://www.vrp.com.ph/">VRP</a></li>
                    </ul>
                </div>
                <div>
                    <p> Pasay</p>
                    <ul>
                        <li><a href="https://www.sanjuandedios.org/">San Juan De Dios</a></li>
                    </ul>
                </div>
                <div>
                    <p> San Juan</p>
                    <ul>
                        <li><a href="https://cardinalsantos.com.ph/">Cardinal Santos Medical Center</a></li>
                    </ul>
                </div>
                <div>
                    <p> Quezon City</p>
                    <ul>
                        <li><a href="http://www.pasigdoctors.ph/">Pasig Doctors Medical Center</a></li>
                        <li><a href="https://www.practo.com/quezon-city/hospital/united-doctors-medical-center-quezon-city">United Doctors Medical Center</a></li>
                        <li><a href="http://www.worldcitimedicalcenter.com/">World Citi Medical Center</a></li>
                        <li><a href="https://eamc.doh.gov.ph/">East Avenue Medical Center</a></li>
                        <li><a href="http://qmmc.doh.gov.ph/index.php?option=com_content&view=article&id=112&Itemid=96">Quirino Medical Center</a></li>
                        <li><a href="https://lcp.gov.ph/">Lung center</a></li>
                    </ul>
                </div>
                <div>
                    <p> Taguig</p>
                    <ul>
                        <li><a href="https://getwellhealthsystemsinc.com.ph/the-cruz-rabe/">Cruz-Rabe Hospital</a></li>
                        <li><a href="http://www.phap-ph.org/Members/view/medical_center_taguig">Medical Center</a></li>
                    </ul>
                </div>
                <div>
                    <p> Manila</p>
                    <ul>
                        <li><a href="https://alabangmedicalcenter.webs.com/">Alabang Medical Center</a></li>
                        <li><a href="https://phmc.com.ph/">University of Perpetual Help Dalta Medical Center</a></li>
                        <li><a href="http://www.jrrmmc.gov.ph/">Jose R. Reyes Memorial Medical Center</a></li>
                        <li><a href="http://slh.doh.gov.ph/transparency/about-san-lazaro-hospital"> San Lazaro Hospital</a></li>
                        <li><a href="http://www.pgh.gov.ph/en/">Philippine General Hospital</a></li>
                        <li><a href="http://ritm.gov.ph/">Research Institute for Tropical Medicine</a></li>

                    </ul>
                </div>
                <div>
                    <p> Las Pinas</p>
                    <ul>
                        <li><a href="http://lpghstc.doh.gov.ph/">Las Pinas General Hospital</a></li>
                    </ul>
                </div>
                <div>
                    <p> Malabon</p>
                    <ul>
                        <li><a href="http://www.slrwh.doh.gov.ph/">San Lorenzo Ruiz General Hospital</a></li>
                        <li><a href="http://vmc.doh.gov.ph/">Valenzuela Medical Center</a></li>
                        <li><a href="http://djnrmh.doh.gov.ph/"> Dr. Jose M. Rodriguez Memorial Hospital</a></li>
                    </ul>
                </div>
                <div>
                    <p> Marikina</p>
                    <ul>
                        <li><a href="http://armmc.doh.gov.ph/">Amang Rodriguez Memorial Medical Center</a></li>
                    </ul>
                </div>
                <div>
                    <p> Pasig</p>
                    <ul>
                        <li><a href="http://www.rmc.doh.gov.ph/">Rizal Medical Center</a></li>
                    </ul>
                </div>

                <section className={styles.section}>
                    <p>Full Capacity</p>
                    <ul>
                        <li><a href="https://www.makatimed.net.ph/">Makati Medical City</a></li>
                        <li><a href="https://www.themedicalcity.com/">The Medical City</a></li>
                        <li><a href="https://www.stlukes.com.ph/">St. Luke’s Medical Center</a></li>
                        <li><a href="https://www.cghc.edu.ph/">Chinese General Hospital</a></li>
                        <li><a href="https://www.asianhospital.com/">The Asian Hospital and Medical Center</a></li>
                        <li><a href="https://delossantosmed.ph/"> Delos Santos Medical Center</a></li>
                    </ul>

                </section>
            </div>
            <div id="donate"></div>

        </div>

    )
}

export default hospitals