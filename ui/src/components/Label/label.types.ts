import { InputHTMLAttributes } from 'react'

type labelStates = 'requested' | 'published' | 'draft'

export interface LabelContainerStyleProps {
  state: labelStates
}

export interface LabelProps
  extends InputHTMLAttributes<HTMLDivElement>,
    LabelContainerStyleProps {}
