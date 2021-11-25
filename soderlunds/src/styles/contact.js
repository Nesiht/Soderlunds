import styled from "styled-components"

export const StyledBackground = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const StyledHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  `

export const StyledContiner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 640px;
  }
  `

export const StyledContactCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 170px;
  margin: 15px;
  padding: 1rem;
  background-color: ${props => props.Front ? "#009AC4" : "#fff"};
  border-radius: 4px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);


  @media (min-width: 1024px) {
    width: 150px;
    height: 80px;
    order: ${props => props.order};
  }
  `

export const StyledText = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem;
  font-family: 'Source Sans Pro', sans-serif;

  @media (min-width: 1024px) {
    font-size: 0.8rem;
    line-height: 0.6;
  }
  `

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5rem;

  @media (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
  `