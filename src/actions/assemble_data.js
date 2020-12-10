const { titleCase } = require('title-case');

const lower_case = value => value.toLowerCase();
const title_case = value => titleCase(lower_case(value));
const make_rouder = num_digits => (
    number => number.toFixed(num_digits)
);
    
const passer = value => value;
const formatters = {
    price: make_rouder(2),
    value: make_rouder(1),
    alcohol: make_rouder(1),
    name: title_case
};

const key_maps = {
    name: 'Beer',
    container_type: 'Type',
    number: 'Quantity',
    capacity: 'Size (mL)',
    alcohol: 'Alcohol (%)',
    price: 'Price',
    value: 'Value (mL alc/$)'
};

const is_numeric = [
    false,
    false,
    true, 
    true,
    true,
    true,
    true
];

const header = Object.values(key_maps);



const assemble_beers = (beers) => beers.map((beer, index) => {
    return Object.keys(key_maps).map(key => {
        const formatter = key in formatters? formatters[key] : passer;

        if (key in beer)
            return formatter(beer[key]);
        
        const reference_index = beer['main'];
        return formatter(beer['info'][reference_index][key]);
    });
});


module.exports = {
    assemble_beers,
    header,
    is_numeric
}