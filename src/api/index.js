import Axios from "axios";

export const fetchData = async () => {
    try {
        const { data } = await Axios.get('https://coronavirus-19-api.herokuapp.com/countries/Philippines');
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
export const fetchDailyData = async () => {
    const { data } = await Axios.get('https://api.covid19api.com/total/country/Philippines/status/confirmed');
    const Cases = data.map(x => x.Cases)
    const Date = data.map(x => x.Date);

    const neededDailyData = Date.map((date, i) =>
        ({ Date: date, Cases: Cases[i] })
    )
    return neededDailyData;
}

