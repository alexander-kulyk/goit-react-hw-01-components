import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, ItemTable, TableBody, TableData } from "./Transaction.styled";

const evenNumber = (transInfo) =>{

   return transInfo.map((item, indx) => {

       return indx % 2 === 0 ? "white" : "blue";
        
    }).join('')
    
}


export const TransactionHistory = ({transInfo}) =>{

    return <Table>  
        <TableHead>
                <TableRow >
                    <ItemTable>Type</ItemTable>
                    <ItemTable>Amount</ItemTable>
                    <ItemTable>Currency</ItemTable>
                </TableRow>
            </TableHead>
            <TableBody>
            {transInfo.map(({id, type, amount, currency}, idx) =>(
               
                <TableRow key={id} style={{backgroundColor: idx % 2 === 0 ? 'white' : 'rgb(231, 236, 248)'}}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>
               ))}
                
            </TableBody>

    </Table>
};

TransactionHistory.propTypes = {
    transInfo: PropTypes.arrayOf(
        PropTypes.shape({
            type:  PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired
        })
    )
}