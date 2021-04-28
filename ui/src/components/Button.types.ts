import { ButtonHTMLAttributes } from 'react'

export type buttonVarients = 'primary'

export enum buttonVarientsEnum {
  PRIMARY = 'primary',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVarients
}
