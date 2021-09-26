import { Formik, Form} from 'formik'
import { TextField } from '../TextField'
import * as Yup from 'yup'

export const FormLogin = () => {

  const validate = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(5, 'Password must be at least 5 characters').required('Password is required')
  })

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validate}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      {formik =>(
        <div>
          <h1 className="my4 font-weight-bold-display-4">Login</h1>
          <Form>
            <TextField label="Email" name="email" type="text"/>
            <TextField label="Password" name="password" type="password"/>
            <button className="btn btn-primary mt-3 ml-3" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3" type="submit">Reset</button>
          </Form>
        </div>
      )}    
    </Formik>
  )
}
