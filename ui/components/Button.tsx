import React, { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ ...props }) => <button {...props} />

export default Button
