import styles from './form.module.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTask } from '../../redux/slices/Todo';
import { useApiTodosQuery, useCreateTodoMutation } from '../../redux/query/task';
import { useUpdateTodoMutation } from '../../redux/query/task';
import Preloader from '../Preloader/Preloader';




function Form({setToggle}) {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const formData = useSelector(state => state.formSlice.editTask)
    const visibleCont = useSelector(state => state.funcSlice.headerVisible)
    const {data, isLoading} = useApiTodosQuery({}, { refetchOnMountOrArgChange: true })
    const [screenLoading, setScreenLoading] = useState(false)
    const [apiTodoCreate, apiCreateOption] = useCreateTodoMutation()
    const [apiUpdateTodo, apiUpdateOption] = useUpdateTodoMutation()
    const [input, setInput] = useState({
        name: formData.title || '',
        time: formData.time || '',
        date: formData.dayWeek || '',
        description: formData.description || '',
        completed: formData.completed ||  false,
    })

    const dispatch = useDispatch()

    useEffect( () => {
        if(data){
            dispatch(addTodo(data))
        }
    }, [data, dispatch])

    useEffect(() => {
        setScreenLoading(apiCreateOption.isLoading || apiUpdateOption.isLoading || isLoading)
    }, [apiCreateOption.isLoading, apiUpdateOption.isLoading, isLoading])

    function handleChange({target}) {
        const {name, value} = target
        setInput({...input, [name] : value})
        
    }
    
    function getInputValues(e) {
        e.preventDefault()
        const {name, time, date, description, completed} = input
        !formData._id 
            ? apiTodoCreate({title : name, time, dayWeek : date, description, completed})
                .then(() => setToggle(false))
            : apiUpdateTodo({title : name, time, dayWeek : date, description, completed, _id : formData._id})
                .then(task => {
                    dispatch(editTask(task))
                    setToggle(false)
                })
    }



    
    return <div className={`${styles.container} ${theme && styles.dark_container} ${visibleCont && styles.create_not_visible}`}>
        <button className={`${styles.btn_task} ${theme && styles.dark_btn_task}`} onClick={() => {setToggle(false)}}></button>
        {formData._id 
            ? <p className={`${styles.title} ${theme && styles.dark_title}`}>Edit task</p>
            : <p className={`${styles.title} ${theme && styles.dark_title}`}>Create task</p>}
        {screenLoading ? <Preloader theme={theme}/> : <form onSubmit={getInputValues} className={styles.form}>
            <input type="text" name='name' value={input.name} placeholder="Header" onChange={handleChange} className={`${styles.inp} ${theme && styles.dark_inp }`}/>
            <input type="time" name='time' value={input.time} placeholder="Time" onChange={handleChange} className={`${styles.inp} ${theme && styles.dark_inp }`}/>
            <input type="date" name='date' value={input.date} placeholder="Day" onChange={handleChange} className={`${styles.inp} ${theme && styles.dark_inp }`}/>
            <textarea type="text" name='description'  placeholder="Comment" onChange={handleChange} value={input.description} className={`${styles.textarea} ${theme && styles.dark_textarea } ${visibleCont && styles.textarea_not_visible}`}/>
            {formData._id 
                ? <button className={styles.create_btn}>Edit</button> 
                : <button className={styles.create_btn}>Create</button>}
        </form>}
    </div>
   
}

export default Form;