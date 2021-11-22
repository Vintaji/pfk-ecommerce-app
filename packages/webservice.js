const axios = require('axios');

module.exports = {
    balance: async() => {
        try {
            const response = await axios.get('https://api.ricardosantana.xyz:3001/balance');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    order: async() => {
        try {
<<<<<<< HEAD
            const response = await axios.post('http://localhost:3001/order');
=======
            const response = await axios.post('https://api.ricardosantana.xyz:3001/register');
>>>>>>> adc37b4af4c2b2aa6ed376ee65957638e8be3ea7
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    orders: async() => {
        try {
<<<<<<< HEAD
            const response = await axios.get('http://localhost:3001/orders');
            return response.order;
=======
            const response = await axios.get('https://api.ricardosantana.xyz:3001/login');
            return response.data;
>>>>>>> adc37b4af4c2b2aa6ed376ee65957638e8be3ea7
        } catch(err) {
            console.log(err);
            return null;
        }
    }
};
