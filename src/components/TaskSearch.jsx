import './css-archives/taskSearch.css'

function TaskSearch({setSearchQuery}) {
    return (
      <div className="task-search">
        <input
          type='text'
          placeholder='Buscar receta ...'
          onChange={(e) =>console.log('Escribistes: ', e.target.value)}
        />
      </div>
    );
  }
  
  export default TaskSearch;
  