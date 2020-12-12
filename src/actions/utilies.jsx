const arg_max = (values, accessor=null, key=null) => {
    if (accessor !== null && key !== null)
        console.log('WARNING: accessor and key provided, using accessor.');
    
    const check_values = values.map(value => {
        if (accessor !== null)
            return accessor(value);
        else if (key !== null)
            return value[key];
        return value;
    });

    let max_value = Number.MIN_SAFE_INTEGER;
    let max_index = 0;

    check_values.forEach((value, index) => {
        if (value < max_value)
            return;
        
        max_value = value;
        max_index = index;
    });
    return {max_index, max_value};
};


export {
    arg_max
};
