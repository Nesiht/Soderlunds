import React from "react"
import Fade from 'react-reveal/Fade';
import { StyledBackground } from "../styles/information"
import { Omoss } from "./Omoss"
import { IgFeed } from "./IgFeed"

export const Information = () => {
  return (
    <StyledBackground>
      <Fade bottom>
        <Omoss />
        <IgFeed />
      </Fade>
    </StyledBackground>
  )
}