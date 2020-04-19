import React from 'react'
import { fetchData, MergeData } from './api';
import Cards from './components/main/main';
import {Daily} from './components/main/main';

import Emergency from './components/emergency/emergency';
import Hospitals from './components/hospitals/hospitals';
import Donate from './components/donate/donate';
import Footer from './components/footer/footer';

import styles from './App.css';

class App extends React.Component {
    state = {
        data: {
        
        },
        mergedData:[]
    }
    async componentDidMount() {
        const data = await fetchData();
        const mergedData = await MergeData();
        this.setState({
            data,
            mergedData,
        })
    }

    render() {
        return (
            <div id="nav">
                <nav>
                    <main>
                        <ul>
                            <li><a href="#nav">Home</a></li>
                            <li><a href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">Global</a></li>
                            <li><a href="#emergency">Emergency</a></li>
                            <li><a href="#hospital">Hospitals</a></li>
                            <li><a href="#donate">Donate</a></li>
                        </ul>
                    </main>
                </nav>
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