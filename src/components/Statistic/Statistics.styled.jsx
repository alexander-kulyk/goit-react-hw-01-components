import styled from "styled-components";



export const StatisticsBox = styled.section`
    background-color: ${p => p.theme.colors.bcPrimary};
    margin: ${p => p.theme.space[4]}px 0;

    box-shadow: ${p => p.theme.shadow.boxShadow};
`

export const Title = styled.h2`
    color: ${p => p.theme.colors.textPrimary};
    text-align: center;
`

export const List = styled.ul`
    display: flex;
    align-items: center;
    padding:${p => p.theme.space[0]};
    margin:${p => p.theme.space[0]};

`

export const ItemsStats = styled.li`
    display: flex;
    flex-direction: column;
    width: 50px;
    padding: ${p => p.theme.space[4]}px;
    list-style: none;

    border: ${p => p.theme.borders.border};
`
export const Label = styled.span`
    color:${p => p.theme.colors.secondText};
    font-size: ${p => p.theme.fontSizes[4]}px;
    font-family:${p => p.theme.fonts.heading}; 
`
export const Percentage = styled(Label)`
    font-size: ${p => p.theme.fontSizes[5]}px
`