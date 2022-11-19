import styled from "styled-components";


export const Table = styled.table`
    width: 500px;

    box-shadow: ${p => p.theme.shadow.boxShadow};
    border: ${p => p.theme.borders.border}
`

export const TableHead = styled.thead`
    background-color: ${p => p.theme.colors.bcPrimary};
    
    
`
export const TableRow = styled.tr`
    text-align: center;
    height: 30px;
    
`

export const ItemTable = styled.th`
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-family:${p => p.theme.fonts.monospace};
`
export const TableBody = styled.tbody`
    
`
export const TableData = styled.td`
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-family:${p => p.theme.fonts.body};
    border: ${p => p.theme.borders.border}
    
`