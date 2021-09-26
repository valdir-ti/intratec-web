import {useField} from 'formik'

export const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input 
        className="form-control shadow-none" 
        autoComplete="off"
        {...field} {...props} 
      />
    </div>
  )
}
