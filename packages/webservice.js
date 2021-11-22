const axios = require('axios');

module.exports = {
    balance: async() => {
        try {
            const response = await axios.get('http://https://api.ricardosantana.xyz:3001/balance');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    register: async() => {
        try {
            const response = await axios.post('http://https://api.ricardosantana.xyz:3001/register');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    login: async() => {
        try {
            const response = await axios.get('http://https://api.ricardosantana.xyz:3001/login');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
};
