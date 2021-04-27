import { motion } from "framer-motion"
import React, { useCallback, useState } from "react"
import styled from "styled-components"

const StyledContact = styled.div``

const errors = {}

const ContactForm = ({ performance }) => {
  const [logs, setLogs] = useState({
    date: "",
    place: "",
    message: "",
  })

  const handleChange = useCallback(
    ({ target }) => {
      let { name, value } = target
      setLogs({
        ...logs,
        [name]: value,
      })
    },
    [logs, setLogs]
  )

  return (
    <StyledContact>
      <div className='form-info'>
        <div className='left'>
          <div className='perf-name'>{performance.name}</div>
          <div className='perf-number-of-artists'>{performance.noOfArtists} musiciens</div>
          <div className='perf-length'>{performance.length} heures</div>
        </div>
      </div>
      <form>
        <div className='form-group'>
          <div className='label-group'>
            <label htmlFor='date'>date</label>
            {errors.date && <div className='error-message'>{errors.date}</div>}
          </div>
          <motion.input
            animate={{
              borderColor: errors.date ? "rgb(255, 101, 101)" : "rgb(255,255,255)",
            }}
            autoCorrect='off'
            placeholder='date'
            type='date'
            name='date'
            id='date'
            value={logs.date}
            onChange={handleChange}
          />
        </div>
      </form>
    </StyledContact>
  )
}

export default ContactForm
