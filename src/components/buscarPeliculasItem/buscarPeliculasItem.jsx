import styles from './styles.module.css'

const BuscarPeliculasItem = ({title,poster_path,overview }) => {
    return (
        <>
        <div className={styles.card}>     
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{overview}</p>
        </div>
        </>
    )
}

export default BuscarPeliculasItem