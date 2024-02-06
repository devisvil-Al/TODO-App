import styles from './custom.module.css'
import { useEffect, useState } from 'react'

function Greeting() {
    const[dayOption, setDayOption] = useState({
        greething : '',
        date : ''
    })

    useEffect(() => {
        const date = new Date()
        const hours = date.getHours()
        if(hours >= 0 && hours <= 12) {
            setDayOption(prev => ({...prev, greething : 'Morning', date : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}))
        } else if(hours > 12 && hours <= 18) {
            setDayOption(prev => ({...prev, greething :'Afternoon', date : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}))
        } else {
            setDayOption(prev => ({...prev, greething :'Evening', date : `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}))
        }
    }, [])


    return <div className={styles.date_container}>
        <p className={styles.txt}>Good {dayOption.greething}</p>
        <p className={styles.date_num}>Date: {dayOption.date}</p>
    </div>
}

export default Greeting