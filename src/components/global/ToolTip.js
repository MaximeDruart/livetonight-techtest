import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const StyledToolTip = styled(motion.div)`
  display: inline-block;
  margin: 0 2px;
  .tool-tip {
    width: 10px;
    height: 10px;
    background: red;
    cursor: pointer;
    position: relative;

    .text {
      position: absolute;
      bottom: 200%;
      left: 50%;
      transform: translateX(-50%);
      padding: 15px;
      border: thin solid black;
      cursor: auto;

      p {
        white-space: nowrap;
      }
    }
  }
`

const ToolTip = ({ children = "this is a tooltip !" }) => {
  return (
    <StyledToolTip>
      <motion.div whileHover='hover' className='tool-tip'>
        <motion.div initial={{ opacity: 0 }} variants={{ hover: { opacity: 1 } }} className='text'>
          <p>{children}</p>
        </motion.div>
      </motion.div>
    </StyledToolTip>
  )
}

export default ToolTip
