import styles from './registration.module.css';
import { useEffect, useState } from 'react';
import { passwordValidation, mailValidation, nameValidation } from '../../components/validation/validation';
import { disable, setConfirm } from '../../redux/slices/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Regstration() {

    const disabledBtn = useSelector((state) => state.registrationSlice.disableBtn)
    const confirmPassword = useSelector((state) => state.registrationSlice.confirmPassword)
    const dispatch = useDispatch()


    const[inputs, setInputs] = useState({
        name : '',
        email : '',
        password : '',
        confirm : ''
    })

    const[errMessage, setErrMessage] = useState({
        email : false,
        password : false,
        confirm : false,
        name : false,
    })


    useEffect((e) => {
        setErrMessage((prev) => ({...prev, confirm : inputs.confirm !== confirmPassword }))
        dispatch(disable(Object.values(errMessage).includes(true) || Object.values(inputs).some(i => i.length === 0)))
    }, [inputs, confirmPassword, errMessage, dispatch])

    function handleErrMessage(e, Validation) {
        const valid = !Validation(e)
        setErrMessage({...errMessage, [e.target.name] : valid})
    }

    function handleChange({target}) {
        const {name, value} = target
        setInputs({...inputs, [name] : value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
    }

    return <form className={styles.registration} onSubmit={handleSubmit}>
        <div className={styles.container}>
            <h3 className={styles.header}>Welcome Dolphin!</h3>
            <p className={styles.txt}>Let’s help you meet up your tasks</p>
        </div>
        <div className={styles.inp_container}>
            <input type="text" className={styles.inp} name='name' onChange={handleChange} onInput={(e) => handleErrMessage(e, nameValidation)} placeholder='Enter your full name'/>
            <p className={`${styles.error} ${errMessage.name ? styles.show : ''}`}>Error: your name?!</p>
            <input type="text" className={styles.inp} name='email' onChange={handleChange} onInput={(e) => handleErrMessage(e, mailValidation)} placeholder='Enter your email'/>
            <p className={`${styles.error} ${errMessage.email ? styles.show : ''}`}>Error: your email is incorrect</p>
            <input type="text" className={styles.inp} name='password' onChange={handleChange} onInput={(e) => {
                handleErrMessage(e, passwordValidation);
                dispatch(setConfirm(e.target.value))
            }} placeholder='Enter password' />
            <p className={`${styles.error} ${errMessage.password ? styles.show : ''}`}>Error: your password is incorrect</p>
            <input type="text" className={styles.inp} name='confirm' onChange={handleChange} onInput={(e) => handleErrMessage(e, passwordValidation)} placeholder='Confirm Password' />
            <p className={`${styles.error} ${errMessage.confirm ? styles.show : ''}`} >Passwords do not match</p>
        </div>
        <div className={styles.reg}>
            <button disabled={disabledBtn} className={`${styles.btn} ${disabledBtn ? styles.disabled : ''}`}>Registration</button>
            <p className={styles.txt_link}>Already have an account ? <Link to={'/signIn'}className={styles.link}>Sign In</Link></p>
        </div>
    </form>
}

export default Regstration