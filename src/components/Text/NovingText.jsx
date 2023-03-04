import React from 'react'
import MovingText from 'react-moving-text'

const MyAnimatedTypo = () => {
  return (
    <MovingText
      type="jelly"
      duration="1000ms"
      delay="2s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
     Optimum consultancy Services
    </MovingText>
  )
}

export default MyAnimatedTypo;