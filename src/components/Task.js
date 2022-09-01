import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      style={{display: 'flex',  flexDirection: 'row', justifyContent: 'space-between'}}
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
        <div>
            <h3>
                {task.text}{' '}
            </h3>
            <p>{task.day}</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)}
            />
        </div>
    </div>
  )
}

export default Task