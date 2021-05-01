import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"

const StyledHeader = styled(motion.div)`
  z-index: 10000;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  padding: 0 max(5vw, 40px);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background: white;
  .left {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    cursor: pointer;
    .logo {
      margin-right: 10px;
    }
    .logo-text {
      font-family: "BerlinBold";
    }
  }
  .right {
    .hamburger {
      .sandwich {
        .bars {
          cursor: pointer;
          width: 40px;
          height: 20px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          z-index: 1000;
          position: relative;
          .bar {
            width: 100%;
            height: 3px;
            background: black;
          }
        }
        .content {
          position: fixed;
          height: 100vh;
          width: 420px;
          top: 0;
          right: -80%;
          z-index: 20;
          padding: 8vh 8vw 5vh 8vw;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          background: white;
        }
        .filter {
          user-select: none;
          pointer-events: none;
          position: fixed;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          background: black;
          opacity: 0;
          z-index: 10;
        }
      }
    }
  }
`

const hamburgerVariantsTop = {
  open: { y: 9, rotate: -45 },
}
const hamburgerVariantsBot = {
  open: { y: -9, rotate: 45 },
}
const hamburgerVariantsMid = {
  open: { opacity: 0, transition: { duration: 0.15 } },
}
const hamburgerContentVariants = {
  open: { right: 0, transition: { ease: "easeInOut" } },
}
const hamburgerFilterVariants = {
  open: { opacity: 0.6 },
}

const Header = () => {
  const [hamIsOpen, setHamIsOpen] = useState(false)

  return (
    <StyledHeader>
      <div className='left'>
        <div className='logo-text'>LIVE TONIGHT</div>
      </div>
      <div className='right'>
        {/* <div className='links'>
          <button className='button contact'>nous contacter</button>
          <button className='devis'>devis</button>
          <button className='button contact'>CONNEXION // INSCRIPTION</button>
        </div> */}
        <div className='hamburger'>
          <motion.div animate={hamIsOpen ? "open" : ""} className='sandwich'>
            <motion.div onClick={() => setHamIsOpen(!hamIsOpen)} className='bars'>
              <motion.div variants={hamburgerVariantsTop} className='bar top-bar'></motion.div>
              <motion.div variants={hamburgerVariantsMid} className='bar mid-bar'></motion.div>
              <motion.div variants={hamburgerVariantsBot} className='bar bottom-bar'></motion.div>
            </motion.div>

            <motion.div variants={hamburgerFilterVariants} className='filter'></motion.div>

            <motion.div variants={hamburgerContentVariants} className='content'>
              <ul className='mobile-links'></ul>
              <div className='foot'></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
