import BuscarPeliculasItem from '../buscarPeliculasItem/buscarPeliculasItem'
import styles from './styles.module.css'

const BuscarPeliculasList = ({peliculas}) => {

    return(
        <>
        <div className={styles.flex}>
        {peliculas.map((pelicula) => (
                      
                      <BuscarPeliculasItem key={pelicula.id} {...pelicula}/>
                  ))}
        </div>
        </>
    )
}

export default BuscarPeliculasList