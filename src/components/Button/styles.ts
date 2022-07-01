import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    background-color: #1550FF;
    transition: all ease .3s;
    &:hover{
        opacity: .8;
    }
    
`;
export const IconArea = styled.div `
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #cecece;
    padding:  0 15px;
`
export const Icon = styled.img `
    height: 20px;
`
export const Label = styled.div `
    flex:1;
    color: #FFF;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`
