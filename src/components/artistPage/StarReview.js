import React from "react"
import styled from "styled-components"

const StyledStarReview = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const StarReview = ({ rating, size }) => {
  return (
    <StyledStarReview>
      {new Array(Math.ceil(rating)).fill().map(() => (
        <svg style={{ transform: `scale(${size})` }} width={24} height={24} viewBox={`0 0 ${24} ${24}`}>
          <path
            fill='#3CE295'
            d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z'
          />
        </svg>
      ))}
    </StyledStarReview>
  )
}

export default StarReview
