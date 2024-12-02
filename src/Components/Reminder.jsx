import React, { useState } from 'react';
import './Reminder.css';

function Reminder() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");

  const handleInputChange = (event) => {
    setNewReminder(event.target.value); // Fixed typo
  };

  const handleAddReminder = () => {
    if (newReminder.trim()) {
      setReminders([...reminders, newReminder]); // Add new reminder to the list
      setNewReminder(""); // Clear the input field
    }
  };

  const handleDeleteReminder = (index)=>{
    setReminders(reminders.filter((item, itemIndex) => itemIndex !== index));

  }

  return (
    <div className="container">
      <h1>Reminder App</h1>

      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a Reminder" 
          value={newReminder} 
          onChange={handleInputChange} 
        />
        <button className="add-btn" onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      { reminders.length >0 ?(

      <ul className="reminder-list">
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder}
            <button onClick={()=>handleDeleteReminder(index)} className='delete-btn'>Delete</button>
            </li> 
        ))}
      </ul>):
      <p>No reminders found</p>
      }
    </div>
  );
}

export default Reminder;
