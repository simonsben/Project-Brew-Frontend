const { get } = require('axios');

const get_beers = () => get('data/beers.json')
    .then(({data}) => data)
    .catch(e => console.error(e))


module.exports = {
    get_beers
};