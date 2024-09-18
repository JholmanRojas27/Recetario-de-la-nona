import { useState } from 'react';
import './css-archives/TaskForm.css';

function TaskForm(){
    const [newReceta, setNewReceta] = useState('')
    const [categoria, setCategoria] = useState('')
    const [ingrediente, setIngrediente] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [dificultad, setDificultad] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Agregando receta')
        console.log('receta: ',newReceta)
        console.log('Categoria: ',categoria)
        console.log('Ingredientes: ',ingrediente)
        console.log('tiempo: ',tiempo)
        console.log('Dificultad: ',dificultad)

        addTask({
            create: new Date().toISOString(),
            receta: newReceta,
            categoria: categoria,
            ingrediente: ingrediente,
            tiempo: tiempo,
            dificultad: dificultad,
        })
        console.log('Receta agregada')
    }
    return(
        <form className='task-form' onSubmit={(e)=> handleSubmit(e)}>
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
            <input
                type='text'
                value={tiempo}
                onChange={(e)=>setTiempo(e.target.value)}
            />
            <select value ={dificultad} onChange={(e)=>setDificultad(e.target.value)}>
                <option value="">..seleccione..</option>
                <option value="easy">Facil</option>
                <option value="intermediate">Intermedio</option>
                <option value="hard">Dificil</option>
            </select>
            <button type='submit'>
                AGREGAR
            </button>
        </form>
    )
}

export default TaskForm;