import React from 'react';

const DayStatus = ({ status, onStatusChange }) => {
  const statuses = ['None', 'Done', 'Not Done'];

  return (
    <li>
      <select value={status} onChange={(e) => onStatusChange(e.target.value)}>
        {statuses.map((s, index) => (
          <option key={index} value={s}>
            {s}
          </option>
        ))}
      </select>
    </li>
  );
};

export default DayStatus;
