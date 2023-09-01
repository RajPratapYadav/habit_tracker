import React from 'react';
import HabitItem from './HabitItem';

const HabitList = ({ habits, onStatusChange }) => {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default HabitList;
