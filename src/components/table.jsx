import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

const make_url = name => name.replaceAll(' ', '-');


class AdvTable extends Component {
    

    render() {
        const { header, data, is_numeric, no_url } = this.props;

            const generate_linker = beer_name => {
                if (!no_url)
                    return () => window.location.replace(`/beers/${beer_name}`);
                return () => '#';
            }

        return (
            <Table responsive striped hover>
                <tbody>
                    <tr>
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
}

export default AdvTable;
export {
    make_url
}
