import { useField, ErrorMessage } from 'formik'

export const TextField = ({label, ...props}: any) => {
  const [field, meta] = useField(props)

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input 
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
        autoComplete="off"
        {...field} {...props} 
      />
      <ErrorMessage name={field.name}  className='error' component='div'/>
    </div>
  )
}
