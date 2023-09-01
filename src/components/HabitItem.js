import React from 'react';
import DayStatus from './DayStatus';

const HabitItem = ({ habit, onStatusChange }) => {
  return (
<div style={{flexDirection:'column',width:'50%',margin:10}}>
<div style={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#ffebee', justifyContent: 'space-between', padding: 20, borderRadius: 5 }}>
  <div style={{ flex: 1, textAlign: 'left', color: '#e57373', fontSize: 16 }}>{habit.name}</div>
  <div style={{ flex: 1, textAlign: 'right', color: '#000000  ', fontSize: 16 }}>{habit.days+' days'}</div>
</div>

      <ul>
        {/*habit.days.map((day, index) => (
          <DayStatus
            key={index}
            dayIndex={index}
            status={day}
            
            onStatusChange={(status) => onStatusChange(habit.id, index, status)}
          />
        ))*/}
      </ul>
    </div>
  );
};

export default HabitItem;
