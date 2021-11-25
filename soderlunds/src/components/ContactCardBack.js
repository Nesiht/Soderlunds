import React from 'react'
import { StyledContactCard, StyledText } from '../styles/contact'

export const ContactCardBack = (props) => {
  return (
    <StyledContactCard order={props.order}>
      <StyledText>{props.title}</StyledText>
      <StyledText>{props.title2}</StyledText>
      <StyledText>{props.title3}</StyledText>
    </StyledContactCard>
  )
}