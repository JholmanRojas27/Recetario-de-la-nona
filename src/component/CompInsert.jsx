import { useState } from 'react';
import '../styles/CompInsert.css';
import {useNavigate} from 'react-router-dom'
import CompHeader from './CompHeader';

function CompInsert(){
    const navigate = useNavigate();

    const [newReceta, setNewReceta] = useState('')
    const [categoria, setCategoria] = useState('')
    const [ingrediente, setIngrediente] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [dificultad, setDificultad] = useState('')
    const [preparacion, setPreparacion] = useState('')


    const onSutmuit = (e) => {
        e.preventDefault()
        navigate('/')
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Agregando receta')
        console.log('receta: ',newReceta)
        console.log('Categoria: ',categoria)
        console.log('Ingredientes: ',ingrediente)
        console.log('tiempo: ',tiempo)
        console.log('Dificultad: ',dificultad)
        console.log('Preparacion: ',preparacion)

        addTask({
            create: new Date().toISOString(),
            receta: newReceta,
            categoria: categoria,
            ingrediente: ingrediente,
            tiempo: tiempo,
            dificultad: dificultad,
            preparacion: preparacion,
        })
        console.log('Receta agregada')
    }
    return(
        <form>
            <CompHeader/>
            <div className='comp-insert'>
            <input
                type='text'
                placeholder='Nombre receta'
                value={newReceta}
                onChange={(e) =>setNewReceta(e.target.value)}
            />
            <select value ={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                <option value="">..seleccione..</option>
                <option value="breakfast">Desayuno</option>
                <option value="lunch">Almuerzo</option>
                <option value="dinner">Cena</option>
            </select>
            <input
                type='text'
                value={ingrediente}
                placeholder='Ingredientes'
                onChange={(e)=>setIngrediente(e.target.value)}
            >
            </input>
            <select value ={dificultad} onChange={(e)=>setDificultad(e.target.value)}>
                <option value="">..seleccione..</option>
                <option value="easy">Facil</option>
                <option value="intermediate">Intermedio</option>
                <option value="hard">Dificil</option>
            </select>
            <textarea cols='30' rows='5' placeholder='Preparacion'>
            </textarea>
            <button 
                type='submit' 
                className='btn-insert'
                //onClick={()=>navigate('/insert/')}
                onClick={console.log('Funcionamiento del boton ok')}
                >
                AGREGAR
            </button>
            <button 
                type='submit' 
                className='btn-prew'
                onClick={(e) => onSutmuit(e)}
                >ATRAS</button>
            </div>
        </form>

    )
}

export default CompInsert;