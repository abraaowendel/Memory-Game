import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0;
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 750px){
    flex-direction: column;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media screen and (max-width: 750px){
    margin-bottom: 40px;
    align-items: center;
  }
`;
export const LogoLink = styled.a`
    display: block;
`;
export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
  @media screen and (max-width: 750px){
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 750px){
    justify-content: center;
    margin: 0 20px;
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
  
  @media screen and (max-width: 750px){
    grid-template-columns: repeat(3,1fr);

  }
`;

