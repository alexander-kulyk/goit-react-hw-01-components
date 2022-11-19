import { Table, TableHead, TableRow, ItemTable, TableBody, TableData } from "./Transaction.styled";

export const TransactionHistory = ({transInfo}) =>{
    return <Table>  
        <TableHead>
                <TableRow>
                    <ItemTable>Type</ItemTable>
                    <ItemTable>Amount</ItemTable>
                    <ItemTable>Currency</ItemTable>
                </TableRow>
            </TableHead>
            <TableBody>
            {transInfo.map(({id, type, amount, currency}) =>(
                <TableRow key={id}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>
               ))}
                
            </TableBody>
        


    </Table>
}
//{transInfo.map(({id, type, amount, currency}) =>(
            
//    ))}