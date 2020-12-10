const { get } = require('axios');
const moment = require('moment');
const { gunzip } = require('zlib');


const get_beers = () => {
    console.log('executing');

    const data_time = moment(localStorage.getItem('data_time'));
    const now = moment().local();

    return new Promise((resolve, reject) => {
        // If data time exists and is the same as the current day, keep data.
        if (!!data_time && now.isSame(data_time, 'day')) {
            const raw_data = localStorage.getItem('beer_data');
            console.log('Data is current, using cached.');
            
            return resolve(JSON.parse(raw_data));
        }

        console.log('Requesting fresh data.');
        get('data/beers.json.gz', {responseType: 'arraybuffer'})
            .then(({ data }) => {
                const buffer = Buffer.from(data);

                gunzip(buffer, (e, decompressed_data) => {
                    if(e) {
                        reject(e);
                    }

                    const {beers, collection_date} = JSON.parse(decompressed_data);

                    localStorage.setItem('data_time', collection_date);
                    localStorage.setItem('beer_data', JSON.stringify(beers));

                    resolve(beers)
                });
            })
            .catch(e => console.error(e));
    });
};


module.exports = {
    get_beers
};
