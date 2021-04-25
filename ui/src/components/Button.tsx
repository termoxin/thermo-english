import React, { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ ...props }) => <button {...props} />
