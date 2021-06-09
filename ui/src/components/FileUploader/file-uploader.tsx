import React, { FC } from 'react'
import { useForm } from 'react-hook-form'

import { FileUploaderProps } from './file-uploader.types'

export const FileUploader: FC<FileUploaderProps> = ({
  onSubmit,
  acceptFiles = 'video/mp4',
}) => {
  const { register, handleSubmit } = useForm()

  const onSubmitHandler = (data: any) => onSubmit(data.file)

  return (
    <form role="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <input
        {...register('file')}
        type="file"
        data-testid="file-uploader"
        accept={acceptFiles}
      />
      <button>Load video preview</button>
    </form>
  )
}
