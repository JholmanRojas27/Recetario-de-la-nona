import { useState } from 'react';
import '../styles/CompSearch.css'

const CompSearch=({recetas})=> {

    const [busqueda, setBusqueda] = useState('');

    const recetasFiltrados = recetas.filter(recetas =>
        recetas.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    
    return(
        <form>
            <div className='comp-search'>
                <input
                type='text'
                placeholder='Buscar receta...'
                onChange={(e)=>setBusqueda(e.target.value)}/>
            </div>
        </form>
    )
}

export default CompSearch;