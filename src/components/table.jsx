import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';


class AdvTable extends Component {
    

    render() {
        const { header, data, is_numeric } = this.props;

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
                        data.map((item, index) => (
                            <tr key={ index }>
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
                        ))
                    }
                </tbody>
            </Table>
        )
    }
}

export default AdvTable;
