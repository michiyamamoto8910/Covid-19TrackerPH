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


