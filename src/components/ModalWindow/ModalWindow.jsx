import styles from './modalwindow.module.css'
import { useDispatch } from 'react-redux'
import { patchName } from '../../redux/slices/User'
import { useSelector } from 'react-redux'
import { setModalActiveFalse } from '../../redux/slices/Func'
import { useUpdateUserNameMutation } from '../../redux/query/user'
import { useUpdateUserAvatarMutation } from '../../redux/query/user'

function ModalWindow() {
    const [apiUpdateName] = useUpdateUserNameMutation()
    const [apiUpdateAvatar] = useUpdateUserAvatarMutation()
    const setting = useSelector(state => state.funcSlice.form)
    const dispatch = useDispatch()

    function getDataChanges(e){
        e.preventDefault()
        const form = e.target
        const data = form.elements[0] 
        req(setting.attr === 'name' ? setName(data) : setAvatar(data))
    } 

    const setName = (data) => apiUpdateName({[data.name] : data.value})
    const setAvatar = (data) => apiUpdateAvatar({[data.name] : data.value})
    const req = (promise) =>  {
        promise.then((user) => {
            dispatch(patchName(user))
            dispatch(setModalActiveFalse())
        })
        .catch((err) => console.log(err))
    }
    
    return <div className={styles.modal} onClick={() => {dispatch(setModalActiveFalse())}}>
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            <h3 className={styles.title}>{setting.str}</h3>
            <form className={styles.form} onSubmit={getDataChanges}>
                <input placeholder={`New ${setting.attr} your account`} className={styles.input} type="text" name={setting.attr} />
                <button>Save</button>
            </form>
        </div>
    </div>
}

export default ModalWindow