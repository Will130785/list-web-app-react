import { ChangeEvent, useState } from 'react'

export const useForm = (initialFormValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialFormValues)

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | string,
    fieldName: string
  ) => {
    if (typeof e === 'string') {
      setValues({ ...values, [fieldName]: e })
    } else {
      setValues({ ...values, [fieldName]: e.target.value })
    }
  }

  return {
    handleInput,
    values,
  }
}
