import { InputHTMLAttributes } from 'react'

export interface PostCardProps extends InputHTMLAttributes<HTMLDivElement> {
  text: string
  meaning: string
  transcription: string
  videoUrl: string
  previewUrl?: string
}
