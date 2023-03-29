import React, {useState} from "react";
import axios from "axios";

function Countries() {
    const [countries, setCountries] = useState([])
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={db56c4228faf248886889440bfc81448\n}")
            .then(res => {
                console.log(res);
                setCountries((res.data));
            });

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;

        console.log('Ваше текущее местоположение:');
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
        <table>
            <thead><tr><th>Name</th><th>Weather</th></tr></thead>
            <tbody>
                {countries.map(weather => <tr>
                    <td>{weather.name}</td>
                    <td>{weather.weather}</td>
                </tr>)}
            </tbody>
        </table>

    );
}

export default Countries;