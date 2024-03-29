import { useState } from "react";
import Task from "./Task";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert("Please enter task")
      return;
    }

    onAdd({ text, day, reminder})

    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input 
          type="text" 
          value={text} 
          placeholder="Task Name"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day and Time</label>
        <input 
          type="text" 
          value={day} 
          placeholder="Day & Time"
          onChange={(e) => setDay(e.target.value)}
          />
        </div>
        
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input 
            type="checkbox" 
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            className="form-control-check"
          />
        </div>
        <input type="submit" className="btn btn-bold"/>
    </form>
  )
}

export default AddTask