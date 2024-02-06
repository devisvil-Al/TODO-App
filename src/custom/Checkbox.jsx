import styles from './custom.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useCheckedTodoMutation } from '../redux/query/task'
import { editTask, completedTask } from '../redux/slices/Todo'
import { useState } from 'react'

export default function Checkbox({todo}) {
    const [apiChecked] = useCheckedTodoMutation()
    const dispatch = useDispatch()
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const [check, setCheck] = useState(todo.completed)

    const onCheckClick = (e) => {
        const checked = e.target.previousElementSibling.checked
        dispatch(completedTask({_id : todo._id, checked}))
        apiChecked(todo).then((data) => {
            dispatch(editTask(data.data))
            setCheck(data.data.completed)
        })
    }

    return <>
        <input type="checkbox" defaultChecked={check}  id='check' className={styles.input} />
        <label htmlFor='check' onClick={onCheckClick} 
        className={`${styles.label} ${check && styles.label_check_dark} ${check && theme && styles.label_check}`}></label>
    </>
}