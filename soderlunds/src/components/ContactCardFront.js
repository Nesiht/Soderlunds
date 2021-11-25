import React from 'react'
import { StyledContactCard, StyledImg } from '../styles/contact'

export const ContactCardFront = (props) => {
  return (
    <StyledContactCard Front order={props.order}>
      <StyledImg src={props.image} alt={props.alt} />
    </StyledContactCard>
  )
}