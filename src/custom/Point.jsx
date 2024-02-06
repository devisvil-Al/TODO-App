import { useSelector, useDispatch } from 'react-redux';
import styles from './custom.module.css';
import { visibleHeight } from '../redux/slices/Func';

function Point() {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const visibleCont = useSelector(state => state.funcSlice.headerVisible)
    const dispatch = useDispatch()

    function visibleContent() {
        dispatch(visibleHeight())
    }
  
    return <button className={`${styles.point_btn} ${visibleCont ? styles.rotate : ''}`} onClick={visibleContent}>
           {theme
                ? <img src="/images/point_white.png" alt="" />
                : <img src="/images/point_black.png" alt="" />}

        </button>
}

export default Point;

