import { ChangeEvent, useState } from 'react'

export const useForm = (initialFormValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialFormValues)

  const handleInput = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
    setValues({ ...values, [fieldName]: e.target.value })
  }

  const handleSubmit = () => {
    console.log(values)
  }
  return {
    handleInput,
    handleSubmit,
    values,
  }
}
