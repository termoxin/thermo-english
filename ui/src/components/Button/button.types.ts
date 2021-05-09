import { ButtonHTMLAttributes } from 'react'

export type buttonVarients = 'primary' | 'squared'

export enum buttonVarientsEnum {
  PRIMARY = 'primary',
  SQUARED = 'squared',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVarients
}
