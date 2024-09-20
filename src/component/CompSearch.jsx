import { useState } from 'react';
import '../styles/CompSearch.css'

function CompSearch({recetas}){

    const [busqueda, setBusqueda] = useState('');

    {/*const reetasFiltrados = reetas.filter(recetas =>
        recetas.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );*/}
    
    return(
        <form>
            <div className='comp-search'>
                <input
                type='text'
                placeholder='Buscar receta...'
                onChange={(e)=>e.setBusqueda(e.target.value)}/>
            </div>
        </form>
    )
}

export default CompSearch;