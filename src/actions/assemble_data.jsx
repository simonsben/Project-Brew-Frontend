const make_rouder = num_digits => (
    number => number.toFixed(num_digits)
);

const alcohol_format = value => (value * 100).toFixed(1);
    
const passer = value => value;
const general_formatters = {
    price: make_rouder(2),
    alcohol_value: make_rouder(1),
    alcohol: alcohol_format,
    value: make_rouder(1)
};

const general_key_maps = {
    name: {
        name: 'Beer',
        is_numeric: false
    },
    container_type: {
        name: 'Type',
        is_numeric: false
    },
    quantity: {
        name: 'Quantity',
        is_numeric: true
    },
    volume: {
        name: 'Size (mL)',
        is_numeric: true
    },
    alcohol: {
        name: 'Alcohol (%)',
        is_numeric: true
    },
    price: {
        name: 'Price',
        is_numeric: true
    }
};

const default_target = {
    key: 'alcohol_value',
    name: 'Value (mL alc/$)',
    is_numeric: true
};

const assemble_beer_info = ({beers, target=default_target, to_remove=null}) => {
    let key_maps = {...general_key_maps, [target['key']]: target};
    if (to_remove !== null)
        to_remove.forEach(key => {
            if (key in key_maps)
            delete key_maps[key];
        })

    let formatters = {...general_formatters};
    if ('formatter' in target)
        formatters[target['key']] = target['formatter'];
    
    const is_numeric = Object.keys(key_maps).map(key => key_maps[key]['is_numeric']);
    const header = Object.keys(key_maps).map(key => key_maps[key]['name']);

    const beer_info = beers.map(beer => {
        const beer_info = Object.keys(key_maps).map(key => {
            const formatter = key in formatters? formatters[key] : passer;

            const reference_index = beer['main'];
            const container = beer['containers'][reference_index];
            if (key in container)
                return formatter(container[key]);
            return formatter(beer[key]);
        });
    
        return beer_info
    });

    return {beer_info, is_numeric, header};
}


export {
    assemble_beer_info
}