import styles from './logout.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addUser, userLogout } from '../../redux/slices/User';
import { useGetUserDataQuery } from '../../redux/query/user';
import { useUserLogoutMutation } from '../../redux/query/user';

function Logout() {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const {data} = useGetUserDataQuery({}, { refetchOnMountOrArgChange: true })
    const [apiLogout] = useUserLogoutMutation()
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(data) {
            dispatch(addUser(data))
        }
    },[data, dispatch])

    const logout = (e) => {
        apiLogout().then((responce) => {
                if(responce.ok){
                    dispatch(userLogout())
                    Navigate('/signIn')
                }
            })
    }

    return <div className={`${styles.logout_cont} ${theme && styles.dark_logout_cont}`}>
                <button className={styles.logout} onClick={logout}>
                </button>
            </div>
}

export default Logout