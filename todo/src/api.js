// src/api.js
import axios from 'axios';

const API_URL = 'https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do';

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
