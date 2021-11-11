import styled from 'styled-components'

export const StyledBackground = styled.div`
  background-image: linear-gradient(to right bottom, #12acae, #00a0bf, #0092c8, #4880c6, #766bb5);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 1024px) {
    // height: 30vh;
  }
  `

export const StyledContiner = styled.div`
  display: block;
  width: 90vw;
  margin: 15px;
  `

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: black;
  font-weight: 600;
  line-height: 0.6;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  `

export const StyledItalic = styled.p`
  font-size: 1.2rem;
  color: black;
  font-style: italic;
  font-weight: 400;
  line-height: 0.2;
  `

export const StyledLogo = styled.img`
  height: 80px;
  margin-right: 20px;

  @media (min-width: 1024px) {
    height: 60px;
  }
  `