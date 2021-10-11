const axios = require('axios');

module.exports = {
    balance: async() => {
        try {
            const response = await axios.get('http://localhost:3001/balance');
            return response.data
        } catch(err) {
            console.log(err);
            return null;
        }
    }
}