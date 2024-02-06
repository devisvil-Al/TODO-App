import styles from './todo.module.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { sendTodoId } from '../../redux/slices/Form'; 
import { deleteTodo } from '../../redux/slices/Todo';
import { useDeleteTodoMutation } from '../../redux/query/task';
import Checkbox from '../../custom/Checkbox';
import { useState } from 'react';


export default function Todo({todo, setToggle}) {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const dispatch = useDispatch()
    const [apiDeleteTodo] = useDeleteTodoMutation()
    const [viewState, setViewState] = useState(false)
  
   
    function editBtnAction () {
        dispatch(sendTodoId(todo))
        setToggle(true)
    }

    function deleteTask() {
        apiDeleteTodo(todo._id).then(() => {
            dispatch(deleteTodo(todo._id))
        })
    }

    function viewComment() {
        setViewState(!viewState)
    }


    return <div className={`${styles.label_cont} ${theme && styles.dark_label_cont}`}>
        <Checkbox todo={todo} />
        <button className={`${styles.btn_del} ${theme && styles.dark_btn_del}`} onClick={deleteTask}></button>
        <label className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>{`Task: ${todo.title}`}</label>
        <p className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${viewState ? '' : styles.none }`}>
            <p className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>Comment: </p>
            <p className={`${styles.descriptionText} ${theme && styles.dark_inp_txt}`}>{todo.description}</p>
        </div>
        <div className={styles.container_btn}>
            <button className={`${styles.btn} ${theme && styles.dark_btn}`} onClick={viewComment}>View</button>
            <button onClick={editBtnAction} className={`${styles.editBtn} ${theme && styles.dark_btn}`}>Edit</button>

        </div>
    </div>  
}


