const axios = require('axios');

module.exports = {
    balance: async() => {
        try {
            const response = await axios.get('https://api.ricardosantana.xyz/balance');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    order: async() => {
        try {
            const response = await axios.post('https://api.ricardosantana.xyz/order');
            return response.data;
        } catch(err) {
            console.log(err);
            return null;
        }
    },
    orders: async() => {
        try {
            const response = await axios.get('https://api.ricardosantana.xyz/orders');
            return response.order;
        } catch(err) {
            console.log(err);
            return null;
        }
    }
};
