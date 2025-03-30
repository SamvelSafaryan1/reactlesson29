import { Formik, Form, Field } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { loginTC } from "../../store/reducers/loginReducer"
import './LoginPage.css'
import { useNavigate } from "react-router-dom"

function LoginPage(){
    const dispatch = useDispatch()
    const {userId} = useSelector((state) => state.auth)
    const navigate = useNavigate

    const authHandler = ({email, password}) => {
        dispatch(loginTC(email, password))
        if(userId){
            navigate(`/profile/${userId}`)
        }
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
                    <button type="submit" onClick={() => authHandler}>Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage
