import React from 'react';
import styles from './footer.module.css';

export const footer = () => {
    return (
        <footer>
            <div className={styles.container}>

                <div>
                    <p>Thanks to Eldon Isidro for the picture</p>
                    <p>https://unsplash.com/@eldon96_</p>
                </div>
                <div>
                    <p>Live data from https://coronavirus-19-api.herokuapp.com/all</p>
                    <p>and https://covid19api.com/</p>
                </div>
                <div className={styles.creator}>
                    <p>This website was created by Michi</p>
                    <p>michihiroyamamoto123@gmail.com</p>
                </div>

            </div>
        </footer>
    )
}

export default footer;