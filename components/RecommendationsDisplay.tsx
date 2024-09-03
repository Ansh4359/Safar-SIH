// components/RecommendationsDisplay.tsx
import React, { useEffect, useState } from 'react';
import { fetchRecommendations } from '@/utils/fetchRecommendations';

const RecommendationsDisplay: React.FC<{ latitude: number, longitude: number }> = ({ latitude, longitude }) => {
    const [recommendations, setRecommendations] = useState<any[]>([]);

    useEffect(() => {
        const getRecommendations = async () => {
            const data = await fetchRecommendations(latitude, longitude);
            setRecommendations(data);
        };
        getRecommendations();
    }, [latitude, longitude]);

    if (recommendations.length === 0) return <p>Loading recommendations...</p>;

    return (
        <div>
            <h3>Recommended Places</h3>
            <ul>
                {recommendations.map((place) => (
                    <li key={place.id}>{place.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationsDisplay;
