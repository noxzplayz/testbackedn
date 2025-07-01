import axios from 'axios';

const API_URL = 'http://localhost:5000/api/messages';

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(API_URL, message);
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchMessages = async (receiverId) => {
    try {
        const response = await axios.get(`${API_URL}?receiverId=${receiverId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};