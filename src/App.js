import React, { useState } from 'react';
import downImage from './assets/images/down.png'; // Import the down image
import upArrowImage from './assets/images/up_arrow.png'; // Import the up arrow image

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Read a Book', days: Array(7).fill('None'),isExpand:false },
    { id: 2, name: 'Go to the Gym', days: Array(7).fill('None'),isExpand:false },
    // Add more habits as needed
  ]);
  const [isUp, setIsUp] = useState(false);


  const [showAddModal, setShowAddModal] = useState(false);
  const [newHabitTitle, setNewHabitTitle] = useState('');

  const handleAddHabit = () => {
    setShowAddModal(true);
  };

  const handleAddHabitSubmit = () => {
    if (newHabitTitle.trim() !== '') {
      const newHabit = {
        id: habits.length + 1,
        name: newHabitTitle,
        isExpand:false,
        days: Array(7).fill('None'),
      };
      setHabits([...habits, newHabit]);
      setNewHabitTitle('');
      setShowAddModal(false);
    }
  };
const handleOnChange =(habitIndex)=>{

  setIsUp(!isUp);

  const updatedItems = [...habits];
  updatedItems[habitIndex].isExpand = !updatedItems[habitIndex].isExpand;
  setHabits(updatedItems);
}



  const handleStatusChange = (habitIndex, dayIndex, newStatus) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].days[dayIndex] = newStatus;
    setHabits(updatedHabits);
  };

  return (
    <div style={{padding:20,alignItems:'center'}}>
      <Toolbar title="Habit Tracker" />
      <button style={styles.addHabitButton} onClick={handleAddHabit}>
        Add Habit
      </button>
      {showAddModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h3>Add New Habit</h3>
            <input
              type="text"
              value={newHabitTitle}
              onChange={(e) => setNewHabitTitle(e.target.value)}
              placeholder="Enter Habit Title"
              style={styles.modalInput}
            />
            <div style={styles.modalButtons}>
              <button style={styles.modalButton} onClick={handleAddHabitSubmit}>
                Add
              </button>
              <button style={styles.modalButton} onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {habits.map((habit, habitIndex) => {
        const doneCount = habit.days.filter(day => day === 'done').length;

        return (
          <div 
          
          style={{

            backgroundColor: '#ffebee',
            margin: 10,
            borderRadius: 8,
            width: '50%',
            flexDirection:'column',
            display: 'flex',           }}>
          <div
            key={habitIndex}
            className="habit-item"
            style={{
              marginLeft: 30,
              padding: 20,
              margin: 10,
              borderRadius: 8,
              width: '90%',

              alignSelf: 'center',
              display: 'flex', // Added display flex
              justifyContent: 'space-between', // Align items horizontally
            }}
          >
            <h3>{habit.name}</h3>
            <div className="done-count">Total Done: {doneCount}</div>
            <div>
      <img        src={isUp ? upArrowImage : downImage} 
      
      style={{ width: '30px', height: '30px' }} 
alt={habit.isExpand?"down":"up"}  onClick={()=>handleOnChange(habitIndex)}/>
    </div>

          </div>
        {habit.isExpand&&  <div className="day-statuses" style={{flexDirection:'row',marginBottom:20}}>
              {habit.days.map((day, dayIndex) => (
                <DayStatus
                  key={dayIndex}
                  status={day.status}
                  dayIndex={dayIndex}
                  onStatusChange={(newStatus) => handleStatusChange(habitIndex, dayIndex, newStatus)}
                />
              ))}
            </div>}
            </div>
        );
      })}
    </div>
  );
};

const DayStatus = ({ status, onStatusChange, dayIndex }) => {
  const statuses = ['none', 'done', 'not done'];

  return (
    <div className="day-status">
      <span>Day {(dayIndex + 1)+'  '}     </span>
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}
                  >
        {statuses.map((s, index) => (
          <option key={index} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};
const Toolbar = ({ title }) => {
  return (
    <div className="toolbar">
      <h1>{title}</h1>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  toolbar: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 0',
    textAlign: 'center',
  },
  habitList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  addHabitButton: {
    marginTop: '20px',
    backgroundColor: '#f44336',
    color: 'white',
    marginBottom:30,
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
  },
  modalInput: {
    width: '90%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    marginBottom: '10px',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  modalButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default App;
