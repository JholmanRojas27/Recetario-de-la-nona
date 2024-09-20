import { useState } from 'react';
import '../styles/CompSearch.css'

function CompSearch(){

    const [busqueda, setBusqueda] = useState('');
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