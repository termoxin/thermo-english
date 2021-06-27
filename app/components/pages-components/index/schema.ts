import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(6).max(99),
})
