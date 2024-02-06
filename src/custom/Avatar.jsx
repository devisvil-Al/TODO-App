import styles from './custom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../redux/slices/Func'
import { setModalActiveTrue } from '../redux/slices/Func'


function Avatar() {

    const dispatch = useDispatch()
    const user = useSelector(state => state.userSlice)

    function getModal(e){
        dispatch(setModalActiveTrue())
        dispatch(showModal({str : 'Edit your avatar link', attr : 'avatar'}))
    } 
  

    return  <div className={styles.avatar}>
         <div className={styles.edit} onClick={getModal}>Edit</div>
        <img src={user.avatar || './images/972302.png'} className={styles.img} alt="img"/>
    </div>  
    
    
}

export default Avatar