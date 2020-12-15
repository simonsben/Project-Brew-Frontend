import React from 'react';
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';

const make_url = name => name.replaceAll(' ', '-');


const AdvTable = props => {
    const { header, data, is_numeric, no_url } = props;
    const history = useHistory();

    const generate_linker = beer_name => {
        if (!no_url)
            return () => history.push(`/beers/${beer_name}`);
        return () => '#';
    }

    return (
        <Table responsive striped hover>
            <tbody>
                <tr className='table-header'>
                    {
                        header.map((item, index) => (
                            <th key={ index }>{ item }</th>
                        ))
                    }
                </tr>
                {
                    data && Array.isArray(data) &&
                    data.map((item, index) => {
                        const beer_name = make_url(item[0]);

                        return (
                            <tr onClick={generate_linker(beer_name)} key={ index }>
                                {
                                    Array.isArray(item) ?
                                    item.map((attribute, sub_index) => (
                                        <td 
                                            key={index + '-' + sub_index}
                                            className={(is_numeric[sub_index])? 'numeric_cell' : 'non_numeric_cell'}
                                            >{ attribute }</td>
                                    ))
                                    :
                                    header.map((_, index) => (<td> {index} </td>))
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default AdvTable;
export {
    make_url
}
