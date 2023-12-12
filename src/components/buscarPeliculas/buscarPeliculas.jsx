import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Button from 'react-bootstrap/Button';
import BuscarPeliculasList from '../buscarPeliculasList/buscarPeliculasList';

const BuscadorPeliculas = () => {
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '334578d041b3e413a0795f7732894c4a'

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])


    const handleChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //fetchPeliculas()
    }

    // const fetchPeliculas = async () => {
    //     try {
    //         const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
    //         const data = await response.json()
    //         console.log(data.results)
    //         setPeliculas(data.results)
    //     }catch(error){
    //         console.error('Ha ocurrido un error ', error)
    //     }
    // }

    useEffect(() => {
        fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(json => {
            console.log(json.results)
            setPeliculas(json.results)
        })
        .catch(error => console.error(error))
    }, [busqueda])
    return (
        <>
            <div className='container'>
                <h1 className={styles.color}>Buscador de Películas</h1>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input className={styles.input} type="text"
                        placeholder='Escribi tu pelicula'
                        value={busqueda}
                        onChange={handleChange}
                    />
                    <Button type='submit' variant="primary">Buscar</Button>
                </form>

                <div>
                <BuscarPeliculasList peliculas={peliculas} />

                </div>
            </div>
        </>
    )
}

export default BuscadorPeliculas