import React, { useState } from 'react';
import axios from 'axios';

const HotelRegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        price: 0,
        roomsAvailable: 0,
        rating: 0,
        stars: 1,
        amenities: [],
        description: '',
        images: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, images: e.target.files }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            if (Array.isArray(formData[key])) {
                formData[key].forEach((item: any) => form.append(key, item));
            } else {
                form.append(key, formData[key]);
            }
        }
        try {
            await axios.post('/api/hotels/register', form, { headers: { 'Content-Type': 'multipart/form-data' } });
            alert('Hotel registered successfully!');
        } catch (error) {
            alert('Error registering hotel');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
            <input type="number" name="roomsAvailable" value={formData.roomsAvailable} onChange={handleChange} placeholder="Rooms Available" required />
            <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" required />
            <input type="number" name="stars" value={formData.stars} onChange={handleChange} placeholder="Stars" required />
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
            <input type="text" name="amenities" value={formData.amenities.join(', ')} onChange={(e) => handleChange({ target: { name: 'amenities', value: e.target.value.split(', ') } })} placeholder="Amenities (comma separated)" />
            <input type="file" name="images" multiple onChange={handleFileChange} />
            <button type="submit">Register Hotel</button>
        </form>
    );
};

export default HotelRegistrationForm;
