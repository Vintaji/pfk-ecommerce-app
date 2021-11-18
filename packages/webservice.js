const axios = require('axios');

module.exports = {
    balance: async() => {
        try {
            const response = await axios.get('http://localhost:3001/balance');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    order: async() => {
        try {
            const response = await axios.post('http://localhost:3001/order');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    orders: async() => {
        try {
            const response = await axios.get('http://localhost:3001/orders');
            return response.order;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
};