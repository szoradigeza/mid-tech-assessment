import React, { useEffect } from 'react'
import { Provider } from './provider';

export default function TaskTwo() {
    useEffect(async () => {
        const city = await Provider.findCity(0.1278, 51.5074);
        console.log(city);
        const weather = await Provider.getWeather(city);
        console.log(weather);
        Provider.getLocalCurrency(city).then((currency) => {
          console.log(`${weather}. ${currency}.`)
        })
      }, []);
    return (
        <div>
            <h1>Task 1</h1>
        </div>
    )
}
