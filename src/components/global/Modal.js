import { motion } from "framer-motion"
import React, { useEffect } from "react"
import styled from "styled-components"

const StyledModal = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 10vh max(10vw, 20px) 10vh max(10vw, 20px);
  .filter {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.92;
    z-index: -1;
  }

  .card {
    width: 500px;
    height: 700px;
    background: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .banner {
      margin-top: 30px;
      background-color: #202eb6;
      box-shadow: 0 3px 3px rgb(0 0 0 / 40%);
      border: none;
      color: white !important;
      width: 104%;
      margin-top: 10px;
      margin-bottom: 0px;
      margin-left: -2%;
      border-radius: 1px;
      text-align: center;
      padding: 20px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`
const containerVariants = {
  open: {
    pointerEvents: "auto",
    opacity: 1,
  },
  closed: {
    pointerEvents: "none",
    opacity: 0,
  },
}

const Modal = ({ title, children, isOpen, close }) => {
  useEffect(() => {
    const escapeHandler = ({ key }) => key === "Escape" && close()
    window.addEventListener("keydown", escapeHandler)
    return () => window.removeEventListener("keydown", escapeHandler)
  }, [close])

  useEffect(() => {
    // document.body.style.position = isOpen ? "fixed" : "initial"
  }, [isOpen])

  return (
    <StyledModal
      initial={{
        opacity: 0,
        pointerEvents: "none",
      }}
      variants={containerVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div onClick={close} className='filter'></motion.div>
      <div className='card'>
        <div className='banner'>
          <div className='title'>{title}</div>
          <div onClick={close} className='close'></div>
        </div>
        <div className='content'>{children}</div>
      </div>
    </StyledModal>
  )
}

export default Modal
