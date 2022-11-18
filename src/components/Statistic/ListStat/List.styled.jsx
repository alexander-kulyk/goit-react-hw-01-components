import styled from "styled-components";


export const List = styled.ul`
    display: flex;
    align-items: center;
    padding:0;
    margin:0;
`

export const ItemsStats = styled.li`
    display: flex;
    flex-direction: column;
    width: 50px;
    padding: 32px;
    list-style: none;
`
export const Label = styled.span`
    color: white;
    font-size: 24px;
`
export const Percentage = styled(Label)`
    font-size: 30px
`