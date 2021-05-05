import React, { ButtonHTMLAttributes, FC } from 'react'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button {...props} />
)
