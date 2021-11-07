import React from 'react'
import Fade from 'react-reveal/Fade';
import { ContactCardBack } from './ContactCardBack'
import { ContactCardFront } from './ContactCardFront'
import { StyledBackground, StyledHeading } from '../styles/contact'

export const Contact = () => {
  return (
    <StyledBackground>
      <StyledHeading>Kontakta oss</StyledHeading>
      <Fade bottom>
        <ContactCardFront image="../assets/img/045-call.png" alt="Phone" />
        <ContactCardBack title2="070-756 06 45" />
        <ContactCardFront image="../assets/img/043-email-1.png" alt="Letter"/>
        <ContactCardBack title2="Dennis@soderlundsplattsattning.se" />
        <ContactCardFront image="../assets/img/040-profile.png" alt="Contact card" />
        <ContactCardBack title="Jaktstigen 13" title2="762 61 Rimbo" title3="Org.nr: 559246-3615" />
      </Fade>
    </StyledBackground>
  )
}
