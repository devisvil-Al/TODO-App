import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../custom/Logout/Logout';
import ModalBtn from '../../custom/ModalBtn';
import { useSelector, useDispatch} from 'react-redux';
import ToggleButton from '../ToggleButton/ToggleButton';
import Point from '../../custom/Point';
import { visibleHeight } from '../../redux/slices/Func';


function Header() {
    const user = useSelector(state => state.userSlice)
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const visibleCont = useSelector(state => state.funcSlice.headerVisible)

    const dispatch = useDispatch()

    function visibleContent() {
        dispatch(visibleHeight())
    }
    
    console.log(user);

    
    return <div className={`${styles.header_container} ${theme && styles.dark}`}>
        <div className={`${styles.visible} ${visibleCont && styles.not_visible}`}>
            <Avatar/>
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
            <Logout/>
            <ModalBtn/>
        </div>
        <Point onClick={visibleContent}/>
        <ToggleButton/>
    </div>
}

export default Header