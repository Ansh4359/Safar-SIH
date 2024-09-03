// components/WeatherDisplay.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { fetchWeather, WeatherData } from '@/utils/fetchWeather';

interface WeatherDisplayProps {
    latitude: number;
    longitude: number;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ latitude, longitude }) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const data = await fetchWeather(latitude, longitude);
                setWeather(data);
            } catch (error) {
                setError('Failed to fetch weather data');
                console.error(error);
            }
        };
        getWeather();
    }, [latitude, longitude]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!weather) return <p className="text-gray-500">Loading weather...</p>;

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Weather in {weather.location.name}</h3>
            <div className="flex items-center mb-2">
                <img src={`https:${weather.current.condition.icon}`} alt={weather.current.condition.text} className="w-12 h-12 mr-2" />
                <p className="text-3xl font-bold">{weather.current.temp_c}°C</p>
            </div>
            <p className="text-gray-600">Condition: {weather.current.condition.text}</p>
            <p className="text-gray-600">Humidity: {weather.current.humidity}%</p>
            <p className="text-gray-600">Wind: {weather.current.wind_kph} km/h</p>
        </div>
    );
};

export default WeatherDisplay;
