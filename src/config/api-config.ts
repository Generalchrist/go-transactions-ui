import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        const isAuthenticated = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (isAuthenticated) {
            config.headers['Authorization'] = `Bearer ${JSON.parse(isAuthenticated).token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Unauthorized, clear storage and redirect to login
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error.response.data ||error.message);
    }
);

export default instance;