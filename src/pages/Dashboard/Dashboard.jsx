import styles from './dashboard.module.css';
import Greeting from '../../custom/Greeting';
import Header from '../../components/Header/Header';
import TodoContainer from '../../components/TodoContainer/TodoContainer';
import { useSelector } from 'react-redux';

function Dashboard () {
    const theme = useSelector(state => state.funcSlice.darkTheme)


    return <section className={`${styles.dashboard} ${theme && styles.dark}`}>
        <Header/>
        <Greeting/>
        <TodoContainer/>
    </section>
}

export default Dashboard