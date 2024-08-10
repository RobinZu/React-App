import React from 'react';
import ListItem from './ListItem';

function List({ students, onDelete }) {
  return (
    <ul>
      {students.map(student => (
        <ListItem
          key={student.id}
          student={student}
          onDelete={() => onDelete(student.id)}
        />
      ))}
    </ul>
  );
}

export default List;
