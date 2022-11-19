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