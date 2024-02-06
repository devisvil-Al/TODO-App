import styles from './todocontainer.module.css';
import Form from '../../components/Form/Form';
import Todos from '../../components/Todos/Todos';
import { useState } from 'react';

function TodoContainer() {
    const [toggle, setToggle] = useState(false)

    return <div className={styles.todo_container}>
            {toggle ? <Form setToggle={setToggle}/> : <Todos setToggle={setToggle} />}
        </div>
}

export default TodoContainer