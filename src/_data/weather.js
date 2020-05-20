const axios = require('axios');
const countries = require("./countries.json");

require("dotenv").config();


// http://api.weatherapi.com/v1/current.json?key=23a86d8c48d04dbe89c90620202005&q=Thailand



module.exports = async function () {

    try {
        const countryAPI = await axios.get(`https://restcountries.eu/rest/v2/alpha/${country}`);
        const countryName = countryAPI.name;
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${countryName}`)
        return response.data.location.name;
    } catch (error) {
        console.error(error);
    }

};