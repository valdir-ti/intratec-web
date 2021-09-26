import { Formik, Form} from 'formik'
import { TextField } from '../TextField'

export const FormLogin = () => {
  return (
    <Formik
      initialValues={{email: '', password: '',}}
      onSubmit={()=>{}}
    >
      {formik =>(
        <div>
          <h1 className="my4 font-weight-bold-display-4">Login</h1>
          {console.log(formik.values)}
          <Form>
            <TextField label="Email" name="email" type="text"/>
            <TextField label="Password" name="password" type="password"/>
            <button className="btn btn-primary mt-3" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3" type="submit">Reset</button>
          </Form>
        </div>
      )}    
    </Formik>
  )
}
