import validator from "validator"
import isEmpty from "is-empty"

const validateContact = (data) => {
  let errors = {}
  // Convert empty fields to an empty string so we can use validator functions
  data.date = !isEmpty(data.date) ? data.date : ""
  data.place = !isEmpty(data.place) ? data.place : ""
  data.message = !isEmpty(data.message) ? data.message : ""

  // date check
  if (validator.isEmpty(data.date)) {
    errors.date = "Date requise"
  } else if (!validator.isAfter(data.date)) {
    errors.date = "Date invalide"
  }

  // Name checks
  if (validator.isEmpty(data.place)) {
    errors.place = "Nom requis"
  }

  // message checks
  if (validator.isEmpty(data.message)) {
    errors.message = "Message à l'artiste requis"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

// simulating a delayed response from a server
const delayedValidateContact = (data) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(validateContact(data)), 600)
  })

export { validateContact, delayedValidateContact }
