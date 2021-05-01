import React, { useCallback, useState } from "react"
import styled from "styled-components"
import { delayedValidateContact } from "../../assets/utils/formValidator"

const StyledContact = styled.div`
  width: 100%;
  .form-info {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 15px 40px 15px 25px;
    margin-bottom: 10px;
    .left {
      font-size: 12px;
      .perf-name {
        font-size: 14px;
        font-weight: 700;
      }
    }
    .right {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;

      .price-text {
        color: ${({ theme }) => theme.textStyles.body.small};
      }

      .price {
        color: ${({ theme }) => theme.colors.main};
        font-size: 26px;
      }
    }
  }
  form {
    width: 100%;
    padding: 0 25px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .form-group {
      width: 100%;
      margin-bottom: 15px;
      .label-group {
        .error-message {
          color: red;
          font-weight: 400;
          margin: 6px 0;
        }
        label {
        }
      }
      textarea {
        resize: vertical;
      }
    }
    .user-notice {
      margin-top: 5px;
      font-size: 12px;
    }

    button {
      margin-top: 20px;
      background: ${({ isLoading }) => (isLoading ? "#79ffc1 !important" : "initial")};
      transition: background 0.3s ease-in-out;
    }
  }
`

const ContactForm = ({ close, performance }) => {
  const [logs, setLogs] = useState({
    date: "",
    place: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    // usually we'd do server side form validation ( send the logs through an api call and server sends back error but here for the sake of the exercice i'm doing it client side to simulate how errors would be shown to the user )
    setIsLoading(true)
    const { errors, isValid } = await delayedValidateContact(logs)
    setIsLoading(false)
    if (isValid) {
      close()
    } else setErrors(errors)
  }

  return (
    <StyledContact isLoading={isLoading}>
      <div className='form-info'>
        <div className='left'>
          <div className='perf-name'>{performance.name}</div>
          <div className='perf-number-of-artists'>{performance.noOfArtists} musiciens</div>
          <div className='perf-length'>{performance.length} heures</div>
        </div>
        <div className='right'>
          <span className='price-text'>à partir de</span>
          <span className='price'>{performance.startPrice}€</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <div className='label-group'>
            <label htmlFor='date'>Date - Obligatoire</label>
            {errors.date && <div className='error-message'>{errors.date}</div>}
          </div>
          <input
            className='form-control'
            autoCorrect='off'
            type='date'
            name='date'
            id='date'
            value={logs.date}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <div className='label-group'>
            <label htmlFor='place'>Lieu - Obligatoire</label>
            {errors.place && <div className='error-message'>{errors.place}</div>}
          </div>
          <input
            className='form-control'
            autoCorrect='off'
            placeholder='Lieu...'
            type='text'
            name='place'
            id='place'
            value={logs.place}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <div className='label-group'>
            <label htmlFor='message'>Votre message au musicien - Obligatoire</label>
            {errors.message && <div className='error-message'>{errors.message}</div>}
          </div>
          <textarea
            className='form-control'
            autoCorrect='off'
            placeholder="Décrivez vos envies à l'artiste"
            type='message'
            name='message'
            id='message'
            rows='5'
            cols='33'
            value={logs.message}
            onChange={handleChange}
          />
        </div>
        <div className='user-notice'>
          Ces informations faciliteront l'échange avec les musiciens. Elles ne seront en aucun cas utilisées d'une autre
          manière que dans le cadre de votre demande de réservation sur LiveTonight !
        </div>

        <button className='button contact submit'>Valider</button>
      </form>
    </StyledContact>
  )
}

export default ContactForm
