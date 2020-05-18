import React from 'react';
import styles from './footer.module.css';

export const footer = () => {
    return (
        <footer>
            <div className={styles.container}>

                <div>
                    <p>Images used:</p>
                    <p>https://unsplash.com/@eldon96_</p>
                    <p><a href="https://icons8.com/icon/67542/crescent-moon">Crescent Moon icon by Icons8</a></p>
                    <p>Sun icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></p>
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