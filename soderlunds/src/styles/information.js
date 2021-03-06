import styled from "styled-components"

export const StyledBackground = styled.section`
  background-image: linear-gradient(to right bottom, #12acae, #00a0bf, #0092c8, #4880c6, #766bb5);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledCard = styled.article`
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  margin: 3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;

    @media (min-width: 1024px) {
    width: 33vw;
  }
`
export const StyledHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  `

export const StyledParagraph = styled.p`
  font-size: 1rem;
  margin: 0.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  `

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  `