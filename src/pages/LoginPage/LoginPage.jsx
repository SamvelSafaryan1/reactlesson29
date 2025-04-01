import { Formik, Form, Field } from "formik"
import { useDispatch} from "react-redux"
import { loginTC } from "../../store/reducers/loginReducer"
import './LoginPage.css'

function LoginPage(){
    const dispatch = useDispatch()
    const authHandler = ({email, password}) => {
        dispatch(loginTC(email, password))
    }

    return(
        <div className="login-form">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={(values) => authHandler(values)}
            >
                <Form>
                    <Field name='email' placeholder='Email'/>
                    <Field name='password' placeholder='Password'/>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage
