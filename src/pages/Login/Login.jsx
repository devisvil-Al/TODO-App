import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { passwordValidation, mailValidation } from '../../components/validation/validation';
import { useUserLoginMutation } from '../../redux/query/user';

function Login () {
    const navigate = useNavigate()
    const [apiLogin, {data}] = useUserLoginMutation()
   
    useEffect(()=>{
        if(localStorage.getItem('token')) navigate('/todos') 
    }, [navigate])

    const[inputs, setInputs] = useState({
        email : '',
        password : ''
    })

    const[errMessage, setErrMessage] = useState({
        email : false,
        password : false
    })

    function handleChange({target}) {
        const {name, value} = target
        setInputs({...inputs, [name] : value})
        
    }

    function handleErrMessage(e, Validation) {
        const valid = !Validation(e)
        setErrMessage({...errMessage, [e.target.name] : valid})
    }

    function handleSubmit(e) {
        e.preventDefault()
        apiLogin(inputs)
    }

    useEffect(() => {
        if(data){
            localStorage.setItem('token', data.token)
            return navigate('/')
          }
    }, [data, navigate])

    return <section className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.container}>
                <h3 className={styles.header}>Welcome Back!</h3>
                <img src="./images/Slice 2.png" alt='img'/>
            </div>
            <div className={styles.inp_container}>
                <input type="text" className={styles.inp} onChange={handleChange} onInput={(e) => handleErrMessage(e, mailValidation)} name='email' placeholder='Enter your email'/>
                <p className={`${styles.error} ${errMessage.email ? styles.show : ''}`}>Error: your email is incorrect</p>
                <input type="text" className={styles.inp} onChange={handleChange} onInput={(e) => handleErrMessage(e, passwordValidation)} name='password' placeholder='Enter password'/>
                <p className={`${styles.error} ${errMessage.password ? styles.show : ''}`}>Error: your password is incorrect</p>
            </div>
            <div className={styles.pass_container}>
                {/* <a className={styles.link}>Forgot Password</a> */}
                <button className={styles.btn}>Sign In</button>
                <p className={styles.txt}>Don’t have an account ? <Link to={'/signUp'}className={styles.link}>Sign Up</Link></p>
            </div>
        </form>
    </section>
}

export default Login;