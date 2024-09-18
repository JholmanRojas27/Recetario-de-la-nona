import './css-archives/TaskRecetasNuevas.css'
import TaskForm from './TaskForm';

function TaskRecetasNuevas({Tasks}){
    return (
        <ul className='task-recetas-nuevas'>
          {tasks.map((task,index)=>(
            <TaskItem
              key={index}
              task={task}
            />
          ))
    
          }
        </ul>
      );
    }

export default TaskRecetasNuevas;