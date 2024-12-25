import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/auth';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
};

export const registerUser = async (userDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userDetails);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};

export const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/refresh-token`, { refreshToken });
        return response.data.accessToken; // Return the new access token
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Token refresh failed');
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_BASE_URL}/logout`);
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Logout failed');
    }
};
