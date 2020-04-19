import Axios from "axios";


const url = 'https://coronavirus-19-api.herokuapp.com/countries/Philippines';
const dailyConfirmedUrl = 'https://api.covid19api.com/total/country/Philippines/status/confirmed';
const dailyDeathsUrl = 'https://api.covid19api.com/total/country/Philippines/status/deaths';
const dailyRecoveredUrl = 'https://api.covid19api.com/total/country/Philippines/status/recovered';

export const fetchData = async () => {
    try {
        const { data } = await Axios.get(url);
        const { cases, todayCases, deaths, recovered, active, totalTests } = data;
        const neededData = {
            cases,
            todayCases,
            deaths,
            recovered,
            active,
            totalTests
        }
        return neededData;
    } catch (error) {
        console.log(error)
    }
}

const fetchDailyConfirmedData = async () => {
    const { data } = await Axios.get(dailyConfirmedUrl);
    const Cases = data.map(x => x.Cases)
    const Date = data.map(x => x.Date);

    const neededDailyData = await Date.map((date, index) =>
        ({ Date: date, Cases: Cases[index] })
    )
    return neededDailyData;
}

const fetchDailyDeathsData = async () => {
    try {
        const { data } = await Axios.get(dailyDeathsUrl)
        const neededDailyData = data.map(x => x.Cases)
        return neededDailyData;
    } catch (error) {
        console.log(error)
    }

}

const fetchDailyRecoveredData = async () => {
    try {
        const { data } = await Axios.get(dailyRecoveredUrl)
        const neededDailyData = data.map(x => x.Cases)
        return neededDailyData;
    } catch (error) {
        console.log(error)
    }

}

export const MergeData = async () => {
    try {
        const confirmed = await fetchDailyConfirmedData();
        const deaths = await fetchDailyDeathsData();
        const recovered = await fetchDailyRecoveredData();

        const neededDailyData = confirmed.map((x, index) => (
            { Confirmed: x, Deaths: deaths[index], Recovered: recovered[index], Num: 0 }
        ))
        return neededDailyData;

    } catch (error) {
        console.log(error)
    }


}

