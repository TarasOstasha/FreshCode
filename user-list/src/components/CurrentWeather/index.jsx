import { FaTemperatureLow, FaWind } from "react-icons/fa6";
import React from "react";
import styles from "./weather.module.scss";
import { useEffect, useState } from "react";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [selectedTempTunit, setTempSelectedTunit] = useState("celsius");
  const [selectedWindSpeedUnit, setWindSpeedUnit] = useState("kmh");

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      //"https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m&hourly=temperature_2m"
      //'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&temperature_unit=fahrenheit'
      //`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&temperature_unit=${selectedTempTunit}&windspeed_unit=${selectedWindSpeedUnit}`
      `https://api.open-meteo.com/v1/forecast?latitude=40.9243&longitude=-74.3021&current=temperature_2m,windspeed_10m&hourly=temperature_2m&temperature_unit=${selectedTempTunit}&windspeed_unit=${selectedWindSpeedUnit}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => console.log(err));
      return () => {
        controller.abort();
      }
  }, [selectedTempTunit, selectedWindSpeedUnit]);
  return (
    <div className={styles.weatherWrapper}>
      <div className={styles.generalSection}>
        <div className={styles.generalSectionSub}>
          <label className={styles.inputLabel}>
            <span>Wind Speed Unit: </span>
            <select
              value={selectedWindSpeedUnit}
              onChange={(e) => setWindSpeedUnit(e.target.value)}
            >
              <option value="kmh">Km/h</option>
              <option value="ms">m/s</option>
              <option value="mph">Mph</option>
              <option value="kn">Knots</option>
            </select>
          </label>
          <label className={styles.inputLabel}>
            <span>Temperature Unit: </span>
            <select
              value={selectedTempTunit}
              onChange={(e) => setTempSelectedTunit(e.target.value)}
            >
              <option value="celsius">Celcius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </select>
          </label>
        </div>
        <div className={styles.generalSectionSub}>
          <h2>Current Weather</h2>
          <div className={styles.weatherUnits}>
            <p>
              <FaTemperatureLow />
              {"  "}
              {weather && weather.current.temperature_2m}{" "}
              {weather && weather.current_units.temperature_2m}
            </p>
            <p>
              <FaWind />
              {"  "}
              {weather && weather.current.windspeed_10m}{" "}
              {weather && weather.current_units.windspeed_10m}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
