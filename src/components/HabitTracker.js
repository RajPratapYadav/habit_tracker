import React, { useState } from 'react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    // Initialize habit data here
    // Each habit object might contain name, status for 7 days, etc.
  ]);

  const handleStatusChange = (habitIndex, dayIndex, newStatus) => {
    // Update the status of a habit for a specific day
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].days[dayIndex].status = newStatus;
    setHabits(updatedHabits);
  };

  return (
    <div>
      {habits.map((habit, habitIndex) => (
        <div key={habitIndex}>
          <h3>{habit.name}</h3>
          <div>
            {habit.days.map((day, dayIndex) => (
              <DayStatus
                key={dayIndex}
                status={day.status}
                onStatusChange={(newStatus) => handleStatusChange(habitIndex, dayIndex, newStatus)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const DayStatus = ({ status, onStatusChange }) => {
  const statuses = ['none', 'done', 'not done'];

  return (
    <div>
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        {statuses.map((s, index) => (
          <option key={index} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HabitTracker;
