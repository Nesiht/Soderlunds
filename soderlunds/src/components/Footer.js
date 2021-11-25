import React from 'react'
import { StyledBackground, StyledContiner, StyledParagraph, StyledItalic, StyledLogo } from '../styles/footer'


export const Footer = () => {
  return (
    <StyledBackground>
      <StyledContiner>
            <StyledParagraph>Söderlunds Plattsättning AB</StyledParagraph>
            <StyledItalic>- Utför arbeten i Roslagen & Norrort!</StyledItalic>
            <StyledParagraph>Jaktstigen 13</StyledParagraph>
            <StyledParagraph>762 61 Rimbo</StyledParagraph>
            <StyledParagraph>Org.nr: 559246-3615</StyledParagraph>
            <StyledLogo src="../assets/img/Logo_ligg_small_webp.webp" alt="logo" />
      </StyledContiner>

    </StyledBackground>
  )}