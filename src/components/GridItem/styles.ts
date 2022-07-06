import styled from 'styled-components';

type ContainerProps ={
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground? "#1550FF":"#E2E3E3"};
    border-radius: 10px;
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 5px;
    
  @media screen and (max-width: 400px){
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 355px){
    width: 85px;
    height: 85px;
  }
`;

type Opacity = {
    opacity?: number
}

export const Icon = styled.img<Opacity>`
    width: 50px;
    height: 50px;
    opacity: ${props => props.opacity?? 1} ;
`

