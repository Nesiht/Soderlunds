import React from 'react'
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { StyledCard } from "../styles/information"

const IG_TOKEN = process.env.REACT_APP_IG_TOKEN

export const IgFeed = () => {
  return (
    <StyledCard>
      <InstagramFeed token={IG_TOKEN} counter="12" />
    </StyledCard>
  )
}