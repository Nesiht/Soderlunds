import React from 'react'
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const IG_TOKEN = process.env.REACT_APP_IG_TOKEN

export const IgFeed = () => {
  return (
      <InstagramFeed token={IG_TOKEN}  counter="99"/>
  )
}