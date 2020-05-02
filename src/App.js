import React from 'react'
import { fetchData, MergeData } from './api';
import Cards from './components/main/main';
import { Daily } from './components/main/main';

import Emergency from './components/emergency/emergency';
import Hospitals from './components/hospitals/hospitals';
import Donate from './components/donate/donate';
import Footer from './components/footer/footer';

import styles from './App.css';

class App extends React.Component {

    state = {
        data: {

        },
        mergedData: []
    }


    async componentDidMount() {
        const theme = localStorage.getItem('theme')
        if (theme) {
            const el = document.getElementById('dark');
            const checkbox = document.getElementById('customSwitches');
            el.classList.add('dark')
            checkbox.checked = true;
        }
            const data = await fetchData();
            const mergedData = await MergeData();
            this.setState({
                data,
                mergedData,
            })
    }
    handleCLick() {
        const checkbox = document.getElementById('customSwitches');
        const el = document.getElementById('dark');
        if (checkbox.checked == true) {
            el.classList.add('dark')
            localStorage.setItem('theme', 'dark')

        } else {
            el.classList.remove('dark')
            localStorage.clear()
        }
    }
    render() {
        return (
            <div className="dark" id="nav">
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
                <div class="custom-control custom-switch" id="toggle">
                    <input type="checkbox" class="custom-control-input" id="customSwitches" onClick={this.handleCLick} />
                    <label class="custom-control-label" for="customSwitches" id="darktext">Dark mode</label>

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