import styles from './preloader.module.css';


function Preloader({theme}) {
    

    return <>
        {theme ? <div className={styles.dark_loader}>loading</div> : <div className={styles.loader}>loading</div>}
    </>
}


export default Preloader;