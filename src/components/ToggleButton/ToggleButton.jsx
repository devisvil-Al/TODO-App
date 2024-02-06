import { setDarkTheme } from '../../redux/slices/Func';
import styles from './togglebutton.module.css';
import { useDispatch, useSelector } from 'react-redux';

function ToggleButton() {
    const dispatch = useDispatch()
    const toggle = useSelector(state => state.funcSlice.toggle)

    return <div className={styles.section}>
        <label className={styles.label}>
            <input onChange={(e) => dispatch(setDarkTheme(e.target.checked))} checked={toggle} className={styles.inp} type ='checkbox'/>
            <span className = {styles.slider}></span>
        </label>
    </div>
}

export default ToggleButton;