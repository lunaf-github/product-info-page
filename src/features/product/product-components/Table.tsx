
import React from 'react';
import JSONData from '../../../../data/data.json';

const Table = () => {


    const data = JSONData[0].sales

    const rows = data.map((row, i) => {
        return (
            <tr key={`row-${i}`}>
              <td>{row.weekEnding.toLocaleString()}</td>
              <td>{"$" + row.retailSales.toLocaleString()}</td>
              <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
              <td>{row.unitsSold.toLocaleString()}</td>
              <td>{"$" + row.retailerMargin.toLocaleString()}</td>
            </tr>
          );
    })




    return (
        <section className="table-container">
            <table id="table">
                <thead>
                <tr>
                    <th scope="col">
                    <div>
                        WEEK ENDING
                    </div>
                    </th>
                    <th scope="col" >
                    <div>
                        RETAIL SALES 
                    </div>
                    </th>
                    <th scope="col" >
                    <div>
                        WHOLESALE SALES 
                    </div>
                    </th>
                    <th scope="col" >
                    <div>
                        UNITS SOLD 
                    </div>
                    </th>
                    <th scope="col" >
                    <div>
                        RETAILER MARGIN 
                    </div>
                    </th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </section>    

    );
}

export default Table;