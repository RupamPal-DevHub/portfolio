"use client";

const WeatherMessage = ({ curFol, formData, weather }) => {
  return (
    <div
      key={weather.current_condition[0].temp_C}
      className="font-bold mb-2 text-sm md:text-sm lg:text-base"
    >
      <p className="text-green-400">
        rupam@terminal :&nbsp;~{curFol}&nbsp;
        <span className="text-white">$</span> &nbsp;
        <span className="text-white font-normal ">{formData}</span>
      </p>
      <p>
        Weather in Kolkata: {weather.current_condition[0].weatherDesc[0].value}
        <br />
        Temperature: {weather.current_condition[0].temp_C}°C
        <br />
        Wind Speed: {weather.current_condition[0].windspeedKmph} km/h
        <br />
        Humidity: {weather.current_condition[0].humidity}%
      </p>
    </div>
  );
};

export default WeatherMessage;
