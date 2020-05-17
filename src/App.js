import React, { useRef } from 'react'
import { fetchData, MergeData } from './api';
import Cards from './components/main/main';
import { Daily } from './components/main/main';

import Emergency from './components/emergency/emergency';
import Hospitals from './components/hospitals/hospitals';
import Donate from './components/donate/donate';
import Footer from './components/footer/footer';
import sun from './images/sun.png'
import moon from './images/moon.png'

import styles from './App.css';
let changeClass =''
class App extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        data: {

        },
        mergedData: [],
        typeOfStar: moon,
        class: ''
    }

    this.handleChange = this.handleChange.bind(this);
}

    async componentDidMount() {
        const theme = localStorage.getItem('theme')
        const text = document.getElementById('toggleTheme');

        if (theme) {
            const el = document.getElementById('dark');
            const checkbox = document.getElementById('myCheck');
            text.textContent = "Light mode";
            el.classList.add('dark')
            checkbox.checked = true;
            this.setState({
                typeOfStar: sun
            })
        }
        const data = await fetchData();
        const mergedData = await MergeData();
        this.setState({
            data,
            mergedData,
        })
    }
 
    handleChange() {
        const checkbox = document.getElementById('myCheck');
        const text = document.getElementById('toggleTheme');
        const el = document.getElementById('dark');

        if (checkbox.checked == true) {
            this.setState({
                typeOfStar: sun,
                class: 'sun'
            })
            text.textContent = "Light mode"
            el.classList.add('dark');
            localStorage.setItem('theme', 'dark');


        } else {
            this.setState({
                typeOfStar: moon,
                class: 'moon'
            })
            text.textContent = "Night mode"
            el.classList.remove('dark');
            localStorage.clear()

        }
    }



render() {
    return (
        <div id="nav">
            <nav>
                <main>
                    <ul>
                        <li><a href="#nav">Home</a></li>
                        <li><a href="#emergency">Emergency</a></li>
                        <li><a href="#hospital">Hospitals</a></li>
                        <li><a href="#donate">Donate</a></li>
                        <li id="global"><a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">Global</a></li>
                    </ul>
                </main>
            </nav>
    
            <div className="toggle">
                <img src={this.state.typeOfStar} alt="moon" id="star" className={this.state.class} 
                onAnimationEnd={() => {
                    this.setState({
                        class: ''
                    })
                }}/>
                <input type="checkbox" class="hide" id="myCheck" 
                    onChange={this.handleChange} />​<label for="myCheck" id="toggleTheme">Night mode</label>
            </div>
            <div>

            </div>
            <Cards data={this.state.data} />
            <Daily daily={this.state.mergedData} />
            <Emergency />
            <Hospitals />
            <Donate />
            <Footer />

        </div>

    )
}
}
export default App;