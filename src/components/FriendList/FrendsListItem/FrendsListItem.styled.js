import styled from "styled-components";


export const Item = styled.li`

display: flex;
align-items: center;
justify-content: center;

width: 300px;
height: 100px;

margin-bottom: ${p => p.theme.space[3]}px;
background-color: ${p => p.theme.colors.bcPrimary};

box-shadow: ${p => p.theme.shadow.boxShadow};
list-style: none;

`
export const Img = styled.img`
    
`
export const Status = styled.span`
    margin-right: ${p => p.theme.space[2]}px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${p => p.children 
        ? p.theme.colors.isOnline 
        : p.theme.colors.isOffLine }
`

export const Name = styled.p`
    font-size: ${p => p.theme.fontSizes[5]}px;
    font-family:${p => p.theme.fonts.monospace};

    margin-left: ${p => p.theme.space[3]}px
    
`