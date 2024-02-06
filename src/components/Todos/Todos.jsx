import styles from './todos.module.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';
import Todo from '../Todo/Todo';
import { sendTodoId } from '../../redux/slices/Form';
import Preloader from '../Preloader/Preloader';
import { useApiTodosQuery } from '../../redux/query/task';


function Todos({setToggle}) {
    const [screenLoading, setScreenLoading] = useState(false)

    const theme = useSelector(state => state.funcSlice.darkTheme)
    const {data, isLoading} = useApiTodosQuery({}, { refetchOnMountOrArgChange: true })
    const todos = useSelector((state) => state.todoSlice.todos)
    const visibleCont = useSelector(state => state.funcSlice.headerVisible)

    const dispatch = useDispatch()

    useEffect(() => {
        if(data) {
            dispatch(addTodo(data))
        }
    }, [data, dispatch])

    useEffect(() => {
        setScreenLoading(isLoading)
    },[isLoading])

return <section className={`${styles.todo_area} ${theme && styles.dark} ${visibleCont && styles.todo_area_not_visible}`}>
        <div className={styles.check_container}>
            <div className={styles.tasks_cont}>
                <p className={`${styles.tasks_txt} ${theme && styles.dark_txt}`}>Task List</p>
                <button className={`${styles.btn_task} ${theme && styles.dark_btn}`} onClick={() => {
                    dispatch(sendTodoId({}))
                    setToggle(true)}}></button>
            </div>
            {screenLoading ? (
                <Preloader theme={theme}/> 
            ) : (
                <div className={`${styles.inputs_container}  ${visibleCont && styles.inputs_container_not_visible}`}>
                {todos.map(todo => {
                    return <Todo key={todo._id} setToggle={setToggle} todo={todo}/>
                })}
            </div>
            )}
        </div>
    </section>
}

export default Todos;